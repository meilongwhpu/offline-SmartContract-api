package io.nuls.contract.service.impl;

import io.nuls.base.basic.AddressTool;
import io.nuls.base.signture.P2PHKSignature;
import io.nuls.base.signture.SignatureUtil;
import io.nuls.contract.account.constant.AccountErrorCode;
import io.nuls.contract.account.model.bo.Account;
import io.nuls.contract.account.model.po.AccountPo;
import io.nuls.contract.account.storage.AccountStorageService;
import io.nuls.contract.account.utils.AccountTool;
import io.nuls.contract.model.BalanceInfo;
import io.nuls.contract.service.AccountKeyStoreService;
import io.nuls.contract.service.AccountService;
import io.nuls.core.crypto.ECKey;
import io.nuls.core.exception.NulsException;
import io.nuls.core.exception.NulsRuntimeException;
import io.nuls.core.log.Log;
import io.nuls.core.model.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

@Service
public class AccountServiceImpl implements AccountService {

    private Lock locker = new ReentrantLock();

    @Autowired
    private HttpClient httpClient;

    @Autowired
    private AccountStorageService accountStorageService;

    @Autowired
    private AccountKeyStoreService accountKeyStoreService;

    @Override
    public Account createAccount(int chainId, String password) {
        locker.lock();
        try {
            Account account = AccountTool.createAccount(chainId);
            if (StringUtils.isNotBlank(password)) {
                account.encrypt(password);
            }
            AccountPo po = new AccountPo(account);
            boolean result = accountStorageService.saveAccount(po);
            if(result){
                accountKeyStoreService.backupAccountToKeyStore(null, chainId, account.getAddress().getBase58(), password);
            }
            return account;
        } catch (NulsException e) {
            Log.error(e);
            throw new NulsRuntimeException(e.getErrorCode());
        }finally {
            locker.unlock();
        }
    }

    @Override
    public Account getAccount(int chainId, String address) {
        if (!AddressTool.validAddress(chainId, address)) {
            throw new NulsRuntimeException(AccountErrorCode.ADDRESS_ERROR);
        }
        byte[] addressBytes = AddressTool.getAddress(address);
        AccountPo accountPo=accountStorageService.getAccount(addressBytes);
        Account account=accountPo.toAccount();
        return account;
    }


    @Override
    public BalanceInfo getAccountBalance(int chainId, int assetId, String address) {
        BalanceInfo balanceInfo=null;
        try{
            balanceInfo= httpClient.getRpcHttpClient().invoke("getAccountBalance",new Object[]{chainId,assetId,address},BalanceInfo.class);
        }catch (Throwable e){
            Log.error("call api-moudle: getAccountBalance error",e);
        }
          return balanceInfo;
    }

    @Override
    public P2PHKSignature signDigest(byte[] digest, int chainId, String address, String password) throws NulsException {
        if (null == digest || digest.length == 0) {
            throw new NulsRuntimeException(AccountErrorCode.PARAMETER_ERROR);
        }
        byte[] addressBytes = AddressTool.getAddress(address);
        AccountPo accountPo=accountStorageService.getAccount(addressBytes);
        //根据密码获得ECKey get ECKey from Password
        ECKey ecKey = accountPo.getEcKey(password);
        try {
            byte[] signBytes = SignatureUtil.signDigest(digest, ecKey).serialize();
            return new P2PHKSignature(signBytes, ecKey.getPubKey());
        } catch (IOException e) {
            Log.error(e.getMessage());
            throw new NulsRuntimeException(AccountErrorCode.IO_ERROR);
        }
    }

    @Override
    public boolean validationPassword(int chainId, String address, String password) {
        byte[] addressBytes = AddressTool.getAddress(address);
        AccountPo accountPo=accountStorageService.getAccount(addressBytes);
        boolean result =accountPo.validatePassword(password);
        return result;
    }


}
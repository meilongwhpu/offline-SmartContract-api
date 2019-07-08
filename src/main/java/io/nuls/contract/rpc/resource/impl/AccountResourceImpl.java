package io.nuls.contract.rpc.resource.impl;

import com.googlecode.jsonrpc4j.JsonRpcParam;
import com.googlecode.jsonrpc4j.spring.AutoJsonRpcServiceImpl;
import io.nuls.contract.account.model.bo.AccountInfo;
import io.nuls.contract.model.BalanceInfo;
import io.nuls.contract.model.RpcErrorCode;
import io.nuls.contract.model.RpcResultError;
import io.nuls.contract.rpc.resource.AccountResource;
import io.nuls.contract.service.AccountKeyStoreService;
import io.nuls.contract.service.AccountService;
import io.nuls.core.exception.NulsRuntimeException;
import io.nuls.core.log.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@AutoJsonRpcServiceImpl
public class AccountResourceImpl implements AccountResource {

    @Autowired
    private AccountService accountService;

    @Autowired
    private AccountKeyStoreService accountKeyStoreService;

    @Override
    public Map test(@JsonRpcParam(value = "id") long id) {
        Map<String,String> map = new HashMap<String,String>();
            if(id==1){
                map.put("address","test-result"+id);
                return map;
            }else if(id==2){
                throw new NulsRuntimeException(RpcErrorCode.PARAMETER_ERROR);
            }
        try{
            BalanceInfo info= accountService.getAccountBalance(2,1,"tNULSeBaMnrs6JKrCy6TQdzYJZkMZJDng7QAsD");
            System.out.println(info.toString());
            Log.info("input : "+id);
            map.put("address",id+"-test");
            return map;
        }catch (Exception e){
            RpcResultError error = new RpcResultError(RpcErrorCode.ACCOUNT_NOT_EXIST.getCode(),RpcErrorCode.ACCOUNT_NOT_EXIST.getMsg());
            Log.info("-------"+e.getMessage());
            map.put("address",error.getCode()+"---"+error.getMessage());
            return   map;
        }
    }

    @Override
    public AccountInfo test2(@JsonRpcParam(value = "id") long id) {
        AccountInfo accountInfo= new AccountInfo();
        accountInfo.setChainId(2);
        accountInfo.setAddress("12312312312312");
        return accountInfo;
    }
}
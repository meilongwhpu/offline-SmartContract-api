package io.nuls.contract.helper;

import io.nuls.base.RPCUtil;
import io.nuls.base.basic.TransactionFeeCalculator;
import io.nuls.base.data.CoinData;
import io.nuls.base.data.CoinFrom;
import io.nuls.base.data.CoinTo;
import io.nuls.base.data.Transaction;
import io.nuls.contract.model.RpcErrorCode;
import io.nuls.contract.model.RpcResult;
import io.nuls.contract.model.txdata.CallContractData;
import io.nuls.contract.model.txdata.CreateContractData;
import io.nuls.contract.model.txdata.DeleteContractData;
import io.nuls.core.basic.NulsData;
import io.nuls.core.basic.Result;
import io.nuls.core.basic.VarInt;
import io.nuls.core.exception.NulsException;
import io.nuls.core.model.LongUtils;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.math.BigInteger;

import static io.nuls.contract.constant.ContractConstant.UNLOCKED_TX;
import static io.nuls.core.constant.CommonCodeConstanst.FAILED;

@Component
public class ContractTxHelper {

    public CreateContractData getCreateContractData(byte[] senderBytes, byte[] contractAddressBytes, BigInteger value, long gasLimit, long price, byte[] contractCode, String[][] args) {
        CreateContractData createContractData = new CreateContractData();
        createContractData.setSender(senderBytes);
        createContractData.setContractAddress(contractAddressBytes);
        createContractData.setGasLimit(gasLimit);
        createContractData.setPrice(price);
        createContractData.setCode(contractCode);
        if (args != null) {
            createContractData.setArgsCount((byte) args.length);
            createContractData.setArgs(args);
        }
        return createContractData;
    }

    public int calcSize(NulsData nulsData) {
        if (nulsData == null) {
            return 0;
        }
        int size = nulsData.size();
        // 计算tx.size()时，当coinData和txData为空时，计算了1个长度，若此时nulsData不为空，则要扣减这1个长度
        return VarInt.sizeOf(size) + size - 1;
    }

    public CoinData makeCoinData(int chainId,int assetId,byte[] senderBytes, byte[] contractAddress, long gasLimit, long price, BigInteger value, int txSize, NulsData txData,String nonce,BigInteger balance) {
        long gasUsed = gasLimit;
        BigInteger imputedValue = BigInteger.valueOf(LongUtils.mul(gasUsed, price));
        // 总花费
        BigInteger totalValue = imputedValue.add(value);

        CoinData coinData = new CoinData();
        CoinFrom coinFrom = new CoinFrom(senderBytes, chainId, assetId, imputedValue, RPCUtil.decode(nonce), UNLOCKED_TX);
        coinData.addFrom(coinFrom);

        if (value.compareTo(BigInteger.ZERO) > 0) {
            CoinTo coinTo = new CoinTo(contractAddress, chainId, assetId, value);
            coinData.addTo(coinTo);
        }
        BigInteger fee = TransactionFeeCalculator.getNormalUnsignedTxFee(txSize + calcSize(txData) + calcSize(coinData));
        totalValue = totalValue.add(fee);
        if (balance.compareTo(totalValue) < 0) {
            return null;
        }
        coinFrom.setAmount(totalValue);
        return coinData;
    }

        public CallContractData getCallContractData(byte[] senderBytes, byte[] contractAddressBytes, BigInteger value, long gasLimit, long price, String methodName, String methodDesc, String[][] args) {
        CallContractData callContractData = new CallContractData();
        callContractData.setContractAddress(contractAddressBytes);
        callContractData.setSender(senderBytes);
        callContractData.setValue(value);
        callContractData.setPrice(price);
        callContractData.setGasLimit(gasLimit);
        callContractData.setMethodName(methodName);
        callContractData.setMethodDesc(methodDesc);
        if (args != null) {
            callContractData.setArgsCount((byte) args.length);
            callContractData.setArgs(args);
        }
        return callContractData;
    }

    public DeleteContractData getDeleteContractData(byte[] contractAddressBytes, byte[] senderBytes) {
        DeleteContractData deleteContractData = new DeleteContractData();
        deleteContractData.setContractAddress(contractAddressBytes);
        deleteContractData.setSender(senderBytes);
        return deleteContractData;
    }

}
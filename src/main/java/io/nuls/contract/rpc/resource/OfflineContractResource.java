package io.nuls.contract.rpc.resource;

import com.googlecode.jsonrpc4j.JsonRpcParam;
import com.googlecode.jsonrpc4j.JsonRpcService;
import io.nuls.contract.account.model.bo.AccountInfo;
import io.nuls.contract.model.ContractInfo;
import io.nuls.core.basic.Page;

import java.math.BigInteger;
import java.util.Map;

@JsonRpcService("/offlineSmartContract")
public interface OfflineContractResource {

    public Map createAccount(@JsonRpcParam(value = "chainId")int chainId, @JsonRpcParam(value = "password")String password);

    public AccountInfo getAccount(@JsonRpcParam(value = "chainId")int chainId, @JsonRpcParam(value = "assetId")int assetId, @JsonRpcParam(value = "address")String address);

    public Page<String> getAccountList(@JsonRpcParam(value = "chainId")int chainId, @JsonRpcParam(value = "pageNumber")int pageNumber, @JsonRpcParam(value = "pageSize")int pageSize);

    public Map exportAccountKeyStore(@JsonRpcParam(value = "chainId")int chainId, @JsonRpcParam(value = "address")String address, @JsonRpcParam(value = "password")String password,@JsonRpcParam(value = "filePath")String filePath);

    public Map importAccountByKeystore(@JsonRpcParam(value = "chainId")int chainId, @JsonRpcParam(value = "password")String password,@JsonRpcParam(value = "keyStore")String keyStore,@JsonRpcParam(value = "overwrite")boolean overwrite);

    public Map importAccountByPriKey(@JsonRpcParam(value = "chainId")int chainId,@JsonRpcParam(value = "priKey")String priKey, @JsonRpcParam(value = "password")String password, @JsonRpcParam(value = "overwrite")boolean overwrite);

    public Map exportPriKeyByAddress(@JsonRpcParam(value = "chainId")int chainId,@JsonRpcParam(value = "address")String address,@JsonRpcParam(value = "password")String password);

    public Map createContract(@JsonRpcParam(value = "chainId")int chainId, @JsonRpcParam(value = "assetId")int assetId, @JsonRpcParam(value = "sender")String sender, @JsonRpcParam(value = "password")String password, @JsonRpcParam(value = "contractCode")String contractCode, @JsonRpcParam(value = "alias")String alias, @JsonRpcParam(value = "args")Object[] args, @JsonRpcParam(value = "gasLimit")long gasLimit, @JsonRpcParam(value = "price")long price, @JsonRpcParam(value = "remark")String remark);

    public Map getContractConstructor(@JsonRpcParam(value = "chainId")int chainId,@JsonRpcParam(value = "contractAddress")String contractAddress);

    public ContractInfo getContract(@JsonRpcParam(value = "chainId")int chainId, @JsonRpcParam(value = "contractAddress")String contractAddress);

    public Map callContract(@JsonRpcParam(value = "chainId")int chainId, @JsonRpcParam(value = "assetId")int assetId, @JsonRpcParam(value = "sender")String sender,@JsonRpcParam(value = "password")String password, @JsonRpcParam(value = "contractAddress")String contractAddress,@JsonRpcParam(value = "value")BigInteger value,@JsonRpcParam(value = "methodName")String methodName, @JsonRpcParam(value = "methodDesc")String methodDesc,@JsonRpcParam(value = "args")Object[] args, @JsonRpcParam(value = "gasLimit")long gasLimit, @JsonRpcParam(value = "price")long price,@JsonRpcParam(value = "remark")String remark);

    public Map deleteContract(@JsonRpcParam(value = "chainId")int chainId, @JsonRpcParam(value = "assetId")int assetId, @JsonRpcParam(value = "sender")String sender,@JsonRpcParam(value = "password")String password, @JsonRpcParam(value = "contractAddress")String contractAddress,@JsonRpcParam(value = "remark")String remark);

    public Map  invokeContractViewMethod(@JsonRpcParam(value = "chainId")int chainId, @JsonRpcParam(value = "contractAddress")String contractAddress, @JsonRpcParam(value = "methodName")String methodName, @JsonRpcParam(value = "methodDesc")String methodDesc, @JsonRpcParam(value = "args")Object[] args);

    public Map getContractMethodArgsTypes(@JsonRpcParam(value = "chainId")int chainId,@JsonRpcParam(value = "contractAddress")String contractAddress, @JsonRpcParam(value = "methodName")String methodName);
}
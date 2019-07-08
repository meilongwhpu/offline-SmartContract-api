package io.nuls.contract.account.model.bo;

import java.math.BigInteger;

public class AccountInfo {

    private int chainId;

    private String address;

    private BigInteger balance;

    private BigInteger totalBalance;

    public AccountInfo() {
    }

    public int getChainId() {
        return chainId;
    }

    public void setChainId(int chainId) {
        this.chainId = chainId;
    }
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public BigInteger getBalance() {
        return balance;
    }

    public void setBalance(BigInteger balance) {
        this.balance = balance;
    }

    public BigInteger getTotalBalance() {
        return totalBalance;
    }

    public void setTotalBalance(BigInteger totalBalance) {
        this.totalBalance = totalBalance;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("{");
        sb.append("\"address\":")
                .append('\"').append(address).append('\"');
        sb.append(",\"chainId\":")
                .append(chainId);
        sb.append(",\"balance\":")
                .append('\"').append(balance).append('\"');
        sb.append(",\"totalBalance\":")
                .append(totalBalance);
        sb.append('}');
        return sb.toString();
    }
}
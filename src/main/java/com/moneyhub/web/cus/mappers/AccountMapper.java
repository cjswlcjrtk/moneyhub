package com.moneyhub.web.cus.mappers;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.cus.domains.AccountHistory;

@Repository
public interface AccountMapper {
	
	public void createAcc(Account acc);
	public void createAccHistory(AccountHistory accHistory);
	public int existAcc(String acc);
	public List<AccountHistory> getAccHis(Map<String,Object> map);
	public Account getAcc(String t);
	
	public void withDrawal(AccountHistory accHistory);
	public void insertDeposit(AccountHistory accHistory);
	public void updateBalance(Account acc);
	public int getBalance(String acctNo);
}

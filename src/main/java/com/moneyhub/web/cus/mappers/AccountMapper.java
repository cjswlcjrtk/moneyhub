package com.moneyhub.web.cus.mappers;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.cus.domains.Account;

@Repository
public interface AccountMapper {
	
	public void createAcc(Account acc);
	public int existAcc(String acc);
	public Account getAcc(String t);

}

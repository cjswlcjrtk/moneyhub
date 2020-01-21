package com.moneyhub.web.cus;

import java.util.function.Supplier;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Repository;


@Repository
public interface CustomerMapper {
	
	public void join(Customer param);
	public Customer login(Customer param);
	public int existId(String id);
	public void pwdSha(Customer param);
//	public int pwdCheck(Customer param);
	public void withdrawal(Customer param);
	public void pwdChg(Customer param);
	public Customer cusInfo(Customer param);
}

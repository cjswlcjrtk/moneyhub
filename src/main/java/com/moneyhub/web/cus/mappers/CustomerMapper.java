package com.moneyhub.web.cus.mappers;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.cus.domains.Customer;
import com.moneyhub.web.faq.FAQ;


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
	public void cusInfoChg(Customer param);
	public String CreateAcc(Customer param);
}

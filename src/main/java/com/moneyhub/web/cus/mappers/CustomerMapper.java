package com.moneyhub.web.cus.mappers;


import org.springframework.stereotype.Repository;

import com.moneyhub.web.cus.domains.Customer;


@Repository
public interface CustomerMapper {
	
	public void join(Customer param);
	public Customer login(Customer param);
	public int existId(String cemail);
	public void pwdSha(Customer param);
	public void withdrawal(Customer param);
	public void pwdChg(Customer param);
	public Customer cusInfo(Customer param);
	public void cusInfoChg(Customer param);
	public Customer getInfo(Customer param);
}

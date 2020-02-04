package com.moneyhub.web.cus.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.cus.domains.Customer;
import com.moneyhub.web.cus.mappers.AccountMapper;
import com.moneyhub.web.pxy.Box;

@Service
public class AccountService {
	
	@Autowired Account acc;
	@Autowired AccountMapper accMapper;
	@Autowired Box<Object> box;
	@Autowired Customer cus;
	
	public void createAcc(Customer param){
		System.out.println("::::param"+param);
		String result = Integer.toString((int)(Math.random() * 100) + 1) 
				+ param.getBirth().replace("-", "").substring(2) + param.getZip(); //계좌번호 생성
		System.out.println("result는?????" + result);
		int exist = accMapper.existAcc(result);
		if(exist != 0) {
			System.out.println("exist는????" + exist);
		}else {
			acc.setCemail(param.getCemail());
			acc.setAcct_no(result);
			System.out.println("acc는????" + acc.toString());
			accMapper.createAcc(acc);
		}
	}
	
}

package com.moneyhub.web.cus.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.cus.domains.AccountHistory;
import com.moneyhub.web.cus.domains.Customer;
import com.moneyhub.web.cus.mappers.AccountMapper;
import com.moneyhub.web.cus.services.AccountService;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Proxy;


@RestController
@RequestMapping("/account")
public class AccountCtrl extends Proxy {

	@Autowired Customer cus;
	@Autowired Box<Object> box;
	@Autowired SqlSession sqlsession;
	@Autowired 
	private AccountService accountService;
	@Autowired AccountMapper accMapper;
	@Autowired Account acc;
	@Autowired AccountHistory accHis;

    
	
	@GetMapping("/getacchis/{cemail}/{acctNo}") //계좌 조회 
	public Map<? ,?> getAccHis(@PathVariable HashMap<String,Object> map){
	box.clear();
	Function<HashMap<String,Object>, List<AccountHistory>> f = t -> accMapper.getAccHis(t);
	box.put("msg","SUCCESS"); box.put("accHis",f.apply(map));
	return box.get(); 
	}
	
	@PostMapping("/deposit")
	public void deposit(@RequestBody HashMap<String, Object> deposit) {
		accountService.deposit(deposit); 
	}
	
	@PostMapping("/withdrawal")  //출금
	public Map<?, ?> ReWithDrawal(@RequestBody HashMap<String, Object> param){
		accountService.withDrawal(param);
		return param;
		}
	
	@GetMapping("/balance/{acctNo}")
	public Map<? ,?> getBalance(@PathVariable String acctNo){
		Function<String, Integer> balance = t -> accMapper.getBalance(t);
		box.clear();
		box.put("balance",  balance.apply(acctNo));
		return box.get();
	}
	
}
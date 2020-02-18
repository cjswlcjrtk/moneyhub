package com.moneyhub.web.cus.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.function.Consumer;
import java.util.function.Function;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.cus.domains.AccountHistory;
import com.moneyhub.web.cus.domains.Customer;
import com.moneyhub.web.cus.mappers.AccountMapper;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.pxy.Proxy;

@Service
public class AccountService {
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	@Autowired Proxy pxy;
	@Autowired Account acc;
	@Autowired AccountHistory accHistory;
	@Autowired AccountMapper accMapper;
	@Autowired Box<Object> box;
	@Autowired Customer cus;
	
	@Transactional
	public void createAcc(Customer param){
		Date date = new Date();
		String result = Integer.toString((int)(Math.random() * 100) + 1) 
				+ param.getBirth().replace("-", "").substring(2) + param.getZip(); //계좌번호 생성
		int exist = accMapper.existAcc(result);
		int balance = 100000000; 
		int deposit = 100000000; 
		String comment = "신규 가입 지급";
		if(exist != 0) {
		}else {
			acc.setCemail(param.getCemail());
			acc.setAcctNo(result);
			acc.setBalance(balance);
			accMapper.createAcc(acc);
			//EJ 계좌내역 테이블 인서트
			accHistory.setCemail(param.getCemail());
			accHistory.setAstatcd("1"); // 상태코드 1은 입금 2는 출금
			accHistory.setBalance(balance);
			accHistory.setDeposit(deposit);
			accHistory.setAcctNo(result); 
			accHistory.setComment(comment);
			accMapper.insertDeposit(accHistory);
		}
	}
	
	public void withDrawal(HashMap<String, Object> param) {
		int bal = accMapper.getBalance(param.get("acctNo").toString());
		int drawal = Integer.valueOf(param.get("trdsnd").toString()); // 입금할 금액으로 받아야함
		int subBal = bal -= drawal;
		if(bal > 0) {
			accHistory.setCemail(param.get("cemail").toString());
			accHistory.setAstatcd("2"); // 상태코드 1은 입금 2는 출금
			accHistory.setBalance(subBal);
			accHistory.setWithdrawal( Integer.valueOf(param.get("trdsnd").toString()));
			accHistory.setAcctNo(param.get("acctNo").toString()); 
			accHistory.setCrtmem("LEJ");
			accHistory.setComment("출금");
			accHistory.setAtypecd(param.get("type").toString()); // 종류 1은 송금 2는 환전
			accMapper.withDrawal(accHistory);
			acc.setCemail(param.get("cemail").toString());
			acc.setAcctNo(param.get("acctNo").toString());
			acc.setBalance(subBal);
			accMapper.updateBalance(acc);
		}
	}

	public void deposit(HashMap<?, Object> deposit) {
		int bal = Integer.valueOf(deposit.get("balance").toString());
		int de = Integer.valueOf(deposit.get("deposit").toString());
		int addBal = bal+=de;
		accHistory.setCemail(deposit.get("cemail").toString());
		accHistory.setAstatcd("1"); // 상태코드 1은 입금 2는 출금
		accHistory.setBalance(addBal);
		accHistory.setDeposit(Integer.valueOf(deposit.get("deposit").toString()));
		accHistory.setAcctNo(deposit.get("acctNo").toString()); 
		accHistory.setComment("입금");
		accHistory.setCrtmem("LEJ");
		accMapper.insertDeposit(accHistory);
		acc.setCemail(deposit.get("cemail").toString());
		acc.setAcctNo(deposit.get("acctNo").toString());
		acc.setBalance(addBal);
		accMapper.updateBalance(acc);
	}
}

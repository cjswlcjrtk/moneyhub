package com.moneyhub.web.cus.controller;

import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.cus.domains.Customer;
import com.moneyhub.web.cus.mappers.AccountMapper;
import com.moneyhub.web.cus.mappers.CustomerMapper;
import com.moneyhub.web.cus.services.AccountService;
import com.moneyhub.web.cus.util.CustomerSha256;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Proxy;


@RestController
@RequestMapping("/customers")
public class CustomerCtrl extends Proxy {

	/* @Autowired CustomerServiceImpl customerServiceImpl; */
	@Autowired Customer cus;
	@Autowired CustomerMapper cusMapper;
	@Autowired Box<Object> box;
	@Autowired SqlSession sqlsession;
	@Autowired AccountService accountService;
	@Autowired AccountMapper accMapper;
	@Autowired Account acc;
	// @Autowired CustMailSender mailSender;
	// private HttpServletRequest request;

	@PostMapping("/login")
	public Map<?, ?> login(@RequestBody Customer param) {
		System.out.println(param.toString());
		Function<Customer, Customer> f = t -> cusMapper.login(t);
		cus = f.apply(param);
		// System.out.println(cus.getCemail());
		String result = (cus != null) ? "SUCCESS" : "FAIL";
		box.clear();
		box.put("msg", result);
		box.put("cus", cus);
		System.out.println(box.get());

		return box.get();
	}

	@PostMapping("/")
	public Map<?, ?> join(@RequestBody Customer param) {
		System.out.println("join 들어옴");
		System.out.println(param.toString());
		Consumer<Customer> c = o -> cusMapper.join(o);
		c.accept(param);
		System.out.println("첫번째 비번: " + param.getCpwd());
		String encrypwd = CustomerSha256.encrypt(param.getCpwd());
		param.setCpwd(encrypwd);
		System.out.println("두번째 비번: " + param.getCpwd());
		cusMapper.join(param);
		accountService.createAcc(param);
		box.clear();
		box.put("msg", "SUCCESS");
		return box.get();
	}

	@GetMapping("/existid/{cemail}/")
	public Map<?, ?> existId(@PathVariable String cemail) {
		System.out.println("aaaa:::" + cemail);
		System.out.println("existid 들어옴");
		Function<String, Integer> f = o -> cusMapper.existId(o);
		box.clear();
		box.put("msg", (f.apply(cemail) != 0) ? "Y" : "N");
		System.out.println(box.get());
		return box.get();
	}
	
//	@GetMapping("/existid/{acct_no}/")
//	public Map<?, ?> existAcc(@PathVariable String acc) {
//		System.out.println("existAcc!!!!!! 들어옴");
//		Function<String, Integer> f = o -> accMapper.existAcc(o);
//		box.clear();
//		box.put("msg", (f.apply(acc) != 0) ? "Y" : "N");
//		System.out.println(box.get());
//		return box.get();
//	}

//	@PostMapping("/pwdCheck")
//	public Map<?, ?> pwdCheck(@RequestBody Customer param) {
	// Function<Customer, Customer> f = t -> cusMapper.login(t);
	// cus = f.apply(param);
//		int result = cusMapper.pwdCheck(param);
//		String result2 = Integer.toString(result);
//		System.out.println("비밀번호 체크1 : "+result);
//		System.out.println("비밀번호 체크2 : "+result2);
//		box.clear();
//		box.put("msg", result2);
//		return box.get();
//	}

	@DeleteMapping("/withdrawal")
	public Map<?, ?> withdrawal(@RequestBody Customer param) {
		System.out.println("자바 withdrawal 들어옴");
		String cpwd = cus.getCpwd();
		String cpwd2 = param.getCpwd();
		System.out.println("cpwd는? " + cpwd + " / cpwd2는? " + cpwd2);
		System.out.println("cus.getCpwd()는? " + cus.getCpwd() + " / param.getCpwd()는? " + param.getCpwd());
		box.clear();
		box.put("msg", (cpwd.equals(cpwd2)) ? "true" : "false");
		if ((cpwd.equals(cpwd2))) {
			Consumer<Customer> c = o -> cusMapper.withdrawal(o);
			c.accept(param);
			box.put("msg", "true");
		} else {
			box.put("msg", "false");
		}

		System.out.println("박스에 담긴 메시지" + box.get("msg"));
		return box.get();
	}

	@PostMapping("/pwdChg")
	public Map<?, ?> pwdChg(@RequestBody Customer param) {
		System.out.println("자바 비번변경 들어옴");
		System.out.println("---------------"+param.toString());
		Consumer<Customer> c = o -> cusMapper.pwdChg(o);
		c.accept(param);
		System.out.println("***********"+param.toString());
		System.out.println("cus는???????????"+cus);
		String cpwd = cus.getCpwd(); //로그인 시 입력한 비밀번호
		String cpwd2 = param.getCpwd(); //비밀번호 변경 시 입력한 비밀번호x
		System.out.println("cpwd는? " + cpwd + " / cpwd2는? " + cpwd2);
		System.out.println("cus.getCpwd()는? " + cus.getCpwd() + " / param.getCpwd()는? " + param.getCpwd());
		box.clear();
		//box.put("msg", (cpwd != cpwd2) ? "true" : "false");
		if (param.getCemail().equals(cus.getCemail()) && cpwd != cpwd2) {
			box.put("msg", "true");
			box.put("cus", cus);
		} else {
			box.put("msg", "false");
		}
		System.out.println("박스에 담긴 메시지: " + box.get());
		return box.get();
	}
	
	@GetMapping("/cusInfo/{cemail}")
	public Map<? ,?> cusInfo(Customer param){
		System.out.println("=============================cusInfo");
		Consumer<Customer> c = o -> cusMapper.cusInfo(o);
		c.accept(param);
		box.clear();
		box.put("cus", cus);
		System.out.println("box.get() -----------> "+box.get().toString());
		return box.get();
	}
	
	@PostMapping("/cusInfoChg")
	public Map<?, ?> cusInfoChg(@RequestBody Customer param) {
		System.out.println("=============================자바 회원 정보 수정 들어옴");
		Consumer<Customer> c = o -> cusMapper.cusInfoChg(o);
		c.accept(param);
		System.out.println("cus는???????????"+cus);
		String daddr = cus.getDaddr();
		String zip = param.getZip(); //정보번호 변경 시 입력한 우편번호
		String addr = param.getAddr(); //정보번호 변경 시 입력한 주소
		String daddr2 = param.getDaddr(); //정보번호 변경 시 입력한 상세주소
		System.out.println("zip는? " + zip + " / addr는? " + addr + " / addr는? " + daddr);
		System.out.println("param.getZip()은? " + param.getZip() + " / param.getAddr()는? " + param.getAddr() + " / param.getdaddr()는? " + param.getDaddr());
		box.clear();
		if (zip != null) {
			box.put("msg", "true");
			box.put("cus", cus);
		} else {
			box.put("msg", "false");
		}
		System.out.println("cus는?" + cus);
		System.out.println("박스에 담긴 메시지: " + box.get());
		return box.get();
	}
	
	@GetMapping("/getAcc/{cemail}")
	public Map<? ,?> getAcc(@PathVariable String cemail){
		System.out.println("=============================계좌번호 조회 들어옴1!!!!!");
		Function<String, Account> f = t -> accMapper.getAcc(acc);
		acc = f.apply(cemail);
		Function<String, Customer> f2 = t -> cusMapper.getInfo(cus);
		cus = f2.apply(cemail);
		box.clear();
		box.put("msg", "SUCCESS");
		box.put("cemail", cus.getCemail());
		box.put("cname", cus.getCname());
		box.put("accNo", acc.getAcct_no());
		System.out.println("param은?" );
		System.out.println("cus는?" + cus);
		System.out.println("acc는?" + acc);
		System.out.println("box.get() -----------> "+box.get().toString());
		return box.get();
	}
	
}

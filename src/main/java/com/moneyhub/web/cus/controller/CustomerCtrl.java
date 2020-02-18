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
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.cus.domains.AccountHistory;
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

	@Autowired Customer cus;
	@Autowired CustomerMapper cusMapper;
	@Autowired Box<Object> box;
	@Autowired SqlSession sqlsession;
	@Autowired AccountService accountService;
	@Autowired AccountMapper accMapper;
	@Autowired Account acc;
	@Autowired AccountHistory accHis;

	@PostMapping("/login/{cemail}/")
    public Map<?, ?> login(@RequestBody Customer param, @PathVariable String  cemail) {
          String encrypwd = CustomerSha256.encrypt(param.getCpwd());
          param.setCpwd(encrypwd);
          Function<Customer, Customer> f = t -> cusMapper.login(t);
          cus = f.apply(param);
          Function<String, Account> p = t -> accMapper.getAcc(t);
          acc = p.apply(cemail);
          String result = (cus != null) ? "SUCCESS" : "FAIL";
          box.clear();
          box.put("msg", result);
          box.put("cus", cus);
          box.put("acc", acc);
          box.put("accHis", accHis);
          return box.get();
    }
    
    @PostMapping("/")
    public Map<?, ?> join(@RequestBody Customer param) {
          String encrypwd = CustomerSha256.encrypt(param.getCpwd());
          param.setCpwd(encrypwd);
          param.setCstcd("1");
          cusMapper.join(param);
          accountService.createAcc(param);
          box.clear();
          box.put("msg", "SUCCESS");
          return box.get();
    }

	@GetMapping("/existid/{cemail}/")
	public Map<?, ?> existId(@PathVariable String cemail) {
		Function<String, Integer> f = o -> cusMapper.existId(o);
		box.clear();
		box.put("msg", (f.apply(cemail) != 0) ? "Y" : "N");
		return box.get();
	}
	
	@DeleteMapping("/withdrawal")
	public Map<?, ?> withdrawal(@RequestBody Customer param) {
		String encrypwd = CustomerSha256.encrypt(param.getCpwd());
        param.setCpwd(encrypwd);
		String cpwd = cus.getCpwd();
		String cpwd2 = param.getCpwd();
		box.clear();
		box.put("msg", (cpwd.equals(cpwd2)) ? "true" : "false");
		if ((cpwd.equals(cpwd2))) {
			Consumer<Customer> c = o -> cusMapper.withdrawal(o);
			c.accept(param);
			box.put("msg", "true");
		} else {
			box.put("msg", "false");
		}
		return box.get();
	}

	@PostMapping("/pwdChg")
    public Map<?, ?> pwdChg(@RequestBody Customer param) {
          String encrypwd = CustomerSha256.encrypt(param.getCpwd());
          param.setCpwd(encrypwd);
          Consumer<Customer> c = o -> cusMapper.pwdChg(o);
          c.accept(param);
          box.clear();
          if (param.getCemail().equals(cus.getCemail()) && cus.getCpwd() != param.getCpwd()) {
                 box.put("msg", "true");
                 box.put("cus", cus);
          } else {
                 box.put("msg", "false");
          }
          return box.get();
    }
	
	@GetMapping("/cusInfo/{cemail}")
	public Map<? ,?> cusInfo(Customer param){
		Consumer<Customer> c = o -> cusMapper.cusInfo(o);
		c.accept(param);
		box.clear();
		box.put("cus", cus);
		return box.get();
	}
	
	@PostMapping("/cusInfoChg")
	public Map<?, ?> cusInfoChg(@RequestBody Customer param) {
		String daddr = cus.getDaddr();
		String zip = param.getZip(); //정보번호 변경 시 입력한 우편번호
		String addr = param.getAddr(); //정보번호 변경 시 입력한 주소
		String daddr2 = param.getDaddr(); //정보번호 변경 시 입력한 상세주소
		param.setCemail(cus.getCemail());
		param.setZip(zip);
		param.setAddr(addr);
		param.setDaddr(daddr2);
		Consumer<Customer> c = o -> cusMapper.cusInfoChg(o);
		c.accept(param);
		box.clear();
		if (zip != null) {
			box.put("msg", "true");
			box.put("cus", param);
		} else {
			box.put("msg", "false");
		}
		return box.get();
	}
}

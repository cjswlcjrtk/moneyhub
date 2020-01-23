package com.moneyhub.web.pxy;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.moneyhub.web.crudtable.CRUDCustomer;
import com.moneyhub.web.crudtable.CRUDTableMapper;
import com.moneyhub.web.tx.TxMapper;

//INSERT INTO CUSTOMER ( CMAIL, CPWD, AGE ) VALUES (
//    	#{cmail}, #{cpwd}, #{age}
//)

@Component("customerProxy")
public class CustomerProxy extends Proxy{
	@Autowired CRUDTableMapper crudTableMapper;
	@Autowired TxMapper txMapper;
	@Autowired CRUDCustomer crudCustomer;
	
	public String makeCmail() {
		List<String> cmailId = Arrays.asList("a",	"b", "c", "d", "e", "f", "g", "h",
				"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
				"p", "w", "x", "y", "z");
		List<String> cmailAddress = Arrays.asList("@naver.com", "@gmail.com",
				"@test.com", "@abcd.com", "@money.com", "@hub.com", "@phjin.com"
				);
		Collections.shuffle(cmailId);
		Collections.shuffle(cmailAddress);
		return cmailId.get(0) + cmailId.get(1) + cmailId.get(2) + cmailId.get(3) +
			cmailId.get(4) + cmailId.get(5) + cmailAddress.get(6);
	}
	
	public String makeCpwd() {
		List<String> cpwd = Arrays.asList("a", "b", "c", "d", "e", "f", "g", "h",
				"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
				"p", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8",
				"9", "0");
		Collections.shuffle(cpwd);
		return cpwd.get(0) + cpwd.get(1) + cpwd.get(2) + cpwd.get(3) + cpwd.get(4) +
				cpwd.get(5);
	}
	
	public String makeAge() {
		List<String> age = Arrays.asList("1", "2", "3", "4", "5", "6", "7", "8",
				"9", "0");
		Collections.shuffle(age);
		return age.get(0) + age.get(1);
	}

}

package com.moneyhub.web.cus;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Lazy
@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Customer {

	private String cno,
					cemail,
					cpwd,
					cname,
					cntcd,		// 고객 국가 코드ㅇㅇㅇㅇ
					cphone,
					cstcd,		// 고객상태코드
					sdate,		// 가입일
					wdate,		// 탈퇴일
				/*	crtmem,
					crtdate,
					upmem,*/
					udate,
					salt,
					zip,
					addr;		// 수정일

}

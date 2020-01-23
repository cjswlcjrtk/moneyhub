package com.moneyhub.web.crudtable;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.moneyhub.web.crudtable.CRUDCustomer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Lazy
@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class CRUDCustomer {

	private String cno,
					cemail,
					cpwd,
					cname,
					cntcd,		// 고객 국가 코드ㅇㅇㅇㅇ
					cphone,
					cstcd,		// 고객상태코드
					sdate,		// 가입일
					wdate,		// 탈퇴일
					udate,		// 수정일
					age;		// 나이 ==> 생년월일로 변경 예정

}

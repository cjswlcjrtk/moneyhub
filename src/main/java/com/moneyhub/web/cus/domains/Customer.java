package com.moneyhub.web.cus.domains;

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

	private String cno, cemail, cpwd, cname, cstcd, sdate, wdate, udate,
					zip, addr, daddr, birth;

}

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
public class Account {
	
	private String cno,
				bsdate,
				acct_no,
				achcntcd,
				crtmem,
				crtdt,
				upmem,
				updt;
}

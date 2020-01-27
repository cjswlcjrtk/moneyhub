package com.moneyhub.web.remit.domains;

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
public class RCPT {

	private String bsdate,mpcn,cno,rcp,rcpDt,passFnm,passLnm,place,crtmem,crtdt,upmem,updt;
	private int seq;
}

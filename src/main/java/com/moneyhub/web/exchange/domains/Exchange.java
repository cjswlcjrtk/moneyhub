package com.moneyhub.web.exchange.domains;

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
public class Exchange {
	private String cemail, bsdate, acctNo, cntcd, mtcn, trdStatCd, chngCausCd, exchKrw, exchCnt;
	private double feeExrate, mhRate, exFee;
}
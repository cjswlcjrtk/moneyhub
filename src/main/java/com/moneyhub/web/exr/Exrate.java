package com.moneyhub.web.exr;

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
public class Exrate implements Comparable<Exrate>{
	private String seq, bdate, cntcd, crtmem, upmem, udate; 
	private double exrate;
	@Override
	public int compareTo(Exrate o) {
		return this.bdate.compareTo(o.bdate);
	}
}

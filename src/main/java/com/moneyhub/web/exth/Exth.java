package com.moneyhub.web.exth;

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
public class Exth {
	
	private int cno, total, krw, profits;
	private float usd, eur, aud, cny, jpy, rerate; 
	private String bdate;
}

package com.moneyhub.web.exchange.mappers;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.exr.Exrate;

@Repository
public interface ExchangeMapper {

	public ArrayList<Exrate> insertEx(HashMap<String, Object> exchange);
	public ArrayList<Exrate> exTrend(String cntcd);
}
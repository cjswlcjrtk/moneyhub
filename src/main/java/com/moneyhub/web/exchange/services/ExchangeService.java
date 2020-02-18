package com.moneyhub.web.exchange.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.cus.domains.AccountHistory;
import com.moneyhub.web.cus.domains.Customer;
import com.moneyhub.web.cus.mappers.AccountMapper;
import com.moneyhub.web.exchange.domains.Exchange;
import com.moneyhub.web.exchange.mappers.ExchangeMapper;
import com.moneyhub.web.exr.Exrate;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.remit.util.CharUtil;

@Service
public class ExchangeService {
	
	@Autowired ExchangeMapper exMapper;
	@Autowired AccountMapper accMapper;
	@Autowired Box<Object> box;
	@Autowired Exrate exrate;
	@Autowired Exchange exch;
	@Autowired Customer cus;
	@Autowired Account acc;
	@Autowired AccountHistory accHistory;
	
	public void insertExchange(HashMap<String, Object> exchange) {
		String mtcn = CharUtil.excuteGenerate();
		exch.setMtcn(mtcn);
		exch.setCemail(exchange.get("cemail").toString());
		exch.setCntcd(exchange.get("cntcd").toString());
		exch.setExchKrw(exchange.get("exchKrw").toString());
		exch.setExchCnt(exchange.get("exchCnt").toString());
		exch.setExFee(1); //수수료율
		Double exrate1 = (Double) exchange.get("exrate");
		exch.setExrate(exrate1);
		exch.setFeeExrate(exrate1 * (exch.getExFee()/100)); //수수료금액
		exch.setMhRate(exrate1 + exch.getFeeExrate()); //수수료 포함된 머니허브 환율 -> 이 환율이 환전 시 사용되는 환율
		String code = "0";
		exch.setChngCausCd(code);
		exch.setTrdStatCd(code);
		exMapper.insertEx(exch);
	}
	
	public Map<?, ?> ExTrend(String cntcd){
		ArrayList<Exrate> list = new ArrayList<>();
		list = exMapper.exTrend(cntcd);
		float sum = 0, avg;
		for(Exrate exlist : list) {
			sum += exlist.getExrate();
		}
		avg = sum / list.size();
		box.clear();
		if(list.get(0).getExrate() > avg) {
			box.put("msg","UP");
		}else if(list.get(0).getExrate() < avg){
			box.put("msg","DOWN");
		}
		return box.get();
	}
}
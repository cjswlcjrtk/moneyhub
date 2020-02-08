package com.moneyhub.web.exchange.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.cus.domains.Customer;
import com.moneyhub.web.exchange.domains.Exchange;
import com.moneyhub.web.exchange.mappers.ExchangeMapper;
import com.moneyhub.web.exr.Exrate;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.remit.util.CharUtil;

@Service
public class ExchangeService {
	
	@Autowired ExchangeMapper exMapper;
	@Autowired Box<Object> box;
	@Autowired Exrate exrate;
	@Autowired Exchange ex;
	@Autowired Customer cus;
	@Autowired Account acc;
	
	public void insertExchange(HashMap<String, Object> exchange) {
		System.out.println("exchangeService 들어옴???? -----------" + exchange);
		String mtcn = CharUtil.excuteGenerate();
		ex.setMtcn(mtcn);
		ex.setCemail(exchange.get("cemail").toString());
		ex.setCntcd(exchange.get("cntcd").toString());
		ex.setExchKrw(exchange.get("exchKrw").toString());
		ex.setExchCnt(exchange.get("exchCnt").toString());
		ex.setExFee(1); //수수료율
		Double exrate1 = (Double) exchange.get("exrate");
		ex.setFeeExrate(exrate1 * (ex.getExFee()/100)); //수수료금액
		ex.setMhRate(exrate1 + ex.getFeeExrate()); //수수료 포함된 머니허브 환율 -> 이 환율이 환전 시 사용되는 환율
		String code = "0";
		ex.setChngCausCd(code);
		ex.setTrdStatCd(code);
		System.out.println("최종 ex - " + ex);
		exMapper.insertEx(ex);
	}
	
	public Map<?, ?> ExTrend(String cntcd){
		System.out.println("Exchange.service 들어옴 cntcd - " + cntcd);
		ArrayList<Exrate> list = new ArrayList<>();
		list = exMapper.exTrend(cntcd);
		float sum = 0, avg;
		for(Exrate exlist : list) {
			sum += exlist.getExrate();
		}
		avg = sum / list.size();
		System.out.println("list - " + list);
		box.clear();
		if(list.get(0).getExrate() > avg) {
			box.put("msg","UP");
		}else {
			box.put("msg","DOWN");
		}
		return box.get();
	}
	
	
}
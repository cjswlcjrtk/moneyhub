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
		String mtcn = CharUtil.excuteGenerate();
		System.out.println("insertExchange의 mtcn1 - " + mtcn);
		ex.setMtcn(mtcn);
		System.out.println("insertExchange의 mtcn2 - " + ex.getMtcn());

		ex.setAcctNo(exchange.get("acctNo").toString());
		System.out.println("insertExchange의 AcctNo - " + exchange.get("acctNo").toString());

		ex.setCemail(exchange.get("cemail").toString());
		System.out.println("insertExchange의 Cemail - " + exchange.get("cemail").toString());
		
		ex.setCntcd(exchange.get("cntcd").toString());
		System.out.println("insertExchange의 Cntcd - " + exchange.get("cntcd").toString());
		
		ex.setExchKrw(exchange.get("exch_krw").toString());
		System.out.println("insertExchange의 exch_krw - " + exchange.get("exch_krw").toString());
		
		ex.setExchCnt(exchange.get("exch_cnt").toString());
		System.out.println("insertExchange의 exch_cnt - " + exchange.get("exch_cnt").toString());
		
		ex.setExFee(1); //수수료율
		System.out.println("insertExchange의 ExFee - " + ex.getExFee());
		
		ex.setFeeExrate((double)exchange.get("exrate") * 0.01); //수수료금액
		System.out.println("exchange에서 가지고 온 Exrate1 - " + exchange.get("exrate"));
		System.out.println("exchange에서 가지고 온 Exrate2 - " + (double)exchange.get("exrate"));
		System.out.println("insertExchange의 Exrate - " + (double)exchange.get("exrate") * 0.01);
		
		ex.setMhRate(((double)exchange.get("exrate") + ((double)exchange.get("exrate") * 0.01))); //수수료 포함된 머니허브 환율 -> 이 환율이 환전 시 사용되는 환율
		System.out.println("insertExchange의 MhRate - " + ((double)exchange.get("exrate") + ((double)exchange.get("exrate") * 0.01)));
		
		ex.setChngCausCd("0");
		System.out.println("insertExchange의 setChngCausCd - " + ex.getChngCausCd());
		
		ex.setTrdStatCd("0");
		System.out.println("insertExchange의 setTrdStatCd - " + ex.getTrdStatCd());

		//
		ex.setAcctNo(exchange.get("acctNo").toString());
		System.out.println("insertExchange의 AcctNo - " + exchange.get("acctNo").toString());
		//

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
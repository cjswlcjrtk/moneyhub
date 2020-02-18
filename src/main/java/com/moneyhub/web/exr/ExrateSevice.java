package com.moneyhub.web.exr;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

import org.json.JSONArray;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.ExrateProxy;
import com.moneyhub.web.pxy.Inventory;
import com.moneyhub.web.pxy.Typetester;

@Service
public class ExrateSevice extends Typetester{
	@Autowired Exrate exrate;
	@Autowired ExrateMapper exrateMapper;
	@Autowired ExrateProxy exPxy;
	@Autowired Box<Object> box;
	@Autowired Inventory<Exrate> inven;
	
	public Map<?, ?> exchangeTestSelect(String bdate){
	
		ArrayList<Exrate> inven = exrateMapper.exchangeTestSelect();
		ArrayList<Exrate> usdList = new ArrayList<>();
		ArrayList<Exrate> eurList = new ArrayList<>();
		ArrayList<Exrate> cnyList = new ArrayList<>();
		ArrayList<Exrate> jpyList = new ArrayList<>();
		ArrayList<Exrate> audList = new ArrayList<>();
		
		for(Exrate e : inven) {
			if( bdate.compareTo(e.getBdate()) >= 0) {
				switch (e.getCntcd()) {
				case "USD":
					usdList.add(e);
					break;
				case "EUR":
					eurList.add(e);
					break;
				case "CNY":
					cnyList.add(e);
					break;
				case "JPY":
					jpyList.add(e);
					break;
				case "AUD":
					audList.add(e);
					break;
				}
			}
		}
		box.clear();
		box.put("usdRate", exPxy.sortDuplExrate(usdList));
		box.put("eurRate", exPxy.sortDuplExrate(eurList));
		box.put("cnyRate", exPxy.sortDuplExrate(cnyList));
		box.put("jpyRate", exPxy.sortDuplExrate(jpyList));
		box.put("audRate", exPxy.sortDuplExrate(audList));

		return box.get();
	}
	
	@Transactional
	public void insertExrate(Exrate[] paramList) {
		Consumer<Exrate> c = p -> exrateMapper.insertExrate(p);
		for(int i = 0; i<paramList.length; i++) {
			exrate = paramList[i];
			exrate.setCrtmem("KMK");
			c.accept(exrate);
		}
	}	
	public ArrayList<Exrate> cntcdSearchExrate(String cntcd){	
		HashMap<String, Float> map = new HashMap<>();
		map = exrateMapper.getExchangeFee();
		inven.clear();
		for(Exrate e : exrateMapper.cntcdSearchExrate(cntcd)) {
			e.setExrate(Math.round(Float.parseFloat(String.valueOf(e.getExrate())) 
									* ( Float.parseFloat(String.valueOf(map.get("AMNT"))) + 1) * 100 ) / 100.0d );
			inven.add(e);
		}
		return inven.get();
	}
	
	public ArrayList<Exrate> bdateSearchExrate(String bdate){	
		HashMap<String, Float> map = new HashMap<>();
		map = exrateMapper.getExchangeFee();
		inven.clear();
		for(Exrate e : exrateMapper.bdateSearchExrate(bdate)) {
			e.setExrate(Math.round(Float.parseFloat(String.valueOf(e.getExrate())) 
									* ( Float.parseFloat(String.valueOf(map.get("AMNT"))) + 1) * 100 ) / 100.0d );
			inven.add(e);
		}
		return inven.get();
	}
	
	public void createExrate(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> exrateMapper.createExrate(p);
		c.accept(map);
	}
	
	public void deleteExrate(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> exrateMapper.deleteExrate(p);
		c.accept(map);
	}
	
	public void truncateExrate(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> exrateMapper.truncateExrate(p);
		c.accept(map);
	}
	@Transactional
	@Scheduled(cron="0 0 5 * * *")
	public void schedulerEx() {
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			
			String exrateUrl = "https://api.manana.kr/exchange/rate/KRW/KRW,USD,JPY,CNY,SGD,AUD,GBP,NPR,EUR.json";
			try {
				Connection.Response homePage = Jsoup.connect(exrateUrl)
												.method(Connection.Method.GET)
												.userAgent(USER_AGENT)
												.ignoreContentType(true)
												.execute();
				JSONArray jsonArr = new JSONArray(homePage.parse().select("body").text());
				
				for( int i = 0; i< jsonArr.length(); i++ ) {
					exrate.setBdate(jsonArr.getJSONObject(i).get("date").toString().substring(0, 10));
					exrate.setExrate(Math.round(Float.parseFloat(jsonArr.getJSONObject(i).get("rate").toString()) * 100) /100.0d);
					exrate.setCntcd(jsonArr.getJSONObject(i).get("name").toString().substring(0, 3));
					exrateMapper.insertExrate(exrate);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
			
		} catch (Exception e) {
			System.out.println("스케쥴 에러");
		}
	}
}
	

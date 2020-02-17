package com.moneyhub.web.exr;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.pxy.Inventory;

@Repository
public interface ExrateMapper {
	
	public void createExrate(HashMap<String, String> map);
	public void deleteExrate(HashMap<String, String> map);
	public void truncateExrate(HashMap<String, String> map);	
	public void insertExrate(Exrate exrate);
	
	public ArrayList<Exrate> cntcdSearchExrate(String s);
	public ArrayList<Exrate> bdateSearchExrate(String s);
	public ArrayList<Exrate> exchangeTestSelect();
	public HashMap<String, Float> getExchangeFee();
}

package com.moneyhub.web.exr;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExrateSevice {
	@Autowired Exrate exrate;
	@Autowired ExrateMapper exrateMapper;
	public void insertExrate(Map<String, String> paramMap) {

		Consumer<Exrate> c = p -> exrateMapper.insertExrate(p);

		ArrayList<Exrate> list = null;
		for(int i = 0; i<9; i++) {
			list = new ArrayList<>();
			exrate.setBdate(paramMap.get("list["+i+"][bdate]"));
			exrate.setCntcd(paramMap.get("list["+i+"][cntcd]"));
			exrate.setExrate(Float.parseFloat(paramMap.get("list["+i+"][exrate]")));
			exrate.setCrtmem("kmk");
			c.accept(exrate);
		}
	}
	
	public ArrayList<Exrate> searchExrate(String s){
		Function<String, ArrayList<Exrate>> f = t -> exrateMapper.searchExrate(t);
		return f.apply(s);
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
}

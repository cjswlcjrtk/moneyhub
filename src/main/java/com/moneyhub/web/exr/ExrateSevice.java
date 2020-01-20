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
	public void insertExrate(Exrate[] paramList) {
		Consumer<Exrate> c = p -> exrateMapper.insertExrate(p);
		for(int i = 0; i<paramList.length; i++) {
			exrate = paramList[i];
			exrate.setCrtmem("KMK");
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

package com.moneyhub.web.exr;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.enums.SQL;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Proxy;

@RestController
@RequestMapping("/exrate")
public class ExrateCtrl extends Proxy{
	@Autowired ExrateSevice exService;
	@Autowired Box<Object> box;
	@Autowired Exrate exrate;
	
	@GetMapping("/exchangetest/{bdate}")
	public Map<?, ?> exchangeTestExrate(@PathVariable String bdate){
		return exService.exchangeTestSelect(bdate);
	}
	
	@GetMapping("/search/cntcd/{cntcd}")
	public Map<?, ?> cntcdSearchExrate(@PathVariable String cntcd){
		box.clear();
		box.put("exlist", exService.cntcdSearchExrate(cntcd));
		return box.get();
	}
	
	@GetMapping("/search/bdate/{bdate}")
	public Map<?, ?> bdateSearchExrate(@PathVariable String bdate){
		box.clear();
		box.put("exlist", exService.bdateSearchExrate(bdate));
		return box.get();
	}
	
	@PostMapping("/insert/api")
	public Map<?, ?> insertExrate(@RequestBody HashMap<String, Exrate[]> paramMap){
		exService.insertExrate(paramMap.get("paramList"));
		box.put("result", "SUCCESS");
		return box.get();
	}	
	
	@GetMapping("/create/table")
	public Map<?, ?> createTable(){
		HashMap<String, String> map = new HashMap<>();
		map.put("CREATE_EXRATE", SQL.CREATE_EXRATE.toString());
		exService.createExrate(map);
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@GetMapping("/delete/table")
	public Map<?, ?> deleteTable(){
		HashMap<String, String> map = new HashMap<>();
		map.put("DROP_EXRATE", SQL.DROP_EXRATE.toString());
		exService.deleteExrate(map);
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@GetMapping("/truncate/table")
	public Map<?, ?> truncateTable(){
		HashMap<String, String> map = new HashMap<>();
		map.put("TRUNCATE_EXRATE", SQL.TRUNCATE_EXRATE.toString());
		exService.truncateExrate(map);
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
}

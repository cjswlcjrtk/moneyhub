package com.moneyhub.web.remit.serviceimpls;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moneyhub.web.enums.SQL;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Inventory;
import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.pxy.Proxy;
import com.moneyhub.web.remit.domains.RCPT;
import com.moneyhub.web.remit.domains.TRDHR;
import com.moneyhub.web.remit.mappers.RCPTMapper;
import com.moneyhub.web.remit.mappers.TRDHRMapper;
import com.moneyhub.web.remit.services.TRDHRService;

@Service
public class TRDHRServiceImpl implements TRDHRService{
	@Autowired Proxy pxy;
	@Autowired Box<Object> box;
	@Autowired Inventory<Object> inventory;
	@Autowired TRDHRMapper trdhrMapper;
	@Autowired RCPTMapper rcptMapper;
	@Autowired PageProxy pager;
	@Autowired RCPT rcpt;
	
	public Map<?, ?> selectAll(){
		box.clear();
		pager.setRowCount(countTRDHR());
		pager.paging();
		pxy.print(pager.toString());
		Function<PageProxy, ArrayList<Map<String,Object>>> f = t -> trdhrMapper.selectAll(t);
		
		box.put("map", f.apply(pager));
		box.put("pager", pager);
		
		pxy.print(box.get("pager").toString());
		pxy.print(box.get("map").toString());
		
		return box.get();
	}
	public int countTRDHR() {
		Function<PageProxy, String> s = p -> trdhrMapper.countTRDHR(p);
		return pxy.integer(s.apply(pager));
	}
	public void createTRDHR() {
			box.clear();
			box.put("CREATE_TRDHR", SQL.CREATE_TRDHR.toString());
			Consumer<HashMap<String, Object>> c = p -> trdhrMapper.createTRDHR(p);
			c.accept(box.get());
	}
	public void deleteTRDHR() {
		box.clear();
		box.put("DROP_TRDHR", SQL.DROP_TRDHR.toString());
		Consumer<HashMap<String, Object>> c = p -> trdhrMapper.deleteTRDHR(p);
		c.accept(box.get());
	}

}

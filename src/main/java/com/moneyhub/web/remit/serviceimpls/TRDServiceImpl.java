package com.moneyhub.web.remit.serviceimpls;

import java.util.HashMap;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moneyhub.web.enums.SQL;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Inventory;
import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.pxy.Proxy;
import com.moneyhub.web.remit.mappers.TRDMapper;

@Service
public class TRDServiceImpl{
	@Autowired Proxy pxy;
	@Autowired Box<Object> box;
	@Autowired Inventory<Object> inventory;
	@Autowired TRDMapper trdMapper;
	@Autowired PageProxy pager;
	
	public void createTRD() {
		box.clear();
		box.put("CREATE_TRD", SQL.CREATE_TRD.toString());
		Consumer<HashMap<String, Object>> c = p -> trdMapper.createTRD(p);
		c.accept(box.get());
	}
	
	public void deleteTRD() {
		box.clear();
		box.put("DROP_TRD", SQL.DROP_TRD.toString());
		Consumer<HashMap<String, Object>> c = p -> trdMapper.deleteTRD(p);
		c.accept(box.get());
	}

}

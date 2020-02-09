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
import com.moneyhub.web.remit.mappers.RCPTMapper;
import com.moneyhub.web.remit.services.RCPTService;

@Service
public class RCPTServiceImpl implements RCPTService{
		@Autowired Proxy pxy;
		@Autowired Box<Object> box;
		@Autowired Inventory<Object> inventory;
		@Autowired RCPTMapper rcptMapper;
		@Autowired PageProxy pager;
	
		public void createRCPT() {
		box.clear();
		box.put("CREATE_RCPT", SQL.CREATE_RCPT.toString());
		Consumer<HashMap<String, Object>> c = p -> rcptMapper.createRCPT(p);
		c.accept(box.get());
		}
	
	
		public void deleteRCPT() {
		box.clear();
		box.put("DROP_RCPT", SQL.DROP_RCPT.toString());
		Consumer<HashMap<String, Object>> c = p -> rcptMapper.deleteRCPT(p);
		c.accept(box.get());
	}
}

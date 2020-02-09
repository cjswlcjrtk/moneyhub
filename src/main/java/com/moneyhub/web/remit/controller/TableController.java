package com.moneyhub.web.remit.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.pxy.Proxy;
import com.moneyhub.web.remit.serviceimpls.FeeServiceImpl;
import com.moneyhub.web.remit.serviceimpls.RCPTServiceImpl;
import com.moneyhub.web.remit.serviceimpls.RemitServiceImpl;
import com.moneyhub.web.remit.serviceimpls.TRDHRServiceImpl;
import com.moneyhub.web.remit.serviceimpls.TRDServiceImpl;

@RestController
@RequestMapping("/remtable")
public class TableController extends Proxy{
		@Autowired private Box<Object> box;
		@Autowired PageProxy pager;
		@Autowired TRDHRServiceImpl trdhrService;
		@Autowired TRDServiceImpl trdService;
		@Autowired RCPTServiceImpl rcptService;
		@Autowired FeeServiceImpl feeService;
		
		@GetMapping("/create/table/trd")
		public Map<?, ?> createTRDTable(){
			trdService.createTRD();
			box.clear();
			box.put("result", "SUCCESS");
			return box.get();
		}
		
		@GetMapping("/delete/table/trd")
		public Map<?, ?> deleteTRDTable(){
			trdService.deleteTRD();
			box.clear();
			box.put("result", "SUCCESS");
			return box.get();
		}
		
		@GetMapping("/create/table/trdhr")
		public Map<?, ?> createTRDHRTable(){
			trdhrService.createTRDHR();
			box.clear();
			box.put("result", "SUCCESS");
			return box.get();
		}
		
		@GetMapping("/delete/table/trdhr")
		public Map<?, ?> deleteTRDHRTable(){
			trdhrService.deleteTRDHR();
			box.clear();
			box.put("result", "SUCCESS");
			return box.get();
		}
		
		@GetMapping("/create/table/rcpt")
		public Map<?, ?> createRCPTTable(){
			rcptService.createRCPT();
			box.clear();
			box.put("result", "SUCCESS");
			return box.get();
		}
		
		@GetMapping("/delete/table/rcpt")
		public Map<?, ?> deleteRCPTTable(){
			rcptService.deleteRCPT();
			box.clear();
			box.put("result", "SUCCESS");
			return box.get();
		}
}
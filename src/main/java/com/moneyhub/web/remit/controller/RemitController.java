package com.moneyhub.web.remit.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
@RequestMapping("/remit")
public class RemitController extends Proxy{
		@Autowired
		private Box<Object> box;
		@Autowired PageProxy pager;
		@Autowired
		private RemitServiceImpl remitService;
		@Autowired TRDHRServiceImpl trdhrService;
		@Autowired TRDServiceImpl trdService;
		@Autowired RCPTServiceImpl rcptService;
		@Autowired FeeServiceImpl feeService;
		
		@PostMapping("/insert")
		public void insertRemit(@RequestBody HashMap<String, Object> deal){
		System.out.println("ajax가 보낸 deal"+ deal);
		remitService.insertRemit(deal);
		}
		
		@GetMapping("/lists/page/{nowPage}/search/{cno}")
		public Map<?, ?> trdhrList(@PathVariable String nowPage,@PathVariable String cno) {
			print("송금 리스트 진입 - nowPage : " + nowPage+"cno"+cno);
			int pageSize = 5, blockSize = 5;
			pager.setCno(cno);
			pager.setPageSize(pageSize);
			pager.setNowPage(integer(nowPage));
			pager.setBlockSize(blockSize);
			
			return trdhrService.selectAll();
		}
}
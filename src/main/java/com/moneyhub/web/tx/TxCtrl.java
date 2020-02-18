package com.moneyhub.web.tx;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.CrawlingProxy;

@RestController
@RequestMapping("/tx")
public class TxCtrl {
	
	@Autowired CrawlingProxy crawler;
	@Autowired TxService txService;
	@Autowired Box<Object> box;
	
	@GetMapping("/crawling/kakaofaq")
	public Map<?, ?> faqCrawling() {
		txService.crawling();
		box.clear();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/insert/faqlist")
	public Map<?, ?> faqInsert(){
		txService.insertFAQStore();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/insert/exratelist")
	public Map<?, ?> exrateInsert(){
		txService.insertExrateStore();
		box.put("result", "SUCCESS");
		return box.get();
	}
}

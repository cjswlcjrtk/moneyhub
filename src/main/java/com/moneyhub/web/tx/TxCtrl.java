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
		System.out.println("FAQ 크롤링 진입");
		txService.crawling();
		box.clear();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/insert/faqlist")
	public Map<?, ?> faqInsert(){
		System.out.println("Tx FAQ insert 진입");
		txService.insertFAQStore();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/insert/exratelist")
	public Map<?, ?> exrateInsert(){
		System.out.println("Tx EXRATE insert 진입");
		txService.insertExrateStore();
		box.put("result", "SUCCESS");
		return box.get();
	}
}

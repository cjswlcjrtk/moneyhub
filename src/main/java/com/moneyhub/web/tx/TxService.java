package com.moneyhub.web.tx;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.exr.Exrate;
import com.moneyhub.web.exr.ExrateMapper;
import com.moneyhub.web.faq.FAQ;
import com.moneyhub.web.faq.FAQMapper;
import com.moneyhub.web.pxy.CrawlingProxy;
import com.moneyhub.web.pxy.ExrateStoreProxy;
import com.moneyhub.web.pxy.FAQStoreProxy;

@Service
public class TxService {
	@Autowired CrawlingProxy crawler;
	@Autowired FAQStoreProxy faqPxy;
	@Autowired ExrateStoreProxy exPxy;
	@Autowired Exrate exrate;
	@Autowired FAQ faq;
	@Autowired FAQMapper faqMapper;
	@Autowired ExrateMapper exrateMapper;
	
	@Transactional
	public void crawling() {
		crawler.insertCrawling();
	}
	
	@Transactional
	public void insertFAQStore() {
		for(int i=0; i< faqPxy.title_stores().length;i++) {
			faq.setTitle(faqPxy.title_stores()[i]);
			faq.setContent(faqPxy.content_stores()[i]);
			faqMapper.insertFAQ(faq);
//			txMapper.insertFAQ(faq);
		}
	}
	
	@Transactional
	public void insertExrateStore() {
		for(int i=0; i< exPxy.bdateStore().length;i++) {
			exrate.setBdate(exPxy.bdateStore()[i]);
			exrate.setExrate(exPxy.exrateStore()[i]);
			exrate.setCntcd("EUR");
			exrate.setCrtmem("KMK");
			exrateMapper.insertExrate(exrate);
//		//	txMapper.insertFAQ(exrate);
		}
	}
}

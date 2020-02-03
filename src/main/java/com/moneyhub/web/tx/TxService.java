package com.moneyhub.web.tx;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.crudtable.CRUDCustomer;
import com.moneyhub.web.crudtable.CRUDFeeDB;
import com.moneyhub.web.exr.Exrate;
import com.moneyhub.web.exr.ExrateMapper;
import com.moneyhub.web.faq.FAQ;
import com.moneyhub.web.faq.FAQMapper;
import com.moneyhub.web.pxy.CrawlingProxy;
import com.moneyhub.web.pxy.CustomerProxy;
import com.moneyhub.web.pxy.FeeDBProxy;
import com.moneyhub.web.pxy.KakaoFAQProxy;
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
	@Autowired TxMapper txMapper;
		
	@Autowired CRUDCustomer crudCustomer;
	@Autowired CRUDFeeDB crudFeeDB;
	
	@Autowired CustomerProxy customerProxy;
	@Autowired FeeDBProxy feeDBProxy;
		
	@Transactional
	public void crawling() {
		crawler.insertCrawling();
	}
	
	@Transactional
	public void insertStore() {

		for(int i=0; i< kakaoPxy.title_stores().length;i++) {
			faq.setTitle(kakaoPxy.title_stores()[i]);
			faq.setContent(kakaoPxy.content_stores()[i]);
			txMapper.insertFAQ(faq);
		}	
	public void insertFAQStore() {
		for(int i=0; i< faqPxy.title_stores().length;i++) {
			faq.setTitle(faqPxy.title_stores()[i]);
			faq.setContent(faqPxy.content_stores()[i]);
			faqMapper.insertFAQ(faq);
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
		}
	}
	
	@Transactional
	public void insertCustomer() {
		for(int i=0; i<100; i++) {
			crudCustomer.setCemail(customerProxy.makeCmail());
			crudCustomer.setCpwd(customerProxy.makeCpwd());
			crudCustomer.setAge(customerProxy.makeAge());
			txMapper.insertCustomer(crudCustomer);
		}
		
	}
	
	@Transactional
	public void insertFeeDB() {
		for(int i=0; i<1000; i++) {
			crudFeeDB.setAmnt(feeDBProxy.makeAmnt());
			crudFeeDB.setBdate(feeDBProxy.makebDate());
			txMapper.insertFeeDB(crudFeeDB);
		}
		
	}
}

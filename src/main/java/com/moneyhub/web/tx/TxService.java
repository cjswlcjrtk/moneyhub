package com.moneyhub.web.tx;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.crudtable.CRUDCustomer;
import com.moneyhub.web.crudtable.CRUDFeeDB;
import com.moneyhub.web.faq.FAQ;
import com.moneyhub.web.pxy.CrawlingProxy;
import com.moneyhub.web.pxy.CustomerProxy;
import com.moneyhub.web.pxy.FeeDBProxy;
import com.moneyhub.web.pxy.KakaoFAQProxy;

@Service
public class TxService {
	@Autowired CrawlingProxy crawler;
	@Autowired TxMapper txMapper;
	@Autowired KakaoFAQProxy kakaoPxy;
	@Autowired FAQ faq;
	
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
	}
	
	@Transactional
	public void insertCustomer() {
		for(int i=0; i<10000; i++) {
			crudCustomer.setCemail(customerProxy.makeCmail());
			crudCustomer.setCpwd(customerProxy.makeCpwd());
			crudCustomer.setAge(customerProxy.makeAge());
			txMapper.insertCustomer(crudCustomer);
		}
		
	}
	
	@Transactional
	public void insertFeeDB() {
		for(int i=0; i<10000; i++) {
			crudFeeDB.setAmnt(feeDBProxy.makeAmnt());
			crudFeeDB.setBdate(feeDBProxy.makebDate());
			txMapper.insertFeeDB(crudFeeDB);
		}
		
	}
}

package com.moneyhub.web.tx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.crudtable.CRUDCustomer;
import com.moneyhub.web.crudtable.CRUDFee;
import com.moneyhub.web.pxy.CustomerProxy;
import com.moneyhub.web.pxy.FAQStoreProxy;
import com.moneyhub.web.pxy.FeeProxy;

@Service
public class TxService {
	@Autowired FAQStoreProxy faqPxy;
	@Autowired TxMapper txMapper;
	@Autowired CRUDCustomer crudCustomer;
	@Autowired CRUDFee crudFee;
	@Autowired CustomerProxy customerProxy;
	@Autowired FeeProxy feeProxy;
	
	@Transactional
	public void insertCustomer() {
		for(int i=0; i<100; i++) {
			crudCustomer.setCemail(customerProxy.makeCmail());
			crudCustomer.setCpwd(customerProxy.makeCpwd());
			crudCustomer.setAge(customerProxy.makeAge());
			crudCustomer.setCname(customerProxy.makeCname());
			crudCustomer.setSdate(customerProxy.makeStartYear());
			crudCustomer.setCstcd(customerProxy.makeCSTCD());
			txMapper.insertCustomer(crudCustomer);
		}		
	}
	
	@Transactional
	public void insertFee() {
		for(int i=0; i<1000; i++) {
			crudFee.setFee_amnt(feeProxy.makeAmnt());
			crudFee.setBsdate(feeProxy.makebDate());
			txMapper.insertFeeDB(crudFee);
		}		
	}
}

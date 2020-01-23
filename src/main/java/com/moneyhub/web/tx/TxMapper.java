package com.moneyhub.web.tx;

import org.apache.ibatis.annotations.Insert;
import org.springframework.stereotype.Repository;

import com.moneyhub.web.crudtable.CRUDCustomer;
import com.moneyhub.web.crudtable.CRUDFeeDB;
import com.moneyhub.web.faq.FAQ;

@Repository
public interface TxMapper {
	
	@Insert("INSERT INTO FAQ ( TITLE, CONTENT)\r\n" + 
			"VALUES ( #{title}, #{content})")
	public void insertFAQ(FAQ param);
	
	@Insert("INSERT INTO CUSTOMER ( CEMAIL, CPWD, AGE )\r\n "
			+ "VALUES ( #{cemail}, #{cpwd}, #{age})")
	public void insertCustomer(CRUDCustomer param);
	
	@Insert("INSERT INTO FEEDB ( AMNT, BDATE )\r\n "
			+ "VALUES ( #{amnt}, #{bdate})")
	public void insertFeeDB(CRUDFeeDB param);
}

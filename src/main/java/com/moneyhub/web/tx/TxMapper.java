package com.moneyhub.web.tx;

import org.apache.ibatis.annotations.Insert;
import org.springframework.stereotype.Repository;

import com.moneyhub.web.crudtable.CRUDCustomer;
import com.moneyhub.web.crudtable.CRUDFee;
import com.moneyhub.web.faq.FAQ;

@Repository
public interface TxMapper {
	
	@Insert("INSERT INTO FAQ ( TITLE, CONTENT)\r\n" + 
			"VALUES ( #{title}, #{content})")
	public void insertFAQ(FAQ param);
	
	@Insert("INSERT INTO CUSTOMER ( CEMAIL, CPWD, AGE, CNAME, SDATE, CSTCD)\r\n "
			+ "VALUES ( #{cemail}, #{cpwd}, #{age}, #{cname}, #{sdate},  #{cstcd} )")
	public void insertCustomer(CRUDCustomer param);
	
	@Insert("INSERT INTO FEE ( FEE_AMNT, BSDATE )\r\n "
			+ "VALUES ( #{fee_amnt}, #{bsdate})")
	public void insertFeeDB(CRUDFee param);
}

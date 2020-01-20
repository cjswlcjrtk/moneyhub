package com.moneyhub.web.enums;

public enum SQL {
	CREATE_DB,
	CREATE_FAQ, DROP_FAQ, TRUNCATE_FAQ,
	CREATE_CUSTOMER, DROP_CUSTOMER, TRUNCATE_CUSTOMER,
	CREATE_EXRATE, DROP_EXRATE, TRUNCATE_EXRATE
	;
	@Override
	public String toString() {
		String result = "";
		switch (this) {
		
		case CREATE_DB :
			result = "CREATE DATABASE MONEYHUB";
			break;

		case CREATE_FAQ :
			result = "CREATE TABLE FAQ (\r\n" + 
					"	FAQID	INT NOT NULL AUTO_INCREMENT,\r\n" + 
//					"    CATEGORY	VARCHAR(50) NOT NULL,\r\n" + 
					"    TITLE	VARCHAR(100) NOT NULL,\r\n" + 
					"    CONTENT VARCHAR(1400) NULL,\r\n" + 
					"    PRIMARY KEY (FAQID)\r\n" + 
					")";
			break;
			
		case DROP_FAQ :
			result = "DROP TABLE FAQ";
			break;
			
		case TRUNCATE_FAQ :
			result = "TRUNCATE TABLE FAQ";
			break;
					
		case CREATE_CUSTOMER :
			result = "CREATE TABLE CUSTOMER\r\n" + 
					"( \r\n" + 
					"  CNO       INT  		   NOT NULL AUTO_INCREMENT  COMMENT '고객번호',\r\n" + 
					"  CEMAIL    VARCHAR(25)    NOT NULL       		    COMMENT '이메일',\r\n" + 
					"  CPWD 	 VARCHAR(15)    NOT NULL        			COMMENT '비밀번호',\r\n" + 
					"  CNAME     VARCHAR(15)    NULL    					COMMENT '고객이름',\r\n" + 
					"  CNTCD     VARCHAR(5)     NULL    					COMMENT '고객국가코드',\r\n" + 
					"  CPHONE    VARCHAR(13)    NULL    					COMMENT '고객핸드폰번호',\r\n" + 
					"  CSTCD     VARCHAR(10)    NULL        				COMMENT '고객상태코드',\r\n" + 
					"  SDATE     DATE	 	   NULL      				COMMENT '가입일', \r\n" + 
					"  WDATE     DATE		   NULL      				COMMENT '탈퇴일', \r\n" + 
					"  UDATE     DATE  		   NULL       				COMMENT '수정일자',\r\n" + 
					"  PRIMARY KEY (CNO)\r\n" + 
					")";
			break;
			
		case DROP_CUSTOMER :
			result = "DROP TABLE CUSTOMER";
			break;
			
		case TRUNCATE_CUSTOMER :
			result = "TRUNCATE TABLE CUSTOMER";
			break;
			
		case CREATE_EXRATE : 
			result = "CREATE TABLE EXRATE(\n" + 
					"	SEQ INT NOT NULL AUTO_INCREMENT, \n" + 
					"    BDATE VARCHAR(10) NULL,\n" + 
					"    EXRATE VARCHAR(10) NOT NULL, \n" + 
					"    CNTCD VARCHAR(10) NOT NULL, \n" + 
					"    CRTMEM  VARCHAR(10) NULL,\n" + 
					"    UPMEM  VARCHAR(10) NULL,\n" + 
					"    UDATE  VARCHAR(10) NULL,\n" + 
					"    PRIMARY KEY(SEQ)\n" + 
					")";
			break;
		case DROP_EXRATE : 
			result = "DROP TABLE EXRATE";
			break;

		case TRUNCATE_EXRATE :
			result = "TRUNCATE TABLE EXRATE";
			break;
			
		}
		
		return result;
	}
}

package com.moneyhub.web.enums;

public enum SQL {
	CREATE_DB,
	CREATE_FAQ, DROP_FAQ, TRUNCATE_FAQ,
	CREATE_CUSTOMER, DROP_CUSTOMER, TRUNCATE_CUSTOMER,
	CREATE_EXRATE, DROP_EXRATE, TRUNCATE_EXRATE,
	CREATE_FEEDB, DROP_FEEDB, TRUNCATE_FEEDB,
	CREATE_ADMIN, DROP_ADMIN, INSERT_ADMIN
	;
	@Override
	public String toString() {
		String result = "";
		switch (this) {		
		case CREATE_DB :
			result = "CREATE DATABASE MONEYHUB";
			break;

		case CREATE_FAQ :
			result = "CREATE TABLE IF NOT EXISTS FAQ (\r\n" + 
					"	FAQID	INT NOT NULL AUTO_INCREMENT,\r\n" + 
					"    TITLE	VARCHAR(100) NOT NULL,\r\n" + 
					"    CONTENT VARCHAR(1400) NULL,\r\n" + 
					"    PRIMARY KEY (FAQID)\r\n" + 
					")	DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI";
			break;
			
		case DROP_FAQ :
			result = "DROP TABLE FAQ";
			break;
			
		case TRUNCATE_FAQ :
			result = "TRUNCATE TABLE FAQ";
			break;
					
		case CREATE_CUSTOMER :
			result = "CREATE TABLE IF NOT EXISTS CUSTOMER\r\n" + 
					"( \r\n" + 
					"  CNO       INT  		   NOT NULL AUTO_INCREMENT  COMMENT '고객번호',\r\n" + 
					"  CEMAIL    VARCHAR(40)    NOT NULL       		    COMMENT '이메일',\r\n" + 
					"  CPWD 	 VARCHAR(20)    NOT NULL        			COMMENT '비밀번호',\r\n" + 
					"  CNAME     VARCHAR(20)    NULL    					COMMENT '고객이름',\r\n" + 
					"  CNTCD     VARCHAR(20)     NULL    					COMMENT '고객국가코드',\r\n" + 
					"  CPHONE    VARCHAR(20)    NULL    					COMMENT '고객핸드폰번호',\r\n" + 
					"  CSTCD     VARCHAR(20)    NULL        				COMMENT '고객상태코드',\r\n" + 
					"  SDATE     DATE	 	   NULL      				COMMENT '가입일', \r\n" + 
					"  WDATE     DATE		   NULL      				COMMENT '탈퇴일', \r\n" + 
					"  UDATE     DATE  		   NULL       				COMMENT '수정일자',\r\n" + 
					"  AGE     INT  		   NULL       				COMMENT '나이',\r\n" +
					"  PRIMARY KEY (CNO)\r\n" + 
					") DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI";
			break;
			
		case DROP_CUSTOMER :
			result = "DROP TABLE CUSTOMER";
			break;
			
		case TRUNCATE_CUSTOMER :
			result = "TRUNCATE TABLE CUSTOMER";
			break;
			
		case CREATE_FEEDB :
			result = "CREATE TABLE FEEDB\r\n" + 
					"( \r\n" + 
					"  SEQ       	INT  		   NOT NULL AUTO_INCREMENT  COMMENT '순번',\r\n" + 
					"  BDATE    	INT    NOT NULL       		    		COMMENT '기준일',\r\n" + 
					"  CUSNUM 	 	VARCHAR(20)    NULL        				COMMENT '고객번호',\r\n" + 
					"  TXSEQ     	VARCHAR(20)    NULL    					COMMENT '거래일련번호',\r\n" + 
					"  FEETYPCD     VARCHAR(20)    NULL    					COMMENT '수수료종류코드',\r\n" + 
					"  FEEDTLCD    	VARCHAR(20)    NULL    					COMMENT '수수료상세코드',\r\n" + 
					"  AMNT     	VARCHAR(20)    NULL        				COMMENT '수수료금액',\r\n" + 
					"  CRTMEN     	VARCHAR(20)	   NULL      				COMMENT '생성자', \r\n" + 
					"  CRTDATE      DATE		   NULL      				COMMENT '생성일자', \r\n" + 
					"  UMEM     	VARCHAR(20)	   NULL       				COMMENT '수정자',\r\n" + 
					"  UDATE     	DATE  		   NULL       				COMMENT '수정일자',\r\n" +
					"  PRIMARY KEY (SEQ)\r\n" + 
					")";
			break;
			
		case DROP_FEEDB :
			result = "DROP TABLE FEEDB";
			break;
			
		case TRUNCATE_FEEDB :
			result = "TRUNCATE TABLE FEEDB";
			break;
			
		case CREATE_EXRATE : 
			result = "CREATE TABLE IF NOT EXISTS EXRATE(\n" + 
					"	SEQ INT NOT NULL AUTO_INCREMENT, \n" + 
					"    BDATE VARCHAR(10) NULL,\n" + 
					"    EXRATE VARCHAR(10) NOT NULL, \n" + 
					"    CNTCD VARCHAR(10) NOT NULL, \n" + 
					"    CRTMEM  VARCHAR(10) NULL,\n" + 
					"    UPMEM  VARCHAR(10) NULL,\n" + 
					"    UDATE  VARCHAR(10) NULL,\n" + 
					"    PRIMARY KEY(SEQ)\n" + 
					") DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI";
			break;
		case DROP_EXRATE : 
			result = "DROP TABLE EXRATE";
			break;

		case TRUNCATE_EXRATE :
			result = "TRUNCATE TABLE EXRATE";
			break;
		case CREATE_ADMIN :
			result = "CREATE TABLE IF NOT EXISTS ADMIN\r\n" + 
					"( \r\n" + 
					"  AID      INT  		   NOT NULL AUTO_INCREMENT  COMMENT '관리자PK',\r\n" + 
					"  AMAIL    VARCHAR(20)    NOT NULL       		    COMMENT '관리자 ID',\r\n" + 
					"  PWD 	 	VARCHAR(20)    NULL        				COMMENT '관리자 비밀번호',\r\n" +
					"  PRIMARY KEY (AID)\r\n" + 
					")  DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI";
			break;
			
		case DROP_ADMIN :
			result = "DROP TABLE ADMIN";
			break;
			
		case INSERT_ADMIN :
			result = "INSERT INTO ADMIN ( AMAIL, PWD )\r\n " +
					 "VALUES ( 1, 1) ";
			break;
			
		}
		
		return result;
	}
}

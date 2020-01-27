package com.moneyhub.web.remit.mappers;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface RemitMapper {

	public void insertFee(HashMap<String, Object> deal);
	public void insertRCPT(HashMap<String, Object> deal);
	public void insetTRDHR(HashMap<String, Object> deal);
	public void insertTRD(HashMap<String, Object> deal);

}

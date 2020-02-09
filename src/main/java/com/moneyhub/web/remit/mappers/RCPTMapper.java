package com.moneyhub.web.remit.mappers;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.remit.domains.RCPT;
import com.moneyhub.web.remit.domains.TRDHR;

@Repository
public interface RCPTMapper {

	public void createRCPT(HashMap<String, Object> map);
	public void deleteRCPT(HashMap<String, Object> map);
	public ArrayList<RCPT> rcptInfo();
}

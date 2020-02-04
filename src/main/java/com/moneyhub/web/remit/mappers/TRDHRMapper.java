package com.moneyhub.web.remit.mappers;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.remit.domains.TRDHR;

@Repository
public interface TRDHRMapper {

	public ArrayList<TRDHR> selectAll(PageProxy pager);
	public String countTRDHR(PageProxy pager);
	public void createTRDHR(HashMap<String, Object> map);
	public void deleteTRDHR(HashMap<String, Object> map);
}

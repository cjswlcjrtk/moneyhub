package com.moneyhub.web.remit.mappers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.pxy.PageProxy;

@Repository
public interface TRDHRMapper {

	public ArrayList<Map<String,Object>> selectAll(PageProxy pager);
	public String countTRDHR(PageProxy pager);
	public void createTRDHR(HashMap<String, Object> map);
	public void deleteTRDHR(HashMap<String, Object> map);
}

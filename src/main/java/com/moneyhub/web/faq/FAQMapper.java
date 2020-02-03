package com.moneyhub.web.faq;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.pxy.PageProxy;

@Repository
public interface FAQMapper {
//	public void createFAQ(HashMap<String, String> map);
	public void createFAQ(HashMap<String, Object> map);
	public void deleteFAQ(HashMap<String, Object> map);
	public void truncateFAQ(HashMap<String, Object> map);
	public void insertFAQ(FAQ param);
	
	public ArrayList<FAQ> selectAll(PageProxy pager);
	public String countFAQ(PageProxy pager);
}

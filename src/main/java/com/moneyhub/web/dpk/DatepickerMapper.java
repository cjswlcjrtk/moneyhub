package com.moneyhub.web.dpk;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.faq.FAQ;
import com.moneyhub.web.pxy.PageProxy;

@Repository
public interface DatepickerMapper {
	public void createDatepicker(HashMap<String, Object> map);
	public void deleteDatepicker(HashMap<String, Object> map);
	public void truncateDatepicker(HashMap<String, Object> map);
	public void insertDatepicker(Datepicker param);
	public ArrayList<Datepicker> selectAll();
}

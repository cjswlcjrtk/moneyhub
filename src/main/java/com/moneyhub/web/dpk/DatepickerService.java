package com.moneyhub.web.dpk;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DatepickerService {
	@Autowired Datepicker dpk;
	@Autowired DatepickerMapper dpkMapper;
	
	@Transactional
	public void insertHoliday(ArrayList<Datepicker> paramList) {
		for(Datepicker d : paramList) {
			dpk.setDdate(d.getDdate());
			dpk.setDname(d.getDname());
			dpkMapper.insertDatepicker(dpk);
		}
	}
}

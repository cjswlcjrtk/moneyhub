package com.moneyhub.web.admin;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.exr.Exrate;

@Repository
public interface AdminMapper {
	public ArrayList<String> memberPieChart();
	public String memberPieChartCount(String s);
}

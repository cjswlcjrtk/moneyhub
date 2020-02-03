package com.moneyhub.web.admin;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface AdminMapper {
//	public ArrayList<String> memberPieChart();
//	public HashMap<String, String> memberPieChart();
//	public ArrayList<String> memberPieChart();
	public String memberPieChartCount(String s);
	
	public ArrayList<String> feeDBChart();
	public String feeDBChartAMNT(String s);
	
	public Admin adminLogin(Admin param);
	
	public ArrayList<Map<String, Object>> memberList();
	public void memberUpdate(Admin param);
}

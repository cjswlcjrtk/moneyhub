package com.moneyhub.web.admin;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface AdminMapper {
	public String memberPieChartCount(String s);
	
	public ArrayList<String> feeDBChart();
	public String feeDBChartAMNT(String s);
	public String feeChartOneAMNT(String s);
	public String feeChartTwoAMNT(String s);
	
	public Admin adminLogin(Admin param);
	
	public ArrayList<Map<String, Object>> memberList();
	public void memberUpdate(Admin param);
	
	public String feeSelectOne();
	public String feeSelectTwo();
	
	public void feeUpdateOne(Map<String, String> param);
	public void feeUpdateTwo(Map<String, String> param);
}

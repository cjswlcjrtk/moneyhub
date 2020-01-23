package com.moneyhub.web.admin;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Proxy;

@RestController
@RequestMapping("/admin")
public class AdminChartCtrl extends Proxy{
	
	@Autowired AdminChart adminChart;
	@Autowired Box<Object> box;
	@Autowired AdminChartService adminChartService;
	
	@GetMapping("/feeDBCharts")
	public Map<?, ?> areaChart(){
//		System.out.println("컨트롤 테스트");
		ArrayList<String> list = new ArrayList<>();
		list = adminChartService.feeDBChart();
		ArrayList<String> list2 = new ArrayList<>();
		list2 = adminChartService.feeDBChartAMNT(list);
		box.clear();
		box.put("feeDBChart", list);
		box.put("feeDBChartAMNT", list2);
//		System.out.println(list2.toString()+"list2");
		return box.get();
	}
	
	@GetMapping("/memberPieChart")
	public Map<?, ?> memberPieChart(){
		System.out.println("파이 테스트");
//		HashMap<String, String> list = new HashMap<>();
		ArrayList<String> list = new ArrayList<>();
//		list = adminChartService.memberPieChart();
		list.add("10");
		list.add("20");
		list.add("30");
		list.add("40");
		list.add("50");
		list.add("60");
		list.add("70");
		list.add("80");
		list.add("90");
		
		ArrayList<String> list2 = new ArrayList<>();
		list2 = adminChartService.memberPieChartCount(list);
		System.out.println(list);
		System.out.println(list2);
		box.clear();
		box.put("adminChart", list);
		box.put("adminChartCount", list2);
		print(box.get().toString());
		return box.get();
	}
	
	

}

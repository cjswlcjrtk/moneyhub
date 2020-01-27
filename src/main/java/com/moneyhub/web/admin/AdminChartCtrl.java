package com.moneyhub.web.admin;


import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	
//	@PostMapping("/areaCharts")
//	public Map<?, ?> areaChart(){
//		System.out.println("컨트롤 테스트");
//		return null;
//	}
	
	@GetMapping("/areaCharts")
	public Map<?, ?> areaChart(){
		System.out.println("컨트롤 테스트");
		return null;
	}

	@GetMapping("/memberPieChart")
	public Map<?, ?> memberPieChart(){
		System.out.println("파이 테스트");
		ArrayList<String> list = new ArrayList<>();
		list = adminChartService.memberPieChart();
//		ArrayList<Map<String, Object>> list2 = new ArrayList<>();
//		list2 = adminChartService.memberPieChartCount(list);
		ArrayList<String> list2 = new ArrayList<>();
//		list2.add("10");
//		list2.add("20");
//		list2.add("30");
		
		list2 = adminChartService.memberPieChartCount(list);
		System.out.println(list);
		System.out.println(list2);		
		box.clear();
		box.put("adminChart", list);
		box.put("test", list2);
//		box.put("AGE", list2);
		print(box.get().toString());
		return box.get();
	}

}

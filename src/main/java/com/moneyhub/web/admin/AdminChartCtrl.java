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
@RequestMapping("/adminChart")
public class AdminChartCtrl extends Proxy{
	
	@Autowired AdminChart adminChart;
	@Autowired Box<Object> box;
	@Autowired AdminChartService adminChartService;
	
	@GetMapping("/feeDBCharts")
	public Map<?, ?> areaChart(){
		ArrayList<String> list = new ArrayList<>();
		list = adminChartService.feeDBChart();
		ArrayList<String> list2 = new ArrayList<>();
		list2 = adminChartService.feeDBChartAMNT(list);
		box.clear();
		box.put("feeDBChart", list);
		box.put("feeDBChartAMNT", list2);
		return box.get();
	}
	
	@GetMapping("/feeChartsOne")
	public Map<?, ?> feeChartsOne(){
		ArrayList<String> list = new ArrayList<>();
		list = adminChartService.feeDBChart();
		ArrayList<String> list2 = new ArrayList<>();
		list2 = adminChartService.feeChartOneAMNT(list);
		box.clear();
		box.put("feeDBChart", list);
		box.put("feeChartOneAMNT", list2);
		return box.get();
	}
	
	@GetMapping("/feeChartsTwo")
	public Map<?, ?> feeChartsTwo(){
		ArrayList<String> list = new ArrayList<>();
		list = adminChartService.feeDBChart();
		ArrayList<String> list2 = new ArrayList<>();
		list2 = adminChartService.feeChartTwoAMNT(list);
		box.clear();
		box.put("feeDBChart", list);
		box.put("feeChartTwoAMNT", list2);
		return box.get();
	}
	
	@GetMapping("/memberPieChart")
	public Map<?, ?> memberPieChart(){
		ArrayList<String> list = new ArrayList<>();
		for(int i=1; i<7 ;i++) {
			list.add(i*10+"");
		}
		ArrayList<String> list2 = new ArrayList<>();
		list2 = adminChartService.memberPieChartCount(list);
		box.clear();
		box.put("adminChart", list);
		box.put("adminChartCount", list2);
		print(box.get().toString());
		return box.get();
	}
}

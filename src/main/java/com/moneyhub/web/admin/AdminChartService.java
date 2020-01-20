package com.moneyhub.web.admin;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminChartService {
	
	@Autowired AdminChart adminChart;
	@Autowired AdminMapper adminMapper;
	
	public ArrayList<String> memberPieChart(){
//		Function<String, ArrayList<AdminChart>> f = t -> adminMapper.memberPieChart(t);
		Supplier<ArrayList<String>> f = () -> adminMapper.memberPieChart();
//		return f.apply(s);
		return f.get();		
	}
	public ArrayList<String> memberPieChartCount(ArrayList<String> s){
		Function<String, String> f = t -> adminMapper.memberPieChartCount(t);
		ArrayList<String> list = new ArrayList<>();
		Map<String, String> map = new HashMap<String, String>();
		for(String aaaa: s) {
			System.out.println(f.apply(map.put("age", aaaa)).toString());
			list.add(f.apply(map.put("age", aaaa)));
		}
		return list;
	}
}
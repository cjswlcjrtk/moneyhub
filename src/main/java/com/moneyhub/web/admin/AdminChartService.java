package com.moneyhub.web.admin;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AdminChartService {
	
	@Autowired AdminChart adminChart;
	@Autowired AdminMapper adminMapper;

	@Transactional
	public ArrayList<String> memberPieChartCount(List<String> s){
		ArrayList<String> list = new ArrayList<>();
		for(String p: s) {	
			list.add(adminMapper.memberPieChartCount(p));
		}	
		System.out.println(list.toString()+"list값");
		return list;
	}
	
	public ArrayList<String> feeDBChart(){//월별로 리스트 뽑음
		Supplier<ArrayList<String>> f = () -> adminMapper.feeDBChart();
		return f.get();
	}
	
	@Transactional
	public ArrayList<String> feeDBChartAMNT(ArrayList<String> s){
		ArrayList<String> list = new ArrayList<>();
		for(String p: s) {	
			list.add(adminMapper.feeDBChartAMNT(p));
		}	
		return list;
	}
	
	@Transactional
	public ArrayList<String> feeChartOneAMNT(ArrayList<String> s){
		ArrayList<String> list = new ArrayList<>();
		for(String p: s) {	
			list.add(adminMapper.feeChartOneAMNT(p));
		}	
		return list;
	}
	
	@Transactional
	public ArrayList<String> feeChartTwoAMNT(ArrayList<String> s){
		ArrayList<String> list = new ArrayList<>();
		for(String p: s) {	
			list.add(adminMapper.feeChartTwoAMNT(p));
		}	
		return list;
	}
	
}
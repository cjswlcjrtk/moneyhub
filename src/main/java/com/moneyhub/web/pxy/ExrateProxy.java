package com.moneyhub.web.pxy;

import java.util.ArrayList;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.moneyhub.web.exr.Exrate;

@Lazy
@Component("exPxy")
public class ExrateProxy {
	@Autowired Inventory<Exrate> inventory;
	@Autowired Exrate exrate;
	public String[] bdateStore() {
		String[] date = {"2019-12-19", "2019-12-20", "2019-12-21", "2019-12-22", "2019-12-23", "2019-12-24",
						"2019-12-25", "2019-12-26","2019-12-27", "2019-12-28", "2019-12-29", "2019-12-30", "2019-12-31"};
		return date;
	}
	
	public double[] exrateStore() {
		double[] exrate = { 1193.30, 1188.60, 1171.70, 1172.90, 1166.70, 1165.30, 1164.50, 1162.60, 1161.70, 1163.70, 1161.20, 1160.90, 1157.80 };
		return exrate;
	}
	
	public ArrayList<Exrate> sortDuplExrate(ArrayList<Exrate> paramList){
		
		Collections.sort(paramList);
		Collections.reverse(paramList);
		ArrayList<Exrate> resultList = new ArrayList<>();
		
		int initNum = 0;
		int length = paramList.size();
		
		boolean flag = false;
		for(int i = 0; i < length; i++) {
			if(flag) {
				if(!paramList.get(initNum).getBdate().equals(paramList.get(i+1).getBdate())) {
					flag = false;
				}
			}else {
				resultList.add(paramList.get(i));
				if(paramList.get(i).getBdate().equals(paramList.get(i+1).getBdate())) {
					initNum = i;
					flag = true;
				}
			}
			if(resultList.size() >= 10)
				length = 10;
		}
		Collections.sort(resultList);
		return resultList;
	}
}

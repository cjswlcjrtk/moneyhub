package com.moneyhub.web.admin;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.pxy.Box;

@RestController
@RequestMapping("/admin")
public class adminChartCtrl {
	
	@Autowired Box<Object> box;
	
	@PostMapping("/areaCharts")
	public Map<?, ?> areaChart(){
		System.out.println("컨트롤 테스트");
		return null;
	}

}

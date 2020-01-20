package com.moneyhub.admin;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Proxy;

@RestController
@RequestMapping("/admin")
public class adminChartCtrl extends Proxy{
	
	@Autowired Box<Object> box;
	
//	@PostMapping("/areaCharts")
	@GetMapping("/areaCharts")
	public Map<?, ?> areaChart(){
		System.out.println("컨트롤 테스트");
		return null;
	}

}

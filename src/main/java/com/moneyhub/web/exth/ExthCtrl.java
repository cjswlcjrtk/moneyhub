package com.moneyhub.web.exth;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.pxy.Box;

@RestController
@RequestMapping("/exth")
public class ExthCtrl {
	@Autowired Exth exth;
	@Autowired ExthService exthService;
	@Autowired ExthMapper exthMapper;
	@Autowired Box<Object> box;
	
	@PostMapping("/insert/{deposit}")
	public Map<?, ?> insertExth(@RequestBody ArrayList<Exth> paramList, @PathVariable String deposit) {
		box.put("exth", exthService.insertExth(paramList, deposit));
		return box.get();
	}
	
	@DeleteMapping("/delete/{getCno}")
	public void truncateExthByCno(@PathVariable String getCno) {
		Consumer<String> c = t -> exthMapper.deleteExthByCno(t);
		c.accept(getCno);
	}
}

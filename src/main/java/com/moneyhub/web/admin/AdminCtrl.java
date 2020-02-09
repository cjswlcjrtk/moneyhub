package com.moneyhub.web.admin;

import java.util.ArrayList;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Proxy;

@RestController
@RequestMapping("/admin")
public class AdminCtrl extends Proxy{
	
	@Autowired Admin admin;
	@Autowired Box<Object> box;
	@Autowired AdminMapper adminMapper;
	
	@PostMapping("/login")
	public Map<?, ?> adminLogin(@RequestBody Admin param) {
		Function<Admin, Admin> f = t -> adminMapper.adminLogin(t);
		admin = f.apply(param);
		String result = (admin != null) ? "SUCCESS" : "FAIL";
		box.clear();
		box.put("msg", result);
		box.put("adm", admin);
		return box.get();
	}
	
	@GetMapping("/member")
	public Map<?, ?> memberList(){
		ArrayList<Map<String, Object>> list = new ArrayList<>();
		Supplier<ArrayList<Map<String, Object>>> f = () -> adminMapper.memberList();
		list = f.get();
		box.clear();
		box.put("adm", list);
		return box.get();
	}
	
	@PostMapping("/memberUpdate")
	public Map<?, ?> memberListUpdate(@RequestBody Admin param){
		Consumer<Admin> c = o -> adminMapper.memberUpdate(o);
		c.accept(param);
		box.clear();
		box.put("msg", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/fee")
	public Map<?, ?> feeSelect(){
		Supplier<String> one = () -> adminMapper.feeSelectOne();
		one.get();
		Supplier<String> two = () -> adminMapper.feeSelectTwo();
		two.get();
		box.clear();
		box.put("feeOne", one.get());
		box.put("feeTwo", two.get());
		return box.get();
	}
	
	@PostMapping("/feeUpdateOne")
	public Map<?, ?> feeUpdateOne(@RequestBody Map<String, String> param){	
		Consumer<Map<String, String>> c = o -> adminMapper.feeUpdateOne(o);
		c.accept(param);
		box.clear();
		box.put("msg", "SUCCESS");
		return box.get();
	}
	
	@PostMapping("/feeUpdateTwo")
	public Map<?, ?> feeUpdateTwo(@RequestBody Map<String, String> param){	
		Consumer<Map<String, String>> c = o -> adminMapper.feeUpdateTwo(o);
		c.accept(param);
		box.clear();
		box.put("msg", "SUCCESS");
		return box.get();
	}

}

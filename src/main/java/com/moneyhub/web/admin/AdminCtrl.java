package com.moneyhub.web.admin;

import java.awt.geom.Arc2D.Double;
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
	
	@GetMapping("/exchangeTotalCount")
	public Map<?, ?> exchangeTotalCount(){
		Supplier<Integer> total = () -> adminMapper.exchangeTotalCount();
		Supplier<Integer> usd = () -> adminMapper.exchangeUSDCount();
		Supplier<Integer> cny = () -> adminMapper.exchangeCNYCount();
		Supplier<Integer> jpy = () -> adminMapper.exchangeJPYCount();
		Supplier<Integer> eur = () -> adminMapper.exchangeEURCount();	
		box.clear();
		box.put("exchangeUSDPercentage", usd.get()*100/total.get());
		box.put("exchangeCNYPercentage", cny.get()*100/total.get());
		box.put("exchangeJPYPercentage", jpy.get()*100/total.get());
		box.put("exchangeEURPercentage", eur.get()*100/total.get());
		box.put("exchangeAnotherPercentage", 100-(usd.get()*100/total.get())-(cny.get()*100/total.get())
				-(jpy.get()*100/total.get())-(eur.get()*100/total.get()));
		return box.get();
	}
	
	@GetMapping("/memberNowCount")
	public Map<?, ?> memberNowCount(){
		Supplier<String> one = () -> adminMapper.memberNowCount();
		one.get();
		box.clear();
		box.put("memberNowCount", one.get());
		return box.get();
	}
	
	@GetMapping("/memberTotalBalance")
	public Map<?, ?> memberTotalBalance(){
		Supplier<String> one = () -> adminMapper.memberTotalBalance();
		one.get();
		box.clear();
		box.put("memberTotalBalance", one.get());
		return box.get();
	}
	
	@GetMapping("/memberNowExchange")
	public Map<?, ?> memberNowExchange(){
		Supplier<String> one = () -> adminMapper.memberNowExchange();
		one.get();
		box.clear();
		box.put("memberNowExchange", one.get());
		return box.get();
	}
	
	@GetMapping("/totalProfit")
	public Map<?, ?> totalProfit(){
		Supplier<Integer> exchange = () -> adminMapper.totalProfitExchange();
		exchange.get();
		Supplier<Integer> fee = () -> adminMapper.totalProfitFee();
		fee.get();
		box.clear();
		box.put("totalProfit", exchange.get()+fee.get());
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
	
	@GetMapping("/exchangeDB")
	public Map<?, ?> exchangeDBSelect(){
		Supplier<String> exchange = () -> adminMapper.exchangeDBSelect();
		exchange.get();
		box.clear();
		box.put("exchangeDB", exchange.get());
		return box.get();
	}
	
	@PostMapping("/exchangeDBUpdate")
	public Map<?, ?> exchangeDBUpdate(@RequestBody Map<String, Float> param){
		param.put("exchangeDBValue", (float) (param.get("exchangeDBValue")*0.01));
		Consumer<Map<String, Float>> c = o -> adminMapper.exchangeDBUpdate(o);
		c.accept(param);
		box.clear();
		box.put("msg", "SUCCESS");
		return box.get();
	}
}

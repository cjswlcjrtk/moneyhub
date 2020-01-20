package com.moneyhub.web.faq;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moneyhub.web.enums.SQL;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Inventory;
import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.pxy.Proxy;

@Service
public class FAQSevice {

	/*public void createFAQ(HashMap<String, String> map);
	public void deleteFAQ(HashMap<String, String> map);
	public void truncateFAQ(HashMap<String, String> map);
	
	public ArrayList<FAQ> selectAll(PageProxy pager);
	public String countFAQ();*/
	@Autowired Proxy pxy;
	@Autowired Box<Object> box;
	@Autowired Inventory<Object> inventory;
	@Autowired FAQMapper faqMapper;
	@Autowired PageProxy pager;
	
	public void createFAQ() {
	//	HashMap<String, String> map = new HashMap<>();
		box.clear();
		box.put("CREATE_FAQ", SQL.CREATE_FAQ.toString());
//		pxy.print("테이블 생성 쿼리 : \n" + box.get("CREATE_FAQ"));
		Consumer<HashMap<String, Object>> c = p -> faqMapper.createFAQ(p);
		c.accept(box.get());
	}
	public void deleteFAQ() {
		box.clear();
		box.put("DROP_FAQ", SQL.DROP_FAQ.toString());
//		pxy.print("테이블 삭제 쿼리 : \n" + box.get("CREATE_FAQ"));
		Consumer<HashMap<String, Object>> c = p -> faqMapper.deleteFAQ(p);
		c.accept(box.get());
	}
	
	public void truncateFAQ() {
		box.clear();
		box.put("TRUNCATE_FAQ", SQL.TRUNCATE_FAQ.toString());
		pxy.print(box.get().toString());
		Consumer<HashMap<String, Object>> c = p -> faqMapper.truncateFAQ(p);
		c.accept(box.get());
	}
	
	public Map<?, ?> selectAll(){
		pager.setRowCount(countFAQ());
		pager.paging();
		
		pxy.print(pager.toString());
		
		Function<PageProxy, ArrayList<FAQ>> f = t -> faqMapper.selectAll(t);	
		box.put("pager", pager);
		box.put("faq", f.apply(pager));
		
		pxy.print(box.get("faq").toString());
		
		return box.get();
	}
	public int countFAQ() {
		Function<PageProxy, String> s = p -> faqMapper.countFAQ(p);
		return pxy.integer(s.apply(pager));
	}
}

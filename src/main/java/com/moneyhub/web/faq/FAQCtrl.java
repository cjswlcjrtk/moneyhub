package com.moneyhub.web.faq;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.pxy.Proxy;

@RestController


@RequestMapping("/faq")
public class FAQCtrl extends Proxy{
	@Autowired Box<Object> box;
	@Autowired FAQMapper faqMapper;
	@Autowired FAQSevice faqService;
	@Autowired PageProxy pager;
	
	@GetMapping("/create/table")
	public Map<?, ?> createTable(){
		faqService.createFAQ();
		box.clear();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/delete/table")
	public Map<?, ?> deleteTable(){
		faqService.deleteFAQ();
		box.clear();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/truncate/table")
	public Map<?, ?> truncateTable(){
		print("테이블 내용 삭제 진입");
		faqService.truncateFAQ();
		box.clear();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/lists/page/{nowPage}/search/{keyword}")
	public Map<?, ?> faqList(@PathVariable String nowPage, @PathVariable String keyword) {
		print("리스트 진입 - nowPage : " + nowPage + ", keyword : " + keyword);
		int pageSize = 5, blockSize = 5;
		pager.setKeyword((keyword.equals("null") ? null : keyword.toUpperCase()));
		pager.setPageSize(pageSize);
		pager.setNowPage(integer(nowPage));
		pager.setBlockSize(blockSize);
		
		return faqService.selectAll();
	}
}

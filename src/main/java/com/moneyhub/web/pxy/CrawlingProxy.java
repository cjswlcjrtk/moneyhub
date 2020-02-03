package com.moneyhub.web.pxy;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.enums.Path;
import com.moneyhub.web.faq.FAQ;
import com.moneyhub.web.faq.FAQMapper;

@Lazy
@Component("crawler")
public class CrawlingProxy extends Proxy{
	@Autowired Inventory<Object> inventory;
	@Autowired Box<Object> box;
	@Autowired FAQ faq;
	@Autowired FAQMapper faqMapper;
	
	@Transactional
	public void kakaoFAQ(int pageNum){
		inventory.clear();
		
		try {
	/*		Connection.Response homepage = Jsoup.connect(Path.FAQ_URL.toString())
												.method(Connection.Method.GET)
												.userAgent(Path.USER_AGENT.toString())
												.execute();*/
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
//			String faqUrl = "https://kakaobank.com/Help/Guide/Faq";

			String faqUrl = "https://pay-cs-web.kakao.com/faq?pid=&cid=-1&page="+ pageNum +"&size=5&search=";
			Connection.Response homePage = Jsoup.connect(faqUrl)
											.method(Connection.Method.GET)
											.userAgent(USER_AGENT)
											.execute();
			Document temp = homePage.parse();
			
//			Elements titles = temp.select("div[class='board_item on'] div.info_tit a.link_tit strong");
//			Elements contents = temp.select("div.info_cont p");
			
/*			String faqUrl = "https://pay-cs-web.kakao.com/faq?pid=&cid=-1&page=0&size=5&search=";*/
			Elements category = temp.select("span.txt_cate");
			Elements titles = temp.select("strong.tit_faq");
			Elements contents = temp.select("div.desc_faq");
			print("category - 사이즈 : "+ category.size() +", titles - 사이즈 : " +titles.size() + ", contents - 사이즈 : " +contents.size());
			HashMap<String, String> map = null;
			for(int i=0; i<titles.size(); i++) {
//				map = new HashMap<>();
				box.put("category", category.get(i).text());
				box.put("titles", titles.get(i).text());
				box.put("contents", contents.get(i).html());
				inventory.add(box);
				
//				faq.setCategory(category.get(i).text());
				faq.setTitle(titles.get(i).text());
				faq.setContent(contents.get(i).html());
				faqMapper.insertFAQ(faq);
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		print("***************** 크롤링 결과 ********************");
		inventory.get().get(0).toString();
//		forEach(System.out :: println);
//		return faq;
	}
	
	@Transactional
	public void insertCrawling(){
		int crawlingPage = 10;
		for(int i=0; i<crawlingPage; i++) {
			 kakaoFAQ(i);
		}
	}
}

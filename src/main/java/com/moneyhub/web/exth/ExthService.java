package com.moneyhub.web.exth;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.pxy.Inventory;
import com.moneyhub.web.pxy.Proxy;

@Service
public class ExthService {
	@Autowired Exth exth;
	@Autowired ExthMapper exthMapper;
	@Autowired Proxy pxy;
	@Autowired Inventory<Exth> inven;
	
	@Transactional
	public ArrayList<Exth> insertExth(ArrayList<Exth> paramList, String deposit){
//		profits
		float l = paramList.get(0).getTotal() / Float.parseFloat(deposit);
		System.out.println(paramList.get(0).getTotal() + " / " + Float.parseFloat(deposit)
							+ " = rerate : " + l);
		
		int profits = paramList.get(0).getTotal() - pxy.integer(deposit);
		System.out.println(paramList.get(0).getTotal() + " - " + Float.parseFloat(deposit)
		+ " = rerate : " + profits);
		
		paramList.forEach( i -> System.out.println(i));
		
/*		if( exthMapper.totalCount() > 0 ){
			exthMapper.truncateExthByCno(paramList.get(0).getCno());
		}*/
		
		for( Exth e : paramList ) {
			e.setProfits(e.getTotal() - pxy.integer(deposit));
			e.setRerate(e.getTotal() / Float.parseFloat(deposit));
			exthMapper.insertExth(e);
		}		
		
		return exthMapper.selectAllByCno(paramList.get(0).getCno());
	}
}

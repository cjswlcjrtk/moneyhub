package com.moneyhub.web.pxy;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.moneyhub.web.crudtable.CRUDFee;
import com.moneyhub.web.crudtable.CRUDTableMapper;
import com.moneyhub.web.tx.TxMapper;

@Component("feeDBProxy")
public class FeeProxy extends Proxy{
	@Autowired CRUDTableMapper crudTableMapper;
	@Autowired TxMapper txMapper;
	@Autowired CRUDFee crudFeeDB;
	
	public String makeAmnt() {
		List<String> amnt = Arrays.asList("6", "12");
		Collections.shuffle(amnt);
		return amnt.get(0);
	}
	
	public String makebDate() {
		List<String> bDate = Arrays.asList("1", "2", "3", "4", "5", "6", "7", "8",
				"9", "10", "11", "12");
		Collections.shuffle(bDate);
		return bDate.get(0);
	}

}

package com.moneyhub.web.crudtable;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.enums.SQL;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Proxy;
import com.moneyhub.web.tx.TxService;

@RestController
@RequestMapping("/crudtable")
public class CRUDTableCtrl extends Proxy{
	
	@Autowired CRUDCustomer customer;
	@Autowired CRUDFeeDB feeDB;
	
	@Autowired Box<Object> box;	
	@Autowired CRUDTableService crudTableService;
	@Autowired TxService txService;
	
//	CRUDCustomer
	@RequestMapping("/create/createCustomer")
	public Map<?,?> createCustomerTable(){
		print("고객테이블 생성 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("CREATE_CUSTOMER", SQL.CREATE_CUSTOMER.toString());
		crudTableService.createCustomer(map);
		
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@RequestMapping("/insert/insertCustomer")
	public Map<?,?> insertCustomerTable(){
		print("고객테이블 insert 진입");
		txService.insertCustomer();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@RequestMapping("/truncate/truncateCustomer")
	public Map<?,?> deleteCustomerTable(){
		print("고객테이블 truncate 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("TRUNCATE_CUSTOMER", SQL.TRUNCATE_CUSTOMER.toString());
		crudTableService.truncateCustomer(map);
		
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@RequestMapping("/drop/dropCustomer")
	public Map<?,?> dropCustomerTable(){
		print("고객테이블 drop 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("DROP_CUSTOMER", SQL.DROP_CUSTOMER.toString());
		crudTableService.dropCustomer(map);
		
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
//	CRUDFeeDB
	@RequestMapping("/create/createFeeDB")
	public Map<?,?> createFeeDBTable(){
		print("고객테이블 생성 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("CREATE_FEEDB", SQL.CREATE_FEEDB.toString());
		crudTableService.createFeeDB(map);
		
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@RequestMapping("/insert/insertFeeDB")
	public Map<?,?> insertFeeDBTable(){
		print("고객테이블 insert 진입");
		txService.insertFeeDB();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@RequestMapping("/truncate/truncateFeeDB")
	public Map<?,?> deleteFeeDBTable(){
		print("고객테이블 truncate 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("TRUNCATE_FEEDB", SQL.TRUNCATE_FEEDB.toString());
		crudTableService.truncateFeeDB(map);
		
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@RequestMapping("/drop/dropFeeDB")
	public Map<?,?> dropFeeDBTable(){
		print("고객테이블 drop 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("DROP_FEEDB", SQL.DROP_FEEDB.toString());
		crudTableService.dropFeeDB(map);		
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	//ADMIN
	@RequestMapping("/create/createAdmin")
	public Map<?,?> createAdminTable(){
		print("admin테이블 생성 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("CREATE_ADMIN", SQL.CREATE_ADMIN.toString());
		crudTableService.createAdmin(map);		
		map.clear();
		map.put("INSERT_ADMIN", SQL.INSERT_ADMIN.toString());
		crudTableService.insertAdmin(map);
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@RequestMapping("/drop/dropAdmin")
	public Map<?,?> dropAdminTable(){
		print("admin테이블 drop 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("DROP_ADMIN", SQL.DROP_ADMIN.toString());
		crudTableService.dropAdmin(map);		
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}

	
}

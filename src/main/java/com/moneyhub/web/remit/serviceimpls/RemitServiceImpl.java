package com.moneyhub.web.remit.serviceimpls;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moneyhub.web.remit.mappers.RemitMapper;
import com.moneyhub.web.remit.services.RemitService;

@Service
public class RemitServiceImpl implements RemitService{
	@Autowired
	private RemitMapper remitMapper;
	
	@Override
	public void insertRemit(HashMap<String, Object> deal) {
	Map<String, Object> map = new HashMap<String, Object>();
		remitMapper.insertFee(deal);
		remitMapper.insertRCPT(deal);
		remitMapper.insetTRDHR(deal);
		remitMapper.insertTRD(deal);
	}

}

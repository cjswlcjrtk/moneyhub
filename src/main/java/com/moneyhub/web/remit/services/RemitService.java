package com.moneyhub.web.remit.services;

import java.util.HashMap;

import org.springframework.stereotype.Component;

@Component
public interface RemitService {

	public void insertRemit(HashMap<String, Object> deal);

}

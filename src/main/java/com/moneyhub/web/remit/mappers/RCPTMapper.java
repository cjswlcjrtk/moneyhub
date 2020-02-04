package com.moneyhub.web.remit.mappers;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface RCPTMapper {

	public void createRCPT(HashMap<String, Object> map);
	public void deleteRCPT(HashMap<String, Object> map);

}

package com.moneyhub.web.remit.mappers;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface TRDMapper {

	public void createTRD(HashMap<String, Object> map);
	public void deleteTRD(HashMap<String, Object> map);
}

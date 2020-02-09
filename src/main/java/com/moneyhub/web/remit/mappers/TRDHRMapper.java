package com.moneyhub.web.remit.mappers;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.remit.domains.TRDHR;

@Repository
public interface TRDHRMapper {

	public ArrayList<TRDHR> selectAll(PageProxy pager);
	public String countTRDHR(PageProxy pager);

}

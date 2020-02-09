package com.moneyhub.web.exth;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

@Repository
public interface ExthMapper {

	public void insertExth(Exth param);
	public ArrayList<Exth> selectAllByCno(int cno);
	public int totalCount();
	public void deleteExthByCno(String cno);

}

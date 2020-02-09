package com.moneyhub.web.remit.serviceimpls;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.remit.domains.Fee;
import com.moneyhub.web.remit.domains.RCPT;
import com.moneyhub.web.remit.domains.TRD;
import com.moneyhub.web.remit.domains.TRDHR;
import com.moneyhub.web.remit.mappers.RemitMapper;
import com.moneyhub.web.remit.services.RemitService;
import com.moneyhub.web.remit.util.CharUtil;

@Service
public class RemitServiceImpl implements RemitService{
	Date date = new Date();
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
	@Autowired TRDHR trdhr;
	@Autowired TRD trd;
	@Autowired RCPT rcpt;
	@Autowired Fee fee;
	@Autowired
	private RemitMapper remitMapper;
	
	@Override
	@Transactional
	public void insertRemit(HashMap<String, Object> deal) {
		String mtcn = CharUtil.excuteGenerate();
		//거래,acctNo
		trd.setBsdate(sdf.format(date));
		trd.setMtcn(mtcn);
		trd.setCno(deal.get("cno").toString());
		trd.setTrdStatCd(0);  //0=입금대기 -> 공통코드 관리
		trd.setChngCausCd(0);
		trd.setTrdAmnt(deal.get("amount").toString());
		trd.setCntcd(deal.get("cntcd").toString());
		trd.setExrate((double) deal.get("exrate"));
		trd.setCrtmem("LEJ");
		trd.setCrtdt(sdf.format(date));
		remitMapper.insertTRD(trd);
		
		//거래내역,acctNo
		trdhr.setBsdate(sdf.format(date));
		trdhr.setMtcn(mtcn);
		trdhr.setCno(deal.get("cno").toString());
		trdhr.setTrdStatCd(0);  //0=입금대기 -> 공통코드 관리
		trdhr.setChngCausCd(0);
		trdhr.setTrdAmnt(deal.get("amount").toString());
		trdhr.setCntcd(deal.get("cntcd").toString());
		trdhr.setExrate((double) deal.get("exrate"));
		trdhr.setCrtmem("LEJ");
		trdhr.setCrtdt(sdf.format(date));
		remitMapper.insertTRDHR(trdhr);
		
		//수취
		rcpt.setBsdate(sdf.format(date));
		rcpt.setMtcn(mtcn);
		rcpt.setCno(deal.get("cno").toString());
		rcpt.setRcp(0); //0 미수취
		rcpt.setCntp(deal.get("cntp").toString()); 
		rcpt.setPassFnm(deal.get("rcpsf").toString());
		rcpt.setPassLnm(deal.get("rcpsl").toString());
		rcpt.setRcemail(deal.get("rcemail").toString());
		rcpt.setCrtmem("LEJ");
		rcpt.setCrtdt(sdf.format(date));
		remitMapper.insertRCPT(rcpt);
		
		/* 입금 확인시 수수료 테이블 인설트
		 * remitMapper.insertFee(deal); 
		 */
		
	}

}

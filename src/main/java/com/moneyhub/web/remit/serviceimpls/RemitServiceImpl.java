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
import com.moneyhub.web.remit.util.CharUtil;

@Service
public class RemitServiceImpl{
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
	@Autowired TRDHR trdhr;
	@Autowired TRD trd;
	@Autowired RCPT rcpt;
	@Autowired Fee fee;
	@Autowired
	private RemitMapper remitMapper;
	
	@Transactional
	public void insertRemit(HashMap<String, Object> deal) {
		String mtcn = CharUtil.excuteGenerate();
		Date date = new Date();
		//거래,acctNo
		trd.setBsdate(sdf.format(date));
		trd.setMtcn(mtcn);
		trd.setCno(deal.get("cno").toString());
		trd.setTrdStatCd(deal.get("trdStatCd").toString());  //1.입금 2.출금
		trd.setTrdTypeCd(deal.get("trdTypeCd").toString());  //1.송금 2.환전
		trd.setChngCausCd("1");
		trd.setTrdRcv(deal.get("trdrcv").toString());
		trd.setTrdSnd(deal.get("trdsnd").toString());
		trd.setCntcd(deal.get("cntcd").toString());
		trd.setExrate(deal.get("exrate").toString());
		trd.setCrtmem(deal.get("crtmem").toString()); //yhm수정
		trd.setCrtdt(sdf.format(date));
		remitMapper.insertTRD(trd);
		
		//거래내역,acctNo
		trdhr.setBsdate(sdf.format(date));
		trdhr.setMtcn(mtcn);
		trdhr.setCno(deal.get("cno").toString());
		trdhr.setTrdStatCd(deal.get("trdStatCd").toString());  //1.입금 2.출금
		trdhr.setTrdTypeCd(deal.get("trdTypeCd").toString());  //1.송금 2.환전
		trdhr.setChngCausCd("1");
		trdhr.setTrdRcv(deal.get("trdrcv").toString());
		trdhr.setTrdSnd(deal.get("trdsnd").toString());
		trdhr.setCntcd(deal.get("cntcd").toString());
		trdhr.setExrate(deal.get("exrate").toString());
		trdhr.setCrtmem(deal.get("crtmem").toString()); //yhm수정
		trdhr.setCrtdt(sdf.format(date));
		remitMapper.insertTRDHR(trdhr);
		
		//수취
		rcpt.setBsdate(sdf.format(date));
		rcpt.setMtcn(mtcn);
		rcpt.setCno(deal.get("cno").toString());
		rcpt.setRcp(0); //0 미수취
		rcpt.setCntp(deal.get("cntp").toString()); 
		rcpt.setPassName(deal.get("passName").toString());
		rcpt.setRcemail(deal.get("rcemail").toString());
		rcpt.setCrtmem("LEJ");
		rcpt.setCrtdt(sdf.format(date));
		remitMapper.insertRCPT(rcpt);
		
		fee.setBsdate(sdf.format(date));
		fee.setMtcn(mtcn);
		fee.setCno(deal.get("cno").toString()); 
		fee.setCrtmem(deal.get("crtmem").toString()); //yhm수정
		fee.setCrtdt(sdf.format(date)); 
		fee.setFeeAmnt(deal.get("fee").toString());
		remitMapper.insertFee(fee);
	}
	
	@Transactional
	public void insertExch(HashMap<String, Object> deal) {
		String mtcn = CharUtil.excuteGenerate();
		Date date = new Date();
		//거래,acctNo
		trd.setBsdate(sdf.format(date));
		trd.setMtcn(mtcn);
		trd.setCno(deal.get("cno").toString());
		trd.setTrdStatCd(deal.get("trdStatCd").toString());  //1.입금 2.출금
		trd.setTrdTypeCd(deal.get("trdTypeCd").toString());  //1.송금 2.환전
		trd.setChngCausCd("1");
		trd.setTrdRcv(deal.get("trdrcv").toString());
		trd.setTrdSnd(deal.get("trdsnd").toString());
		trd.setCntcd(deal.get("cntcd").toString());
		trd.setExrate(deal.get("exrate").toString());
		trd.setCrtmem(deal.get("crtmem").toString()); //yhm수정
		trd.setCrtdt(sdf.format(date));
		remitMapper.insertTRD(trd);
		
		//거래내역,acctNo
		trdhr.setBsdate(sdf.format(date));
		trdhr.setMtcn(mtcn);
		trdhr.setCno(deal.get("cno").toString());
		trdhr.setTrdStatCd(deal.get("trdStatCd").toString());  //1.입금 2.출금
		trdhr.setTrdTypeCd(deal.get("trdTypeCd").toString());  //1.송금 2.환전
		trdhr.setChngCausCd("1");
		trdhr.setTrdRcv(deal.get("trdrcv").toString());
		trdhr.setTrdSnd(deal.get("trdsnd").toString());
		trdhr.setCntcd(deal.get("cntcd").toString());
		trdhr.setExrate(deal.get("exrate").toString());
		trdhr.setCrtmem(deal.get("crtmem").toString()); //yhm수정
		trdhr.setCrtdt(sdf.format(date));
		remitMapper.insertTRDHR(trdhr);
		
		//수취
		rcpt.setBsdate(sdf.format(date));
		rcpt.setMtcn(mtcn);
		rcpt.setCno(deal.get("cno").toString());
		rcpt.setRcp(0); //0 미수취 1수취
		rcpt.setCntp(deal.get("cntp").toString()); 
		rcpt.setPassName(deal.get("passName").toString());
		rcpt.setRcemail(deal.get("rcemail").toString());
		rcpt.setCrtmem("LEJ");
		rcpt.setCrtdt(sdf.format(date));
		remitMapper.insertRCPT(rcpt);
		
		//수수료 fee.setBsdate(sdf.format(date)); fee.setMtcn(mtcn);
		fee.setBsdate(sdf.format(date));
		fee.setMtcn(mtcn);
		fee.setCno(deal.get("cno").toString()); 
		fee.setCrtmem(deal.get("crtmem").toString()); //yhm수정
		fee.setCrtdt(sdf.format(date)); 
		fee.setFeeAmnt(deal.get("fee").toString());
		
		remitMapper.insertFee(fee);
	}

}

package com.moneyhub.web.remit.util;

/* 라이브러리와 친해지기 */
public class colLibrary {

	public static String colEngNm(String Str) {

		String KorNm = "기준\r\n" + "일자\r\n" + "거래\r\n" + "일련\r\n" + "번호\r\n"
				+ "고객\r\n" + "순번\r\n" + "종류\r\n" + "코드\r\n" + "상태\r\n"
				+ "변경\r\n" + "사유\r\n" + "계좌\r\n" + "국가\r\n" + "환율\r\n"
				+ "생성\r\n" + "아이디\r\n" + "수정\r\n" + "수수료\r\n" + "상세\r\n"
				+ "금액\r\n" + "수취\r\n" + "여부\r\n" + "여권\r\n" + "이름\r\n"
				+ "장소\r\n" + "이메일\r\n" + "비밀\r\n" + "가입\r\n" + "탈퇴\r\n"
				+ "은행\r\n" + "비고\r\n" + "관리자\r\n" + "권한\r\n" + "제목\r\n"
				+ "내용\r\n";
		String EngNm = "BASE\r\n" + "DT\r\n" + "DEAL\r\n" + "SEAL\r\n"
				+ "NO\r\n" + "CUS\r\n" + "SEQ\r\n" + "KND\r\n" + "CD\r\n"
				+ "STAT\r\n" + "CHNG\r\n" + "CAUS\r\n" + "ACCT\r\n" + "NTN\r\n"
				+ "ECRT\r\n" + "CRT\r\n" + "ID\r\n" + "UPDT\r\n" + "FEE\r\n"
				+ "DTL\r\n" + "AMT\r\n" + "RCV\r\n" + "YN\r\n" + "PSPT\r\n"
				+ "NM\r\n" + "PLC\r\n" + "EML\r\n" + "PSWD\r\n" + "JN\r\n"
				+ "WDRL\r\n" + "BNK\r\n" + "RMT\r\n" + "ADM\r\n" + "JSDT\r\n"
				+ "TTL\r\n" + "CON\r\n";
		
		String[] KorNms = KorNm.split("\r\n");
		String[] EngNms = EngNm.split("\r\n");
		
		String[] data = Str.split("_");
		String result = "";
		for(int i = 0 ; i < data.length ; i++){
			   for(int j = 0; j < KorNms.length; j++){
				    if(KorNms[j].equals(data[i])){
				    	if(data.length == i + 1){
				    		result += EngNms[j];
				    	}else{
				    		result += EngNms[j]+"_";
				    	}
				    	break;
				    }
				    if(KorNms.length == j + 1){
				    	return "존재하지않는 단어가 존재합니다. : "+ data[i] ;
				    }
			   }
		}
		
		return result;
	}
}

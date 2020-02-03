package com.moneyhub.web.cus;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class CustAccount {
	public void CreateAccount() {
		
		int accountSize = 12;
		
		SimpleDateFormat dateFormat = new SimpleDateFormat("YY-MM-dd");//날짜
		Date date = new Date();
		String nowDate = dateFormat.format(date);
		System.out.println("nowDate1: "+nowDate);
		nowDate = nowDate.substring(0, 5);
		
		final char[] possibleCharacters =
		    {'1','2','3','4','5','6','7','8','9','0'};
		
		final int possibleCharacterCount = possibleCharacters.length;
		  String[] arr = new String[accountSize];
		  Random ran = new Random();
		  int currentIndex = 0;
		  int i = 0;
		  while (currentIndex < accountSize) {
		   StringBuffer buf = new StringBuffer(12);
		   //i는 8자리의 랜덤값을 의미
		   for (i= 8; i > 0; i--) {
		    buf.append(possibleCharacters[ran.nextInt(possibleCharacterCount)]);
		   }
		   String couponnum = buf.toString();
		   System.out.println("couponnum==>"+couponnum);   
		   arr[currentIndex] = couponnum;
		   currentIndex++;
		  }
		  
		  
	}
}

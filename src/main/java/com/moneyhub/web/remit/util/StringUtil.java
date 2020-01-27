package com.moneyhub.web.remit.util;

import java.util.List;

public class StringUtil {
	public static boolean distinctChk(int []  four,List<Integer> ten,int num){  //어떤 형식이던 중복체크 내가 쓸 파라미터 명을 지정안해놓고 쓰는법?, 
		boolean flag = false;
		for (int j = 0; j < ten.size(); j++) {
			if (num == ten.get(j)) {
				flag = true;
			}
		}
		for (int j = 0; j < four.length; j++) {
			if (num == four[j]) {
				flag = true;
			}
		}
		return flag;
	}
	
	public static String camelChg(String str){
		
		boolean flag =false;
		String[] arr = str.split("");
		String result = "";
		for(int i = 0; i<arr.length; i++){
			if("_".equals(arr[i])){
				flag = true;
			}else{
				if(flag){
					result += arr[i].toUpperCase();
				} else{
					result += arr[i].toLowerCase();
				}
				flag = false;
			}
		}
		return result;
	}
}

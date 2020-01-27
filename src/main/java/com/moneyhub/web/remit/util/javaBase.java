package com.moneyhub.web.remit.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/*java 기본문법과 친해지기*/
public class javaBase {
	
	public static void main(String[] args) {
		Random ran = new Random();
		int num;
		
		boolean flag;
		int[] four = new int[4];
		List<Integer> ten = new ArrayList<Integer>();
		
		for (int i = 0; i < four.length; i++) {
			while (true) {
				num = ran.nextInt(15);
				flag = StringUtil.distinctChk(four, ten, num);
				if (!flag) {
					four[i] = num;
					break;
				}
			}
			System.out.println("1등 : " + four[i]);
		}
		
		for (int i = 0; i < 10; i++) {
			num = ran.nextInt(15);
			flag = StringUtil.distinctChk(four, ten, num);
			if (flag) {
				i--;
			} else {
				ten.add(num);
			}
		}
		for (int i = 0; i < ten.size(); i++) {
			System.out.println("2 등" + ten.get(i));
		}
	}

}
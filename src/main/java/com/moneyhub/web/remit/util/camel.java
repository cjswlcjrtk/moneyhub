package com.moneyhub.web.remit.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class camel {
		/*  마곡엠밸리 1103호 CUS_NM  */
		public static void main(String[] args) {
				List<Map<String, Object>> data = new ArrayList<Map<String ,Object>>();
				Map<String,Object>  param = new HashMap<String ,Object>(); // 마곡엠밸리 1103호 CUS_ID 
				param.put("data", "CUS_ID");
				data.add(param);
				param = new HashMap<String ,Object>(); // 마곡엠밸리 110호  CUS_NM
				param.put("data", "CUS_NM");
				data.add(param);
				
				//{ {data : CUS_ID , data2: CUS_ID2 }, {data : CUS_NM} }
				//{ 마곡엠밸리주소 ,마곡엠밸리주소}
				List<String> result = new ArrayList<String>();
				for(int i = 0; i < data.size();i++){
					result.add(StringUtil.camelChg(data.get(i).toString()));
				}
				System.out.println(result );
				
				//System.out.println( StringUtil.camelChg(data) );
		}
}

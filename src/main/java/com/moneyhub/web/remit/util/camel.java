package com.moneyhub.web.remit.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class camel {
		public static void main(String[] args) {
				List<Map<String, Object>> data = new ArrayList<Map<String ,Object>>();
				Map<String,Object>  param = new HashMap<String ,Object>();
				param.put("data", "CUS_ID");
				data.add(param);
				param = new HashMap<String ,Object>();
				param.put("data", "CUS_NM");
				data.add(param);
				
				List<String> result = new ArrayList<String>();
				for(int i = 0; i < data.size();i++){
					result.add(StringUtil.camelChg(data.get(i).toString()));
				}
		}
}

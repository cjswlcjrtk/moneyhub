package com.moneyhub.web.crudtable;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Lazy
@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class CRUDFeeDB {

	private String  seq,
					sdate,
					feetypcd,
					amnt;		// feetypcd 1은 3천달러미만 2는 3천달러 이상

}

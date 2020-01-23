package com.moneyhub.web.crudtable;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.moneyhub.web.crudtable.CRUDCustomer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Lazy
@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class CRUDFeeDB {

	private String seq,
					bdate,
					cusnum,
					txseq,
					feetypcd,
					feedtlcd,
					amnt,
					crtmen,
					crtdate,
					umem,
					udate;

}

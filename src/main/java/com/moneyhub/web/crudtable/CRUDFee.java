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
public class CRUDFee {

	private String bsdate,
					mtcn,
					cno,
					seq,
					fee_stat_cd,
					fee_amnt,
					crtmen,
					crtdt,
					upmen,
					updt;

}

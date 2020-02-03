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
public class CRUDAdmin {

	private String  aid,
					amail,
					pwd;		// 나이 ==> 생년월일로 변경 예정

}

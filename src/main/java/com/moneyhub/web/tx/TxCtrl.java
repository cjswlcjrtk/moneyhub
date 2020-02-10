package com.moneyhub.web.tx;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.pxy.Box;

@RestController
@RequestMapping("/tx")
public class TxCtrl {
	
	@Autowired TxService txService;
	@Autowired Box<Object> box;
}

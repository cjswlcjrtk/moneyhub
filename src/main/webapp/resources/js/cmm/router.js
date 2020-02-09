"use strict"
function Session(x){	
	let exrate = {}
	sessionStorage.setItem('ctx', x);
	sessionStorage.setItem('js', x + '/resources/js');
	sessionStorage.setItem('css', x + '/resources/css');
	sessionStorage.setItem('img', x + '/resources/img');
	sessionStorage.setItem('jsp',x +'/resources/jsp');
	var deal = new Object() // 송금 객체
	sessionStorage.setItem('deal',JSON.stringify(deal));
	

	return{
		ctx : ()=>{ return sessionStorage.getItem('ctx');},
		js : ()=>{ return sessionStorage.getItem('js');},
		css : ()=>{ return sessionStorage.getItem('css');},
		img : ()=>{ return sessionStorage.getItem('img');},
		jsp : ()=>{return sessionStorage.getItem('jsp');},
		deal : ()=>{return JSON.parse(sessionStorage.getItem('deal'))},
		cusInfo : ()=>{return JSON.parse(sessionStorage.getItem('cus'))},
		exrate : ()=>{ return JSON.parse(sessionStorage.getItem('exrate'))}
	}
}
function Customer_Info(x){
	sessionStorage.setItem('cemail', x.cemail)
	sessionStorage.setItem('cname', x.cname)
	
	return{
		cemail : ()=>{ return sessionStorage.getItem('cemail') },
		cname : ()=>{ return sessionStorage.getItem('cname') }
	}
}

function Clock(){
	let date = new Date();
	return{
		year : date.getFullYear(),
		month : date.getMonth(),
		clockDate : date.getDate(),
		day : date.getDay(),
		hours : date.getHours(),
		minutes : date.getMinutes(),
		seconds : date.getSeconds()
	}
}

function Remit_send(){
	let send = $('.form-calculator .amount-row input.send-amount')
	let send_value = comma_create(send.val().replace(/,/gi, ''))	
	alert('Remit_send')
	send.val(send_value)
}
"use strict"
function Session(x){	
	sessionStorage.setItem('ctx', x);
	sessionStorage.setItem('js', x + '/resources/js');
	sessionStorage.setItem('css', x + '/resources/css');
	sessionStorage.setItem('img', x + '/resources/img');
	sessionStorage.setItem('jsp',x +'/resources/jsp');
	var deal = {} // 송금 객체
	sessionStorage.setItem('deal',JSON.stringify(deal));
	var exch = {} // 환전 객체
	sessionStorage.setItem('exch',JSON.stringify(exch));
	var acc = {} //계좌 정보
	sessionStorage.setItem('acc',JSON.stringify(acc));
	var accHis = {}
	sessionStorage.setItem('accHis',JSON.stringify(accHis));
	return{
		ctx : ()=>{ return sessionStorage.getItem('ctx');},
		js : ()=>{ return sessionStorage.getItem('js');},
		css : ()=>{ return sessionStorage.getItem('css');},
		img : ()=>{ return sessionStorage.getItem('img');},
		jsp : ()=>{return sessionStorage.getItem('jsp');},
		deal : ()=>{return JSON.parse(sessionStorage.getItem('deal'))},
		cusInfo : ()=>{return JSON.parse(sessionStorage.getItem('cus'))},
		exrateSess : ()=>{ return JSON.parse(sessionStorage.getItem('exrateSess'))},
		profitsChart : ()=>{ return JSON.parse(sessionStorage.getItem('profitsChart'))},
		chartFlag : ()=>{ return sessionStorage.getItem('chartFlag') },
		holidays : ()=>{ return JSON.parse(localStorage.getItem('holidays'))},
		money : ()=>{ return JSON.parse(sessionStorage.getItem('money'))},
		account : ()=>{ return JSON.parse(sessionStorage.getItem('account'))},
		money : ()=>{ return JSON.parse(sessionStorage.getItem('money'))},
		acc : ()=>{ return JSON.parse(sessionStorage.getItem('acc'))},
		accHis : ()=>{ return JSON.parse(sessionStorage.getItem('accHis'))},
		exch : ()=>{ return JSON.parse(sessionStorage.getItem('exch'))},
		exchangeCount : ()=>{ return sessionStorage.getItem('exchangeCount') },
		exrateFlag : ()=>{ return sessionStorage.getItem('exrateFlag') }
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

/*function Remit_send(){
	let send = $('.form-calculator .amount-row input.send-amount')
	let send_value = comma_create(send.val().replace(/,/gi, ''))	
	alert('Remit_send')
	send.val(send_value)
}*/
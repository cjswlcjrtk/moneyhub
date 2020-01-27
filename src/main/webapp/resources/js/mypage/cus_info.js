"use strict"
var cus_info = cus_info || {}
cus_info =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, nav_vue_js, mypage_vue_js, cookie_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		cookie_js = js + '/cmm/cookie.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(cookie_js)
		)
		.done(()=>{
			setContentView()
			
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('#root div.mypage')
		.html(mypage_vue.cus_info())
		$.getJSON(_+'/customers/cusInfo/' + $('#cemail').val(), d=>{
			cemail : sessionStorage.getItem('CEMAIL')
			zip : sessionStorage.setItem('ZIP', d.cus.zip)
			addr : sessionStorage.setItem('ADDR', d.cus.addr)
			daddr : sessionStorage.setItem('DADDR', d.cus.daddr)
			$('#infoEmail').text(d.cus.cemail)
			$('#infoName').text(d.cus.cname)
			$('#infoZip').text(d.cus.zip)
			$('#infoAddr').text(d.cus.addr)
			$('#infoAddr2').text(d.cus.daddr)
			$('#infoBirth').text(d.cus.birth)
		})
	
		$('<button/>')
			.text('정보수정하기')
			.addClass('next')
			.css({ 'margin-bottom' : '40px' })
			.appendTo('.themoin-mypage-profile')
			.click(()=>{
				cus_info_chg.onCreate()
			})
	}
		
	return { onCreate }
})()
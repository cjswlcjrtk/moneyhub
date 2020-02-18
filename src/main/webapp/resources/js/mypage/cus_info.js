"use strict"
var cus_info = cus_info || {}
cus_info =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, nav_vue_js, mypage_vue_js, cookie_js, cus
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cus = $.cusInfo()
		mypage_vue_js = js + '/vue/mypage_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js)
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

		let cus = $.cusInfo()
		$('#infoEmail').text(cus.cemail)
		$('#infoName').text(cus.cname)
		$('#infoZip').text(cus.zip)
		$('#infoAddr').text(cus.addr)
		$('#infoAddr2').text(cus.daddr)
		$('#infoBirth').text(cus.birth)
		
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
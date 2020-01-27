"use strict"
var adminLogin = adminLogin || {}
adminLogin =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, adminLogin_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		adminLogin_vue_js = js + '/admin_vue/adminLogin_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(adminLogin_vue_js)
		)
		.done(()=>{
			setContentView()
			
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		alert('aaaa')
		$(login_vue.login()).appendTo('head')
		$('body').html(login_vue.login())	
		alert('bbb')
	}	
	
	return { onCreate }
})()
"use strict"
var buttons = buttons || {}
buttons =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, buttons_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		buttons_vue_js = js + '/admin_vue/buttons_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(buttons_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$(buttons_vue.buttons_head()).appendTo('head')
		$('body').html(buttons_vue.buttons_body())
	}	
	
	return { onCreate }
})()
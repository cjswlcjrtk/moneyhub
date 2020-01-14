"use strict"
var qna = qna || {}
qna =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, qna_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		qna_vue_js = js + '/admin_vue/qna_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(qna_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$(qna_vue.qna_head()).appendTo('head')
		$(qna_vue.qna_body()).appendTo('div.container-fluid')
	}	
	
	return { onCreate }
})()
"use strict"
var transactionChart = transactionChart || {}
transactionChart =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, transactionChart_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		transactionChart_vue_js = js + '/admin_vue/transactionChart_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(transactionChart_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$(transactionChart_vue.transactionChart_head()).appendTo('head')
		$(transactionChart_vue.transactionChart_body()).appendTo('div.container-fluid')
	}	
	
	return { onCreate }
})()
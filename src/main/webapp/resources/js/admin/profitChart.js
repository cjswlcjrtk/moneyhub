"use strict"
var profitChart = profitChart || {}
profitChart =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, profitChart_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		profitChart_vue_js = js + '/admin_vue/profitChart_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(profitChart_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$(profitChart_vue.profitChart_head()).appendTo('head')
		$(profitChart_vue.profitChart_body()).appendTo('div.container-fluid')
	}	
	
	return { onCreate }
})()
"use strict"
var simulateChart = simulateChart || {}
simulateChart =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, simulateChart_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		simulateChart_vue_js = js + '/admin_vue/simulateChart_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(simulateChart_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$(simulateChart_vue.simulateChart_head()).appendTo('head')
		$(simulateChart_vue.simulateChart_body()).appendTo('div.container-fluid')
	}	
	
	return { onCreate }
})()
"use strict"
var membersChart = membersChart || {}
membersChart =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, membersChart_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		membersChart_vue_js = js + '/admin_vue/membersChart_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(membersChart_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$(membersChart_vue.membersChart_head()).appendTo('head')
		$(membersChart_vue.membersChart_body()).appendTo('div.container-fluid')
	}	
	
	return { onCreate }
})()
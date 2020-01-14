"use strict"
var members = members || {}
members =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, tables_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		tables_vue_js = js + '/admin_vue/tables_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(tables_vue_js)
		)
		.done(()=>{
			setContentView()
			alert('aaaaa')
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$(tables_vue.tables_head()).appendTo('head')
		$(tables_vue.tables_body()).appendTo('div.container-fluid')
//		$('body').html(tables_vue.tables_body())
	}	
	
	return { onCreate }
})()
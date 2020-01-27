"use strict"
var guide_recieve = guide_recieve || {}
guide_recieve =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, img, guide_vue_js, main_class
	
	let init =x=>{
		_ = $.ctx()
		js = $.js()
		img = $.img()
		guide_vue_js = js + '/vue/guide_vue.js'
		main_class = x
	}
	let onCreate =x=>{
		init(x)
		$.when(
			$.getScript(guide_vue_js)
		)
		.done(()=>{
			setContentView(x)
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('.' + main_class)
		.html(guide_vue.wu_recieve(img))
		$('html').scrollTop(0);
	}
	
	return { onCreate }
})()
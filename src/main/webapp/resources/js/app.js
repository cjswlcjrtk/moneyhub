"use strict"
var app = app || {}
app =(()=>{
	const WHEN_ERR = '0 - js파일을 찾지 못했습니다.'
	let _, js, img, cmm_vue_js, nav_vue_js, main_vue_js, 
		auth_js, compo_js, event_js, faq_js, main_class,
		tables_mgmt_js
	
	let run =x=>{
		$.getScript( x + '/resources/js/cmm/router.js', ()=>{
			$.extend(new Session(x))
			init()
			onCreate()
		})
	}
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		img = $.img()
		cmm_vue_js = js + '/vue/cmm_vue.js'
		nav_vue_js = js + '/vue/nav_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		auth_js = js + '/cmm/auth.js'
		compo_js = js + '/cmm/compo.js'
		event_js = js + '/cmm/event.js'
		faq_js = js + '/cmm/faq.js'
		main_class = 'themoin-landing'
		tables_mgmt_js =  js + '/tables/tables_mgmt.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cmm_vue_js),
			$.getScript(nav_vue_js),
			$.getScript(main_vue_js),
			$.getScript(auth_js),
			$.getScript(compo_js),
			$.getScript(event_js),
			$.getScript(faq_js),
			$.getScript(tables_mgmt_js)
		)
		.done(()=>{
			setContentView()
			page_move()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('head')
		.html(cmm_vue.head())

		$('#root')
		.html(nav_vue.nav(_))
		.append(main_vue.main())
		.append(cmm_vue.footer())
		
		$('<button/>')
		.text('송금하기')
		.addClass('index-send-btn moin-body')
		.appendTo('#remit_box')
		.click(()=>{
			auth.onCreate('login')
		})
	}
	
	let page_move =()=>{
		$('#join')
		.click(()=>{
			auth.onCreate('join')
		})
		
		$('#login')
		.click(()=>{
			auth.onCreate('login')
		})
		
		$('#tables_mgmt_a')
		.click(()=>{
			tables_mgmt.onCreate()
		})
		$('#admin_login')
		.click(()=>{
			adminIndex.onCreate('admin_login')
		})
		
		$('#compo')
		.click(()=>{
			compo.onCreate(main_class)
		})
		
		$('#event')
		.click(()=>{
			event.onCreate(main_class)
		})
		
		$('#faq')
		.click(()=>{
			faq.onCreate(main_class)
		})
		
		$('.themoin-header a.logo')
		.click(()=>{
			app.onCreate()
			$('html').scrollTop(0);
		})
		
	}
	
	return { run, onCreate }
})()
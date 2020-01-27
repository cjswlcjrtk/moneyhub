"use strict"
var app = app || {}
app =(()=>{
	const WHEN_ERR = '0 - js파일을 찾지 못했습니다.'
	
	let _, js, img, cmm_vue_js, nav_vue_js, main_vue_js, 
		auth_js, compo_js, event_js, faq_js, main_class,
		tables_mgmt_js,remit_popup_js,guide_recieve_js, remit_box_js
	
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
		guide_recieve_js = js + '/cmm/guide_recieve.js'
		main_class = 'themoin-landing'
		tables_mgmt_js =  js + '/tables/tables_mgmt.js' 
		remit_popup_js = js + '/remit/remit_popup.js'
		remit_box_js = js + '/mypage/remit_box.js'
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
			$.getScript(tables_mgmt_js),
			$.getScript(remit_popup_js),
			$.getScript(guide_recieve_js),
			$.getScript(remit_box_js)
		)
		.done(()=>{
			//============================================================= 송금 개발용
			/*auth.onCreate('login')*/
			//=============================================================
			setContentView()
			page_move()
			remit_box.onCreate('')
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('head')
		.append(cmm_vue.head())
		$('#root')
		.html(nav_vue.nav(_))
		.append(main_vue.main())
		.append(cmm_vue.footer())
		//================================================================= EJ
		/*if($.cusInfo() != null && $.cusInfo() != ''){ //세션 정보로 메인 화면 구분 -> 새로고침 찾아서 적용할 것
			alert('로그인된 세션'+$.cusInfo())
			$('#root')
			.html(nav_vue.logined_nav(_))
			.append(main_vue.logined_main())
		}else{
			alert('로그인 전  세션'+$.cusInfo())
			$('#root')
			.html(nav_vue.nav(_))
			.append(main_vue.main())
		}
		$('#root').append(cmm_vue.footer())*/
		//========================================================새로고침시 세션비우기 (연구중) EJ
		/*function Reload(){
			if(event.keyCode == 116)
				sessionStorage.clear()
		}
		document.onkeydown = Reload;*/
		//=========================================================
		
		$('#popup-root')
		.html(main_vue.cntcd_popup())
		.hide()
	/*	
		$('.unit-select receive')
		.click(()=>{
			$('#root')
			.append(remit_popup.nation())
		})*/
		
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
		
		$('#guide')
		.click(()=>{
			guide_recieve.onCreate(main_class)
		})
		
		$('.themoin-header a.logo')
		.click(()=>{
			app.onCreate()
			$('html').scrollTop(0);
		})
		
	}

	return { run, onCreate }
})()
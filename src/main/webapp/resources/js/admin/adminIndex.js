"use strict"
var adminIndex = adminIndex || {}
adminIndex =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, adminIndex_vue_js, members_js
		,fee_js, exchangeDB_js, simulateChart_js
		, qna_js, adminIndexHome_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		adminIndex_vue_js = js + '/admin_vue/adminIndex_vue.js'
		members_js = js + '/admin/members.js'
		fee_js = js + '/admin/fee.js'
		exchangeDB_js = js + '/admin/exchangeDB.js'
		simulateChart_js = js + '/admin/simulateChart.js'
		qna_js = js + '/admin/qna.js'
		adminIndexHome_vue_js = js + '/admin_vue/adminIndexHome_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(adminIndex_vue_js),
			$.getScript(members_js),
			$.getScript(fee_js),
			$.getScript(exchangeDB_js),
			$.getScript(simulateChart_js),
			$.getScript(qna_js),
			$.getScript(adminIndexHome_vue_js)
		)
		.done(()=>{
			setContentView()
			
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('head').empty()
		$(adminIndex_vue.main_head()).appendTo('head')
		$('body').html(adminIndex_vue.main_body())			
		leftMenuEvent()
	}	
	
	let leftMenuEvent = () => {
		$('#adminHome').click(()=>{
			$('div.container-fluid').empty()
			$('head').empty()
			$('div.container').empty()
			$(adminIndexHome_vue.home_head()).appendTo('head')
			$('div.container-fluid').html(adminIndexHome_vue.home_body())
		})
		$('#members').click(()=>{
			$('div.container-fluid').empty()
			$('head').empty()
			$('div.container').empty()
			members.onCreate()
		})
		$('#fee').click(e=>{
			e.preventDefault()
			$('div.container-fluid').empty()
			$('head').empty()
			$('div.container').empty()
			fee.onCreate()
		})
		$('#exchangeDB').click(()=>{
			$('div.container-fluid').empty()
			$('head').empty()
			$('div.container').empty()
			exchangeDB.onCreate()
		})
		$('#simulateChart').click(()=>{
			$('div.container-fluid').empty()
			$('head').empty()
			$('div.container').empty()
			simulateChart.onCreate()
		})
	}
	
	
	return { onCreate }
})()
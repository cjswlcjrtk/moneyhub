"use strict"
var adminIndex = adminIndex || {}
adminIndex =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, adminIndex_vue_js, members_js
		,membersChart_js, transactionChart_js, profitChart_js
		, qna_js, adminIndexHome_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		adminIndex_vue_js = js + '/admin_vue/adminIndex_vue.js'
		members_js = js + '/admin/members.js'
		membersChart_js = js + '/admin/membersChart.js'
		transactionChart_js = js + '/admin/transactionChart.js'
		profitChart_js = js + '/admin/profitChart.js'
		qna_js = js + '/admin/qna.js'
		adminIndexHome_vue_js = js + '/admin_vue/adminIndexHome_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(adminIndex_vue_js),
			$.getScript(members_js),
			$.getScript(membersChart_js),
			$.getScript(transactionChart_js),
			$.getScript(profitChart_js),
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
		alert('aaaa')
		$(adminIndex_vue.main_head()).appendTo('head')
		$('body').html(adminIndex_vue.main_body())			
		leftMenuEvent()
	}	
	
	let leftMenuEvent = () => {
		$('#adminHome').click(()=>{
			alert('adminHome')			
			$('div.container-fluid').empty()
			$('div.container-fluid').html(adminIndexHome_vue.home_body())
		})
		$('#members').click(()=>{
			alert('members')			
			$('div.container-fluid').empty()
			members.onCreate()
		})
		$('#membersChart').click(e=>{
			alert('membersChart')	
			e.preventDefault()
			$('div.container-fluid').empty()
			membersChart.onCreate()
		})
		$('#transactionChart').click(()=>{
			alert('transactionChart')			
			$('div.container-fluid').empty()
			transactionChart.onCreate()
		})
		$('#profitChart').click(()=>{
			alert('profitChart')			
			$('div.container-fluid').empty()
			profitChart.onCreate()
		})
//		$('#qna').click(()=>{
//			alert('qna')			
//			$('div.container-fluid').empty()
//			qna.onCreate()
//		})
	}
	
	
	return { onCreate }
})()
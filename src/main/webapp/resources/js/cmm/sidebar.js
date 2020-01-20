"use strict"
var sidebar = sidebar || {}
sidebar = (()=>{
	let _, js, nav_vue_js, exchange_test_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		nav_vue_js = js + '/vue/nav_vue.js'
		exchange_test_js = js + '/vue/nav_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(nav_vue_js)
		)
		.done(()=>{
			setContentView()
			mypage_move()
		})
		.fail(()=>{
			alert()
		})
	}
	let setContentView =()=>{
		$('#root div.themoin-main')
		.html(nav_vue.sidebar_cus())
		cus_info.onCreate()
	}
	
	let mypage_move =()=>{
		$('#cus_info')
		.click(function(){
			var tab_id = $(this).attr('data-tab')
			$(this).addClass('active')
			$("#"+tab_id).addClass('active')
			$('#pwd_chg').removeClass('active')
			$('#auth_mgmt').removeClass('active')
			$('#alarm').removeClass('active')
			$('#ref_mgmt').removeClass('active')
			$('#withdrawal').removeClass('active')
			$('#exchange_test').removeClass('active')
			
			cus_info.onCreate()
			
		})
		
		$('#pwd_chg')
		.click(function(){
			var tab_id = $(this).attr('data-tab')
			$(this).addClass('active')
			$("#"+tab_id).addClass('active')
			$('#cus_info').removeClass('active')
			$('#auth_mgmt').removeClass('active')
			$('#alarm').removeClass('active')
			$('#ref_mgmt').removeClass('active')
			$('#withdrawal').removeClass('active')
			$('#exchange_test').removeClass('active')
			
			pwd_chg.onCreate()
			
		})
		
		$('#auth_mgmt')
		.click(function(){
			var tab_id = $(this).attr('data-tab')
			$(this).addClass('active')
			$("#"+tab_id).addClass('active')
			$('#cus_info').removeClass('active')
			$('#pwd_chg').removeClass('active')
			$('#alarm').removeClass('active')
			$('#ref_mgmt').removeClass('active')
			$('#withdrawal').removeClass('active')
			$('#exchange_test').removeClass('active')
			
			auth_mgmt.onCreate()
			
		})
		
		$('#alarm')
		.click(function(){
			var tab_id = $(this).attr('data-tab')
			$('#alarm').removeClass('active')
			$('themoin-mypage-profile').removeClass('active')
			$(this).addClass('active')
			$("#"+tab_id).addClass('active')
			$('#cus_info').removeClass('active')
			$('#pwd_chg').removeClass('active')
			$('#auth_mgmt').removeClass('active')
			$('#ref_mgmt').removeClass('active')
			$('#withdrawal').removeClass('active')
			$('#exchange_test').removeClass('active')
			
			alarm.onCreate()
			
		})
		
		$('#ref_mgmt')
		.click(function(){
			var tab_id = $(this).attr('data-tab')
			$('#ref_mgmt').removeClass('active')
			$('themoin-mypage-profile').removeClass('active')
			$(this).addClass('active')
			$("#"+tab_id).addClass('active')
			$('#cus_info').removeClass('active')
			$('#pwd_chg').removeClass('active')
			$('#auth_mgmt').removeClass('active')
			$('#alarm').removeClass('active')
			$('#withdrawal').removeClass('active')
			$('#exchange_test').removeClass('active')
			
			ref_mgmt.onCreate()
			
		})
		
		$('#withdrawal')
		.click(function(){
			var tab_id = $(this).attr('data-tab')
			$('#withdrawal').removeClass('active')
			$('themoin-mypage-profile').removeClass('active')
			$(this).addClass('active')
			$("#"+tab_id).addClass('active')
			$('#cus_info').removeClass('active')
			$('#pwd_chg').removeClass('active')
			$('#auth_mgmt').removeClass('active')
			$('#alarm').removeClass('active')
			$('#ref_mgmt').removeClass('active')
			$('#exchange_test').removeClass('active')
			
			withdrawal.onCreate()
			
		})
		
		$('#exchange_test')
		.click(function(){
			var tab_id = $(this).attr('data-tab')
			$('#exchange_test').removeClass('active')
			$('themoin-mypage-profile').removeClass('active')
			$(this).addClass('active')
			$("#"+tab_id).addClass('active')
			$('#cus_info').removeClass('active')
			$('#pwd_chg').removeClass('active')
			$('#auth_mgmt').removeClass('active')
			$('#alarm').removeClass('active')
			$('#ref_mgmt').removeClass('active')
			$('#withdrawal').removeClass('active')
			
			exchange_test.onCreate()
			
		})
	}
	return { onCreate }
})()
"use strict"
var sidebar = sidebar || {}
sidebar = (()=>{
	let _, js, nav_vue_js, exchange_test_js, page_flag
	let init =x=>{
		_ = $.ctx()
		js = $.js()
		nav_vue_js = js + '/vue/nav_vue.js'
		exchange_test_js = js + '/mypage/exchange_test.js'
		page_flag = x
	}
	let onCreate =x=>{
		init(x)
		$.when(
			$.getScript(nav_vue_js)
		)
		.done(()=>{
			setContentView()
			mypage_move(x)
			$('#mypageId').text($.cusInfo().cemail)
			init_page(x)
		})
		.fail(()=>{
			alert('시스템 확인 중입니다.')
		})
	}
	
	let setContentView =()=>{
		$('#root div.themoin-main')
		.html(nav_vue.sidebar_cus())
	}
	
	let init_page =(x)=>{
		if(x == 'account'){ 
			account.onCreate()
			$('#account').attr('class', 'active')
			$('#account').siblings().not('div.spacer').attr('class', '')

		}else{
			cus_info.onCreate()
		}
	}
	
	let mypage_move =x=>{

		let data = [{ id : 'cus_info', 		className : 'active',	tabNo : 1, title : '회원 정보'		},
					{ id : 'pwd_chg', 		className : '', 		tabNo : 2, title : '비밀번호 변경'	},
					{ id : 'account', 	className : '', 		tabNo : 3, title : '머니허브 계좌'	},
					{ id : 'withdrawal',	className : '', 		tabNo : 6, title : '회원 탈퇴'		} ]
		$.each(data, (i, j)=>{
			$(`<a id="${j.id}" class="${j.className}" data-tab="tab-${j.tabNo}">${j.title}</a>`)
			.css({'margin-right': '7%', 'padding-top' : '20px'})
			.appendTo('.tab')
			.click(function(e){
				e.preventDefault()
				$(this).attr('class', 'active')
				$(this).siblings().not('div.spacer').attr('class', '')
				
				switch ($(this).attr('id')) {
				case 'cus_info':
					cus_info.onCreate()
					break;
				case 'pwd_chg':
					pwd_chg.onCreate()
					break;
				case 'account':
					account.onCreate()
					break;
				case 'withdrawal':
					withdrawal.onCreate()
					break;
				}
			})
		})

		$('.tab')
		.append(`<div class="spacer"></div> 
				<img src="https://img.themoin.com/public/img/img-man-s.svg">
				<p id="mypageId"></p>`)
		
	}
	return { onCreate }
})()
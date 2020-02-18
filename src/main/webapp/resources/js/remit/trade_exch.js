"use strict"
var trade_Exch = trade_Exch || {}
trade_Exch = (()=>{
	const WHEN_ERR = '레미트 js파일을 찾지 못했습니다.'
	let _,js,auth_js,main_vue_js,remit_vue_js,cookie_js,
		amount,deal,remit_box_js,clock,cus

	let init = ()=>{
		_ = $.ctx()
		js = $.js()
		deal = $.deal()
		cus = $.cusInfo()
		main_vue_js = js + '/vue/main_vue.js'
		auth_js = js + '/cmm/auth.js'
		cookie_js = js + '/cmm/cookie.js'
		remit_vue_js = js + '/remit/remit_vue.js'
 		remit_box_js = js + '/remit/remit_box.js'
	}

	let onCreate =()=>{
		init()
		$.when(
			$.getScript(remit_vue_js),
 			$.getScript(remit_box_js)
		)
		.done(()=>{
			setContentView()
			deal_get()
 			remit_box.onCreate({ flag : 'exchange2', cntcd : '' })
			
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView = ()=>{
		let tradeEx_complete =()=>{
			$('.themoin-main')
			.html(remit_vue.remit_complete())

			sessionStorage.setItem('deal',JSON.stringify(deal))
				$('#main_user_btn').click( e => {
					e.preventDefault()
					deal.trdrcv = null
					mypage.onCreate()
					$('html').scrollTop(0);
				})
			
		}
	}
	
	let tradeEx_complete =()=>{
		$('.themoin-main')
		.html(remit_vue.remit_complete())
		sessionStorage.setItem('deal',JSON.stringify(deal))
			$('#main_user_btn').click( e => {
				e.preventDefault()
				deal.trdrcv = null
				mypage.onCreate()
				$('html').scrollTop(0);
			})
	}
	return {onCreate}
})();
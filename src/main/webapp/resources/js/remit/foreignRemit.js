"use strict"
var foreignRemit = foreignRemit || {}
foreignRemit = (()=>{
	
	const WHEN_ERR = '레미트 js파일을 찾지 못했습니다.'
	let _,js,auth_js,main_vue_js,remit_vue_js,cookie_js,amount,deal,remit_box_js

	let init = ()=>{
		_ = $.ctx()
		js = $.js()
		deal = $.deal()
		main_vue_js = js + '/vue/main_vue.js'
		auth_js = js + '/cmm/auth.js'
		cookie_js = js + '/cmm/cookie.js'
		remit_vue_js = js + '/remit/remit_vue.js'
//		remit_box_js = js + '/mypage/remit_box.js'
	}

	let onCreate =()=>{
		init()
		$.when(
			$.getScript(remit_vue_js)
//			$.getScript(remit_box_js)
		)
		.done(()=>{
		setContentView()
		remit_deal()
		//			remit_box.onCreate('')
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_first())
		$('.themoin-footer').empty()
	}
	
	let remit_deal = ()=>{
		if(deal.amount >= 3000)
		{$('#fee_check').text('12')}
		else {$('#fee_check').text('6')}
		
		$('#sd_amount').keyup(()=>{
			if($('#sd_amount').val() >= 3000)
			{$('#fee_check').text('12')}
			else {$('#fee_check').text('6')}
		})
		
		$('#first_remit_btn').click(()=>{
			deal.amount =  document.getElementById('sd_amount').value //송금액을 바꿨을 때 금액
			deal.fee = document.getElementById('fee_check').innerHTML
			sessionStorage.setItem('deal',JSON.stringify(deal))
			remit_cusInfo()
			})
	}
	let remit_cusInfo =()=>{
		$('.themoin-main')
		.html(remit_vue.remit_cusInfo())
		$('#sec_remit_btn').click(()=>{
				remit_rcpt()
			})
		$('#prev_fs_remit_btn').click(()=>{
			onCreate()
			})
	}
	let remit_rcpt = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_rcpt())
		$('#third_remit_btn').click(()=>{
			deal.rcpsf =  document.getElementById('pass_fnm').value
			deal.rcpsl =  document.getElementById('pass_lnm').value
			deal.rcemail =  document.getElementById('rcpt_email').value
			sessionStorage.setItem('deal',JSON.stringify(deal))
			remit_review()
		})
		$('#prev_sec_remit_btn').click(()=>{
			remit_cusInfo()
			})
	}
	let remit_review = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_review())
		
		$('#complete_remit_btn')
		.click( e => {  //송금액, 수수료, 입금액,수취자 여권이름(성,이름),수취국가, 수취이메일
			e.preventDefault()
			$.ajax({
				url: _+'/remit/insert',
				type : 'POST',
				data : JSON.stringify(deal),
				dataType : 'json',
				contentType :'application/json',
				success : d => {
					alert("ajax성공")
					/*remit_complete()
					$('html').scrollTop(0);*/
				},
				error : e => {
					alert('remit ajax 실패')
				}
			})
		})
	}
	let remit_complete =()=>{
		$('.themoin-main')
		.html(remit_vue.remit_complete())
		$('#main_user_btn').click(()=>{
			mypage.onCreate()
			$('html').scrollTop(0);
		})
	}
	return {onCreate}
})();
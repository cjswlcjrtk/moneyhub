"use strict"
var foreignRemit = foreignRemit || {}
foreignRemit = (()=>{
	
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
// remit_box_js = js + '/remit/remit_box.js'
	}

	let onCreate =()=>{
		init()
		$.when(
			$.getScript(remit_vue_js)
// $.getScript(remit_box_js)
		)
		.done(()=>{
			setContentView()
			remit_deal()
// remit_box.onCreate('')
			window.Remit_send()
			
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_first())
		$('.themoin-footer').empty()
		
		$('#popup-exchange').empty()
		
		common.receive_value_calc(deal.exrate)
		$('.form-calculator .amount-row input.send-amount').keyup(()=>{
			common.receive_value_calc(deal.exrate)
		})
		deal.trdkrw = common.comma_remove($('.form-calculator .amount-row input.send-amount').val())
		alert(deal.trdkrw)
		sessionStorage.setItem('deal',JSON.stringify(deal))

	}
	
	let remit_deal = ()=>{
		if(deal.trdusd >= 3000)
		{$('#fee_check').text('12')}
		else {$('#fee_check').text('6')}
		
		$('#sd_amount').keyup(()=>{
			if($('#sd_amount').val() >= 3000)
			{$('#fee_check').text('12')}
			else {$('#fee_check').text('6')}
		})
		
		$('#first_remit_btn').click(()=>{
			deal.trdusd = $('.form-calculator .amount-row input.send-amount').val().replace(/\,/g, '') // 송금액을
																										// 바꿨을
																										// 때 금액
			alert(deal.trdusd)
			deal.fee = document.getElementById('fee_check').innerHTML
			sessionStorage.setItem('deal',JSON.stringify(deal))
			remit_cusInfo()
			})
	}
	let remit_cusInfo =()=>{
		$('.themoin-main')
		.html(remit_vue.remit_cusInfo(deal))
		$('#sec_remit_btn').click(()=>{
				remit_rcpt()
			})
		$('#prev_fs_remit_btn').click(()=>{
			onCreate()
			})
	}
	let remit_rcpt = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_rcpt(deal))
		$('#third_remit_btn').click(()=>{
			deal.rcpsf =  document.getElementById('pass_fnm').value  // 수취인
																		// 이름
			deal.rcpsl =  document.getElementById('pass_lnm').value	// 수취인 성
			deal.rcemail =  document.getElementById('rcpt_email').value // 수취인
																		// 이메일
			deal.cno = cus.cno
			sessionStorage.setItem('deal',JSON.stringify(deal))
			remit_review()
		})
		$('#prev_sec_remit_btn').click(()=>{
			remit_cusInfo()
			})
	}
	let remit_review = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_review(deal)) 
		
		$('#complete_remit_btn')
		.click( e => {  // 송금액, 수수료, 입금액,수취자 여권이름(성,이름),수취국가, 수취이메일
			e.preventDefault()
			// ======================================화면 작업용 no 에이작스
			/*
			 * remit_complete() $('html').scrollTop(0);
			 */
			// =============================================
			$.ajax({
				url: _+'/remit/insert',
				type : 'POST',
				data : JSON.stringify(deal),
				contentType :'application/json',
				success : () => {
					alert("ajax성공")
					remit_complete()
					$('html').scrollTop(0);
				},
				error : (request,status,error) => {
					alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
			})
		})
	}
	let remit_complete =()=>{
		$('.themoin-main')
		.html(remit_vue.remit_complete(deal))
		setInterval(msg_time, 1000);
		$('#main_user_btn').click(()=>{
			deal.amount = null
			mypage.onCreate()
			$('html').scrollTop(0);
		})
	}
	
	var SetTime = 3599;	
	function msg_time() {
		var msg = `입금 기한 ${Math.floor(SetTime / 60)} : ${(SetTime % 60)}`
		SetTime--;	
		$('#deposit_hour').text(msg)
	}
	
	return {onCreate}
})();
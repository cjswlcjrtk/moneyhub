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
			remit_deal()
 			remit_box.onCreate({ flag : 'remit', cntcd : '' })
//			window.remit_send()
			
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_first())
		$('.themoin-footer').remove()
		$('#popup-exchange').empty()
	}
	
	let remit_deal = ()=>{
		//실시간 환율 연동하기.....
		
		common.remit_send_focusout()
		let send_amount = $('.form-calculator .amount-row input.send-amount')
		
		if(deal.trdusd >= 3000)
		{$('#fee_check').text('12')}
		else {$('#fee_check').text('6')}
		
		common.receive_value_calc(deal.exrate)
		
		$('.form-calculator .amount-row input:text[numberOnly].send-amount').keyup(function(){
			$(this).val($(this).val().replace(/[^0-9]/g,""))
			if($(this).val() >5000) {
				send_amount.val(5000)
				$('#max_amount').text('송금 가능 금액은 5,000$입니다.')
				}
			if(common.comma_remove($(this).val()) >= 3000){
				$('#fee_check').text('12')}
			else {$('#fee_check').text('6')}
			common.receive_value_calc(deal.exrate)
			
		})
		
		$('#first_remit_btn').click(()=>{
			if(send_amount.val()==''){
				alert('송금하실 금액을 입력해 주십시오.')
			}else{
			deal.trdusd = common.comma_remove(send_amount.val())// 송금액을 바꿨을떄 금액
			deal.trdkrw = common.comma_remove($('.form-calculator .amount-row input.receive-amount').val())
			deal.fee = document.getElementById('fee_check').innerHTML
			sessionStorage.setItem('deal',JSON.stringify(deal))
			remit_cusInfo()
			}
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
			let rcpsf = document.getElementById('pass_fnm').value
			let rcpsl = document.getElementById('pass_lnm').value
			let rcemail = document.getElementById('rcpt_email').value
			if(rcpsf =='' ||rcpsl ==''||rcemail ==''){
				alert('정보를 모두 입력해 주십시오.')
			}else{
			deal.rcpsf =  rcpsf  			
			deal.rcpsl =  rcpsl
			deal.rcemail =  rcemail 
			deal.cno = cus.cno
			sessionStorage.setItem('deal',JSON.stringify(deal))
			remit_review()
			}
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
		clock = new Clock()
		$('.themoin-main')
		.html(remit_vue.remit_complete(deal))
		setInterval(msg_time, 1000);
		$('#remit_clock').text(`${clock.year}년 ${clock.month+1}월 ${clock.clockDate}일 ${clock.hours < 10 ? `0${clock.hours+1}` : clock.hours+1}:${clock.minutes < 10 ? `0${clock.minutes}` : clock.minutes }까지`)
		
		$('#main_user_btn').click(()=>{
			deal.trdusd = null
			mypage.onCreate()
			$('html').scrollTop(0);
		})
		
		$('#copy_btn').on('click', function(e){
			$('#clip_target').val(common.comma_remove($('#copy_amt').html()))
			$('#clip_target').select()
			try { 
				var successful = document.execCommand('copy');
				if(successful){
					alert('복사되었습니다.')
				}else{
					alert('복사실패')
				}
			} catch (err) { 
				alert('이 브라우저는 지원하지 않습니다.') 
			}
		})
		$('#copy_acc_btn').on('click', function(e){
			$('#clip_acc').val(common.comma_remove($('#copy_acc').html()))
			$('#clip_acc').select()
			try { 
				var successful = document.execCommand('copy');
				if(successful){
					alert('복사되었습니다.')
				}else{
					alert('복사실패')
				}
			} catch (err) { 
				alert('이 브라우저는 지원하지 않습니다.') 
			}
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
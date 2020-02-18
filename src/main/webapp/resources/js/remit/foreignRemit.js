"use strict"
var foreignRemit = foreignRemit || {}
foreignRemit = (()=>{
	const WHEN_ERR = '레미트 js파일을 찾지 못했습니다.'
	let _,js,auth_js,main_vue_js,remit_vue_js,cookie_js,
		amount,deal,remit_box_js,clock,cus,acc

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
 			remit_box.onCreate({ flag : 'remit', cntcd : '' })
			
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
		
		if(deal.cntp == '미국'){
			$('.form-calculator .amount-row .receive img').attr("src",`https://img.themoin.com/public/img/circle-flag-us.svg`)
		}
	}

	
	let deal_get = ()=>{
		$.getJSON(`${_}/admin/fee`, d=>{
		if(d.feeOne != null && d.feeOne != 0){
		deal.lowFee = d.feeOne
		} else { 
			deal.lowFee = '6'
		}
		if(d.feeTwo != null && d.feeTwo != 0){
		deal.highFee = d.feeTwo
		} else{
			deal.highFee = '12'
		}
		sessionStorage.setItem('deal', JSON.stringify(deal))
		remit_deal()
		})
	}
	
	let remit_deal = ()=>{
		common.remit_send_focusout()
		let send_amount = $('.form-calculator .amount-row input.send-amount')
		
		
		if(deal.trdrcv >= 3000)
			{$('#fee_check').text(deal.highFee)}
			else {$('#fee_check').text(deal.lowFee)}
		common.receive_value_calc(deal.exrate)
		
		$('.form-calculator .amount-row input:text[numberOnly].send-amount').keyup(function(){
			$(this).val($(this).val().replace(/[^0-9]/g,""))
			if($(this).val() >5000) {
				send_amount.val(5000)
				$('#max_amount').text('송금 가능 금액은 5,000$입니다.')
				}
			if(common.comma_remove($(this).val()) >= 3000){
				$('#fee_check').text(deal.highFee)
			}
			else {$('#fee_check').text(deal.lowFee)}
			common.receive_value_calc(deal.exrate)
		})
		
		$('#first_remit_btn').click(()=>{
			if(send_amount.val()==''){
				alert('송금하실 금액을 입력해 주십시오.')
			}else{
			
			deal.fee = document.getElementById('fee_check').innerHTML
			deal.trdrcv =Number(common.comma_remove(send_amount.val()))
			deal.trdsnd = Math.round((deal.trdrcv + Number(deal.fee)) * deal.exrate)
			sessionStorage.setItem('deal',JSON.stringify(deal))
			remit_cusInfo()
			}
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
			let passFnm = document.getElementById('pass_fnm').value
			let passLnm = document.getElementById('pass_lnm').value
			let rcemail = document.getElementById('rcpt_email').value
			if(passFnm =='' ||passLnm ==''||rcemail ==''){
				alert('정보를 모두 입력해 주십시오.')
			}else{
			deal.passFnm =  passFnm  			
			deal.passLnm =  passLnm
			deal.passName = document.getElementById('pass_lnm').value + document.getElementById('pass_fnm').value
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
		.html(remit_vue.remit_review()) 
		
		$('#complete_remit_btn')
		.click( e => {
			e.preventDefault()
			deal.exrate = String(deal.exrate)
			deal.trdStatCd = '2'
			deal.trdTypeCd = '송금'
			deal.crtmem = 'LEJ'
			sessionStorage.setItem('deal',JSON.stringify(deal))
			$.ajax({
				url: _+'/remit/insert',
				type : 'POST',
				data : JSON.stringify(deal),
				contentType :'application/json',
				success : () => {
					remit_complete()
					$('html').scrollTop(0);
				},
				error : (request,status,error) => {
					alert('시스템 확인 중입니다.')
				}
			})
		})
	}
	let remit_complete =()=>{
		clock = new Clock()
		$('.themoin-main')
		.html(remit_vue.remit_complete())
		setInterval(msg_time, 1000);
		$('#remit_clock').text(`${clock.year}년 ${clock.month+1}월 ${clock.clockDate}일 ${clock.hours < 10 ? `0${clock.hours+1}` : clock.hours+1}:${clock.minutes < 10 ? `0${clock.minutes}` : clock.minutes }까지`)
		$('#hubpay').hide()
		$('#hubpay_btn').click(()=>{
				$('#hubpay').toggle()
			})
			
		$('#send_money').keyup(function(){
			if($(this).val() >deal.trdsnd) {
				$(this).val(common.comma_create(deal.trdsnd))
				alert('입금할 금액을 초과할 수 없습니다.')
				}
		})
		$('#send_money').val(common.comma_create($('#send_money').val())) //입금할 금액 콤마
		
		$('#remit_wd').click(()=>{
			acc = $.acc()
			deal.cemail = acc.cemail
			deal.acctNo = acc.acctNo
			deal.type = '1'
			sessionStorage.setItem('deal',JSON.stringify(deal))
			
			$.ajax({ 
			url: _+'/account/withdrawal',
			type : 'POST',
			data : JSON.stringify(deal), 
			contentType :'application/json',
			success : () => {
				alert("입금 확인되었습니다.")
			},
			error : (request,status,error) => {
				alert('시스템 확인 중입니다.')
			}
			})
		})
		
			$('#main_user_btn').click( e => {
				e.preventDefault()

				deal.trdrcv = null

				mypage.onCreate()
				$( 'html, body' ).stop().animate( { scrollTop : '825' } )
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
		let min = SetTime / 60
		let sec = SetTime % 60
		var msg = `입금 기한 ${Math.floor(min)} : ${sec <10 ? `0${sec}`:`${sec}`}`
		SetTime--;
		$('#deposit_hour').text(msg)
	}
	
	return {onCreate}
})();
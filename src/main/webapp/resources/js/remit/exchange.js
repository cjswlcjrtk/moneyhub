var exchange = exchange || {}
exchange =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'

	let _, js, mypage_vue_js, exChart_js, remit_box_js, line_graph_js, 
			nav_vue_js, deal, cus, acc,accHis,function_vue_js, main_vue_js
			,mypage_js, trade_exch_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		deal = $.deal()
		cus = $.cusInfo()
		acc = $.acc()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		exChart_js = js + '/mypage/exChart.js'
		remit_box_js = js + '/remit/remit_box.js'
		line_graph_js = js + '/exchart/line_graph.js'
		nav_vue_js = js + '/vue/nav_vue.js'
		function_vue_js = js + '/vue/function_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		mypage_js = js + '/mypage/mypage.js'
		trade_exch_js = js + '/remit/trade_exch.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(remit_box_js),
			$.getScript(nav_vue_js),
			$.getScript(function_vue_js),
			$.getScript(main_vue_js),
			$.getScript(trade_exch_js)
		)
		.done(()=>{
			setContentView()
			remit_box.onCreate({ flag : 'exchange2', cntcd : '' })
			mypage.remit_list({ nowPage : 0, cno : cus.cno})
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=>{
		
		$('#root div.themoin-main')
		.html(function_vue.exchangeFunction())
		
		$('#popup-root')
		.html(function_vue.exch_cntcd_popup())
		.hide()
		
		$('#popup-exchange').empty()
		
		let cntcd = $('#exch_box .amount-row .receive h3').text()
		let deal_arr = []
		$.getJSON('/web/exrate/search/cntcd/' + cntcd, d=>{	
			$.each(d.exlist, (i, j)=>{
				deal_arr.push(parseFloat(j.exrate))
			})
			deal.exrate = deal_arr[0]
			sessionStorage.setItem('deal',JSON.stringify(deal))
			
			$('#exch_box .amount-row input.send-amount').keyup(()=>{
					common.receive_value_calc(deal.exrate)
			}) 
		})
				
		$(function(){
			$('#exchangebutton').one('click', function(){
				$('#chart2').fadeIn()
				let cntcd = $('#exch_box .amount-row .receive h3').text()
				$.getJSON(_+'/exchange/extrend/cntcd/' + cntcd, d=>{
					if(d.msg === 'UP'){
						$('#exchange_check').text('최근 약 2주간 해당 환율은 상승세입니다.')
						$('#exchange_check').css('color', 'blue')
						$('#exchange_check').css('text-align', 'center')
						$('#exchange_check').css('font-weight', 'bold')
					}else if(d.msg === 'DOWN'){
						$('#exchange_check').text('최근 약 2주간 해당 환율은 하락세입니다.')
						$('#exchange_check').css('color', 'red')
						$('#exchange_check').css('text-align', 'center')
						$('#exchange_check').css('font-weight', 'bold')
					}
				})
				$.getScript(exChart_js)
				$.getScript(mypage_js)
				
				$(this).click(function(){
					if(confirm('환전하시겠습니까? 확인을 누르시면 바로 실행됩니다.')){
						deal.trdsnd = common.comma_remove($('.form-calculator .amount-row input.send-amount').val()) //환전할 원화 금액
						deal.trdrcv = common.comma_remove($('.form-calculator .amount-row input.receive-amount').val()) //환전된 외화 금액
						deal.cntcd = $('.form-calculator .amount-row .receive h3').text()
						deal.cno = cus.cno
						deal.exrate = deal.exrate
						deal.crtmem = 'YHM'
						deal.trdStatCd = '2' //출금
						deal.trdTypeCd = '환전' //환전
						deal.fee = Math.floor(parseInt(deal.trdrcv) * 0.01 * parseInt(deal.exrate))
						deal.passName = cus.cname
						deal.rcemail = cus.cemail
						deal.cemail = cus.cemail
						deal.cntp = $('.form-calculator .amount-row #receive_exch p').text() 
						acc = $.acc()
						deal.acctNo = acc.acctNo
						deal.type = '2'
						sessionStorage.setItem('deal',JSON.stringify(deal))
						
						$.ajax({ 
						url: _+'/account/withdrawal',
						type : 'POST',
						data : JSON.stringify(deal), 
						contentType :'application/json',
						success : () => {
							$.ajax({
								url: _+'/remit/insert/exch',
								type : 'POST',
								data : JSON.stringify(deal),
								contentType :'application/json',
								success : () => {
									mypage.remit_list({ nowPage : 0, cno : cus.cno})
									mypage.onCreate()
									$( 'html, body' ).stop().animate( { scrollTop : '825' })
								},
								error : (request,status,error) => {
//									alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
									alert('시스템 확인 중입니다.')
								}
							})
						},
						error : (request,status,error) => {
//							alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
							alert('시스템 확인 중입니다.')
						}
						})
					}
				})
			})
		})
	}
	
	
	return { onCreate }
})()
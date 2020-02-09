var exchange = exchange || {}
exchange =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'

	let _, js, mypage_vue_js, exChart_js, remit_box_js, line_graph_js, nav_vue_js, exch

	let init =()=>{
		_ = $.ctx()
		js = $.js()
		exch = $.exch()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		exChart_js = js + '/mypage/exChart.js'
		remit_box_js = js + '/remit/remit_box.js'
		line_graph_js = js + '/exchart/line_graph.js'
		nav_vue_js = js + '/vue/nav_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(remit_box_js),
			$.getScript(nav_vue_js)
		)
		.done(()=>{
			setContentView()
			remit_box.onCreate({ flag : 'exchange2', cntcd : '' })
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=>{
		$('#root div.mypage')
		.html(mypage_vue.exchange())
		//$.getScript(exChart_js)
		
		$('#popup-root')
		.html(main_vue.cntcd_popup())
		.hide()
		
		$('#popup-exchange').empty()

		$(function(){
			$('#exchangebutton').one('click', function(){
				$('#chart').fadeIn()
				
				let cntcd = $('.form-calculator .amount-row .receive h3').text()

				let exch_arr = []
				$.getJSON('/web/exrate/search/cntcd/' + cntcd, d=>{	
					$.each(d.exlist, (i, j)=>{
						exch_arr.push(parseFloat(j.exrate))
					})
					exch.exrate = exch_arr[0]
					sessionStorage.setItem('exch',JSON.stringify(exch))
					alert(exch_arr[0])
					alert(JSON.stringify(exch))
				})
					$('.form-calculator .amount-row input.send-amount').keyup(()=>{
						common.receive_value_calc(exch.exrate)
					})
				
//				let cntcd = $('.form-calculator .amount-row .receive h3').text()

				$.getJSON(_+'/exchange/extrend/cntcd/' + cntcd, d=>{
					if(d.msg === 'UP'){
						$('#exchange_check').text('최근 약 2주간 해당 환율은 상승세입니다.')
						$('#exchange_check').css('color', 'blue')
						$('#exchange_check').css('text-align', 'center')
						$('#exchange_check').css('font-weight', 'bold')
					}else{
						$('#exchange_check').text('최근 약 2주간 해당 환율은 하락세입니다.')
						$('#exchange_check').css('color', 'red')
						$('#exchange_check').css('text-align', 'center')
						$('#exchange_check').css('font-weight', 'bold')
					}
				})
				$.getScript(exChart_js)
				$(this).click(function(){
					if(confirm('환전하시겠습니까? 확인을 누르시면 바로 실행됩니다.')){

						exch.exch_krw = $('.form-calculator .amount-row input.send-amount').val() //환전할 원화 금액
						exch.exch_cnt = $('.form-calculator .amount-row input.receive-amount').val() //환전된 외화 금액
						exch.cntcd = $('.form-calculator .amount-row .receive h3').text()
						exch.cemail = sessionStorage.getItem('CEMAIL')
						exch.acctNo = sessionStorage.getItem('acctNo')

						$('#auth_mgmt').each(function(){
							$.ajax({
								url : _+'/exchange/insert',
								type : 'POST',
								data: JSON.stringify(exch),
								dataType : 'json',
								contentType : 'application/json',
								success : d=>{
									alert(JSON.stringify(exch))
									if(d.msg === 'SUCCESS'){
										alert('머니허브 계좌로 이동합니다.')
										var tab_id = $(this).attr('data-tab')
										$(this).addClass('active')
										$("#"+tab_id).addClass('active')
										$('#cus_info').removeClass('active')
										$('#pwd_chg').removeClass('active')
										$('#alarm').removeClass('active')
										$('#ref_mgmt').removeClass('active')
										$('#withdrawal').removeClass('active')
										$('#exchange_test').removeClass('active')
										$('#exchange').removeClass('active')
										auth_mgmt.onCreate()
									}else{
										alert('고객님 계좌를 확인해주세요.')
										var tab_id = $(this).attr('data-tab')
										$(this).addClass('active')
										$("#"+tab_id).addClass('active')
										$('#cus_info').removeClass('active')
										$('#pwd_chg').removeClass('active')
										$('#alarm').removeClass('active')
										$('#ref_mgmt').removeClass('active')
										$('#withdrawal').removeClass('active')
										$('#exchange_test').removeClass('active')
										$('#exchange').removeClass('active')
										auth_mgmt.onCreate()
									}
								}
							})
						})
					}
				})
			})
		})
	}
	
	
	return { onCreate }
})()
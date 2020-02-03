var exchange_test = exchange_test || {}
exchange_test =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'

	let _, js, mypage_vue_js, retention_amount_js, global_map_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		retention_amount_js = js + '/maps/retention_amount.js'
		global_map_js = js + '/maps/global_map.js'
		getExrate = $.exrate()
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(retention_amount_js)
		)
		.done(()=>{
			setContentView()
			retention_amount.onCreate()
			exchange_popup()
			
			exrate.flag = 'default'
			exrate.bdate = common.clock_format()	
			sessionStorage.setItem('exrate', JSON.stringify(exrate));
			
			$('#exchange_datepicker b')
			.text(`환율 기준일 : ${common.clock_format()}`)
			
	//		$('#datepicker').val('2020-01-31')
			
			$('#exchange_datepicker button')
			.click(()=>{
				alert(`>> : ${$('#datepicker').val()}`)
				$.getScript($.js() + '/maps/global_map.js')
				exrate.flag = 'select'
				exrate.bdate = $('#datepicker').val()
				sessionStorage.setItem('exrate', JSON.stringify(exrate));
				total_amount_calc()
			})
			total_amount_calc()
			
//			$("#datepicker").datepicker()
/*			$('#datepicker').datetimepicker({
			  language : 'ko', // 화면에 출력될 언어를 한국어로 설정한다.
			  pickTime : false, // 사용자로부터 시간 선택을 허용하려면 true를 설정하거나 pickTime 옵션을 생략한다.
			  defalutDate : new Date() // 기본값으로 오늘 날짜를 입력한다. 기본값을 해제하려면 defaultDate 옵션을 생략한다.
			});
			*/
			$('#datePicker').datepicker({
				format: "yyyy-mm-dd",	//데이터 포맷 형식(yyyy : 년 mm : 월 dd : 일 )
				startDate: '-10d',	//달력에서 선택 할 수 있는 가장 빠른 날짜. 이전으로는 선택 불가능 ( d : 일 m : 달 y : 년 w : 주)
				anguage : "ko"	//달력의 언어 선택, 그에 맞는 js로 교체해줘야한다.
			})
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})	
	}
	let setContentView =()=>{
//		$('#duplication1').empty()
		
		$('head')
		.append(mypage_vue.exchange_test_head())
		
		$('#root div.mypage')
		.html(mypage_vue.exchange_test())

		$('#popup-exchange')
		.html(mypage_vue.exchange_popup())
		.hide()
		
		$('#exchange_datepicker')
		.css({
			height : '30px',
			margin : '10px auto',
			'text-align' : 'center'
		})	
	}
	
	let exchange_popup =()=>{
		$('<button/>')
		.text('환전하기')
		.css({
			width: '100%',
		    height: '70px',
		    'background-color': '#0077c8',
		    'text-align': 'center',
		    'line-height': '1',
		    color: '#ffffff',
		    'margin-top': '20px'	// 11px
		})	
		.appendTo('#exchange_box')
		.click(()=>{
			let receive_currencies = $('#exchange_' + $('#exchange_box .amount-row .receive h3').text()),
				send_currencies = $('#exchange_' + $('#exchange_box .amount-row .send h3').text()),
				sub_calc = parseFloat(common.comma_remove(send_currencies.text()))
							- parseFloat(common.comma_remove($('#exchange_send_amount').val())),
				exchange_KRW = $('#exchange_KRW')
		
			if(sub_calc >= 0){
				send_currencies
				.text(common.comma_create(sub_calc.toFixed(2)))
				
				let add_calc = parseFloat(common.comma_remove(receive_currencies.text()))
							+ parseFloat(common.comma_remove($('#exchange_box input.receive-amount').val()))
					
				receive_currencies
				.text(common.comma_create(add_calc.toFixed(2)))
			}else{
				alert(`${$('#exchange_box .amount-row .send h3').text()} 보유 금액이 부족합니다.`)
			}
				
			if( exchange_KRW.text().indexOf('.') > -1 ){
				exchange_KRW.text(exchange_KRW.text().substring(0, exchange_KRW.text().indexOf('.')))
			}
			
			total_amount_calc()
			
			$('#popup-exchange')
			.hide()
		})
	
		common.popup_close('exchange')
	}
	
	let total_amount_calc =()=>{
		
		let total = parseFloat(common.comma_remove($('#exchange_KRW').text()))
					+ parseFloat(common.comma_remove($('#exchange_USD').text())) * exrate.usd
					+ parseFloat(common.comma_remove($('#exchange_AUD').text())) * exrate.aud
					+ parseFloat(common.comma_remove($('#exchange_EUR').text())) * exrate.eur
					+ parseFloat(common.comma_remove($('#exchange_CNY').text())) * exrate.cny
					+ parseFloat(common.comma_remove($('#exchange_JPY').text())) * exrate.jpy
					
		$('#total_money').text(common.comma_create(total.toFixed(0)))
	}
	
	
	return { onCreate }
})()
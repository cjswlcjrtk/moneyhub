var exchange_test = exchange_test || {}
exchange_test =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'

	let _, js, mypage_vue_js, retention_amount_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		retention_amount_js = js + '/maps/retention_amount.js'
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
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})	
	}
	let setContentView =()=>{
		$('head')
		.append(mypage_vue.exchange_test_head())
		
		$('#root div.mypage')
		.html(mypage_vue.exchange_test())
		
		$('#popup-exchange')
		.html(mypage_vue.exchange_popup())
		.hide()
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
		    'margin-top': '11px'
		})	
		.appendTo('#exchange_box')
		.click(()=>{
			let receive_currencies = $('#exchange_' + $('#exchange_box .amount-row .receive h3').text()),
				send_currencies = $('#exchange_' + $('#exchange_box .amount-row .send h3').text()),
				sub_calc = parseFloat(comma_remove(send_currencies.text()))
							- parseFloat(comma_remove($('#exchange_send_amount').val())),
				exchange_KRW = $('#exchange_KRW')
		
			if(sub_calc > 0){
				send_currencies
				.text(comma_create(sub_calc.toFixed(2)))
				
				let add_calc = parseFloat(comma_remove(receive_currencies.text()))
							+ parseFloat(comma_remove($('#exchange_box input.receive-amount').val()))
					
				receive_currencies
				.text(comma_create(add_calc.toFixed(2)))
			}else{
				alert(`${$('#exchange_box .amount-row .send h3').text()} 보유 금액이 부족합니다.`)
			}
			
//			alert('1 - ' + parseFloat(comma_remove($('#exchange_KRW').text())).toFixed(0) )
//			alert('2 - ' + $('#exchange_KRW').text().substring(0, $('#exchange_KRW').text().indexOf('.')))
			
			if( exchange_KRW.text().indexOf('.') > -1 ){
				exchange_KRW.text(exchange_KRW.text().substring(0, exchange_KRW.text().indexOf('.')))
			}
			
			total_amount_calc()
			
			$('#popup-exchange')
			.hide()
		})
	
		$('#popup-exchange .moin-close')
		.click(e=>{
			e.preventDefault()
			$('#popup-exchange')
			.hide()
		})
	}
	
	let total_amount_calc =()=>{
		
	//	$('#total_money').text()
	}
	
	let comma_remove =x=>{
		return x.replace(/,/gi, '')
	}
	
	let comma_create =x=>{
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
	
	return { onCreate }
})()
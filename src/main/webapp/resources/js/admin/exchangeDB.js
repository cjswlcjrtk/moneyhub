"use strict"
var exchangeDB = exchangeDB || {}
exchangeDB =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, exchange_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		exchange_vue_js = js + '/admin_vue/exchange_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(exchange_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		selectExchange()
	}
	
	let selectExchange = () => {
		$(exchange_vue.exchange_head()).appendTo('head')
		$(exchange_vue.exchange_body()).appendTo('div.container-fluid')
//		$.getJSON(_ + '/admin/exchangeDB',d=>{
//			$(exchange_vue.exchange_head()).appendTo('head')
//			$(exchange_vue.exchange_body(d)).appendTo('div.container-fluid')
//			$('#exchangeUpdateValue').val('')
//			$('#exchangeReadOnly').val(`현재 수수료 ${d.exchange} 달러 적용중`)
//			updateExchange()
//		})
	}
	
	let updateExchange = () => {
		$('#exchangeUpdate').click(e=>{
			e.preventDefault()
			$.ajax({				
				url : _ + '/admin/exchangeUpdate',
				type : 'POST',
				data : JSON.stringify({		
					feeOneValue : $('#exchangeUpdateValue').val()
				}),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg === 'SUCCESS'){
						alert('업데이트 성공')
						$('head').empty()
						$('div.container').empty()
						selectExchange()
					}
					else{
						alert('업데이트 실패')
						selectExchange()
					}					
				},
				error : e=>{
					alert('ajax 실패')  
				}
			})
		})
	}
	
	return { onCreate }
})()
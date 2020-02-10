"use strict"
var exchangeDB = exchangeDB || {}
exchangeDB =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, exchangeDB_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		exchangeDB_vue_js = js + '/admin_vue/exchangeDB_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(exchangeDB_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		selectExchangeDB()
		
	}
	
	let selectExchangeDB = () => {
		$.getJSON(_ + '/admin/exchangeDB',d=>{
			$(exchangeDB_vue.exchangeDB_head()).appendTo('head')
			$(exchangeDB_vue.exchangeDB_body()).appendTo('div.container-fluid')
			$('#exchangeDBUpdateValue').val('')
			$('#exchangeDBReadOnly').val(`현재 수수료 ${d.exchangeDB} 적용중`)
			updateExchangeDB()
		})
	}
	
	let updateExchangeDB = () => {
		$('#exchangeDBUpdate').click(e=>{
			e.preventDefault()
			$.ajax({				
				url : _ + '/admin/exchangeDBUpdate',
				type : 'POST',
				data : JSON.stringify({		
					exchangeDBValue : $('#exchangeDBUpdateValue').val()
				}),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg === 'SUCCESS'){
						alert('업데이트 성공')
						$('head').empty()
						$('div.container').empty()
						selectExchangeDB()
					}
					else{
						alert('업데이트 실패')
						selectExchangeDB()
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
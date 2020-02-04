"use strict"
var fee = fee || {}
fee =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, fee_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		fee_vue_js = js + '/admin_vue/fee_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(fee_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		selectFee()
	}
	
	let selectFee = () => {
		$.getJSON(_ + '/admin/fee',d=>{
			$(fee_vue.fee_head()).appendTo('head')
			$(fee_vue.fee_body(d)).appendTo('div.container-fluid')
			$('#feeOneUpdateValue').val('')
			$('#feeTwoUpdateValue').val('')
			$('#feeOneReadOnly').val(`현재 수수료 ${d.feeOne} 적용중`)
			$('#feeTwoReadOnly').val(`현재 수수료 ${d.feeTwo} 적용중`)
			updateFee()
		})
	}
	
	let updateFee = () => {
		$('#feeOneUpdate').click(e=>{
			e.preventDefault()
			$.ajax({				
				url : _ + '/admin/feeUpdateOne',
				type : 'POST',
				data : JSON.stringify({		
					feeOneValue : $('#feeOneUpdateValue').val()
				}),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg === 'SUCCESS'){
						alert('업데이트 성공')
						$('head').empty()
						$('div.container').empty()
						selectFee()
					}
					else{
						alert('업데이트 실패')
						selectFee()
					}					
				},
				error : e=>{
					alert('ajax 실패')  
				}
			})
		})
		
		$('#feeTwoUpdate').click(e=>{
			e.preventDefault()
			$.ajax({				
				url : _ + '/admin/feeUpdateTwo',
				type : 'POST',
				data : JSON.stringify({		
					feeTwoValue : $('#feeTwoUpdateValue').val()
				}),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg === 'SUCCESS'){
						alert('업데이트 성공')
						$('head').empty()
						$('div.container').empty()
						selectFee()
					}
					else{
						alert('업데이트 실패')
						selectFee()
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
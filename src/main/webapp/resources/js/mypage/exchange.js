var exchange = exchange || {}
exchange =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, mypage_vue_js, exChart_js, remit_box_js, line_graph_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		exChart_js = js + '/mypage/exChart.js'
		remit_box_js = js + '/remit/remit_box.js'
		line_graph_js = js + '/exchart/line_graph.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(remit_box_js)
		)
		.done(()=>{
			setContentView()
			remit_box.onCreate({ flag : 'mypage', cntcd : '' })
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=>{
		$('#root div.mypage')
		.html(mypage_vue.exchange())
		$.getScript(line_graph_js)
		
		$('#popup-root')
		.html(main_vue.cntcd_popup())
		.hide()
		
		$('#popup-exchange').empty()
		
		$(function(){
			$('#exchangebutton')
			.click(function(){
				alert('환전하기 클릭1')
				$("#divToggle").toggle()
				/*if($('#divToggle').css('display') == 'none'){
					$('#divToggle').show()
				}else{
					$('#divToggle').hide()
				}*/
				$.getScript(exChart_js)
				deal.amount = document.getElementById('exchange_amount').value
				sessionStorage.setItem('deal', JSON.stringify(deal));
			})
		})
		
		
			/*$.getScript(exChart_js)
			deal.amount = document.getElementById('exchange_amount').value
			sessionStorage.setItem('deal', JSON.stringify(deal));
			foreignRemit.onCreate()
		})*/
	

	}
	
	
	return { onCreate }
})()
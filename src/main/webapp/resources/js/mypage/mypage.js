"use strict"
var mypage = mypage || {}

mypage =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cmm_vue_js, nav_vue_js, main_vue_js, mypage_vue_js, 
		auth_js, compo_js, event_js, faq_js, main_class, withdrawal_js,
		line_graph_js,deal,guide_recieve_js, remit_box_js

	let init =()=>{
		_ = $.ctx()
		js = $.js()
		deal = $.deal()
		cmm_vue_js = js + '/vue/cmm_vue.js'
		nav_vue_js = js + '/vue/nav_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		mypage_vue_js = js + '/vue/mypage_vue.js'
		compo_js = js + '/cmm/compo.js'
		event_js = js + '/cmm/event.js'
		faq_js = js + '/cmm/faq.js'
		guide_recieve_js = js + '/cmm/guide_recieve.js'
		main_class = 'themoin-main'
		withdrawal_js = '/mypage/withdrawal.js'
		line_graph_js = js + '/exchart/line_graph.js'
		remit_box_js = js + '/mypage/remit_box.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cmm_vue_js),
			$.getScript(nav_vue_js),
			$.getScript(main_vue_js),
			$.getScript(mypage_vue_js),
			$.getScript(compo_js),
			$.getScript(event_js),
			$.getScript(faq_js),
			$.getScript(guide_recieve_js),
			$.getScript(remit_box_js)
//			$.getScript(line_graph_js)
	//		$.getScript(withdrawal_js)
		)
		.done(()=>{
			setContentView()
			page_move()		
			setInterval(clock_excute, 1000)
			setInterval(exchange_API, 1000 * 60 * 60 * 12) // 1000 * 60 : 1분, 
			remit_box.onCreate('mypage')

		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=>{
		$('#root')
		.html(nav_vue.logined_nav(_))
		.append(main_vue.logined_main())
		.append(cmm_vue.footer())
		
		$.getScript(line_graph_js)
		
		$('<button/>')
		.text('송금하기')
		.addClass('index-send-btn moin-body')
		.appendTo('#remit_box')
		.click(()=>{
			deal.amount = document.getElementById('send_amount').value  //처음 입력한 송금액
			sessionStorage.setItem('deal', JSON.stringify(deal));
			foreignRemit.onCreate()
		})
		 
	}

	let page_move =()=>{
		$('#mgmt')
		.click(()=>{
			sidebar.onCreate()
			$('html').scrollTop(0);
		})
		
		$('#logout')
		.click(()=>{
			//====================================================================================== EJ
			sessionStorage.setItem('cus', null); // 로그아웃 클릭하면 세션에 담긴 고객정보를 비운다. 
			//======================================================================================
			//====================================================================================== MK
			/*sessionStorage.setItem('cemail', null)
			sessionStorage.setItem('cname', null)*/
	/*		alert(`email : ${$.cemail()}`)
			if( $.cemail() !== 'null' ){
				alert(`null 아닐 때  ${$.cemail()}`)
			}else{
				alert(`null 일 때  ${$.cemail()}`)
			}*/
			//======================================================================================
			//======================================================================================HM
			/*sessionStorage.setItem('CEMAIL', null);*/
			//======================================================================================
			app.onCreate()
		})
		
		$('#compo')
		.click(()=>{
			compo.onCreate(main_class)
		})
		
		$('#event')
		.click(()=>{
			event.onCreate(main_class)
		})
		
		$('#faq')
		.click(()=>{
			faq.onCreate(main_class)
		})
		
		$('#guide')
		.click(()=>{
			guide_recieve.onCreate(main_class)
		})
		
		$('.themoin-header a.logo')
		.click(()=>{
			mypage.onCreate()
			$('html').scrollTop(0);
		})
		
	}
	let clock_excute =()=>{

		let date = new Date();
		let year = date.getFullYear()
		let month = date.getMonth()
		let clockDate = date.getDate()
		let day = date.getDay()
		let hours = date.getHours()
		let minutes = date.getMinutes()
		let seconds = date.getSeconds()
		$('#clock').text(`실시간 모인 환율 - ${year}년 ${month+1}월 ${clockDate}일` +
				` ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }` : minutes }:${seconds < 10 ? `0${seconds }` : seconds }`)
	}

	let exchange_API =()=>{
		$.getJSON('https://api.manana.kr/exchange/rate/KRW/'+
				'KRW,USD,JPY,CNY,SGD,AUD,GBP,NPR,EUR.json', d=>{

			let arr = []
			$.each(d, (i, j)=>{
				arr.push({bdate : j.date.substr(0, 10), 
					cntcd : j.name.substr(0, 3),
					exrate : j.rate.toFixed(2)})
			})
			
			$.ajax({
				url : _ + `/exrate/insert/api`,
				type : 'POST',
				data : JSON.stringify({ 'paramList' : arr }),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					alert('성공')
				},
				error : e=>{
					alert('전송 실패')
				}
				
			})
		})
	}	
	return { onCreate }
})()
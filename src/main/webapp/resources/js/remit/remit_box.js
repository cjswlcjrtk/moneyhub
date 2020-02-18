"use strict"
var remit_box = remit_box || {}
remit_box =(()=>{
	let _, js, line_graph_js, exrate_js, flag, cntcd, deal, exChart_js, 
		exrateSess, exch
	let init =x=>{
		_ = $.ctx()
		js = $.js()
		deal = $.deal()
		exch = $.exch()
		line_graph_js = js + '/exchart/line_graph.js'
		exrate_js = js + '/exchart/exrate.js'
		exChart_js = js + '/mypage/exChart.js'
		flag = x.flag
		cntcd = x.cntcd
		exrateSess = {}
	}
	
	let onCreate =x=>{
		init(x)
		$.when(
			$.getScript(exrate_js)
		)
		.done(()=>{
			popup()
		})
		.fail(()=>{
			alert('시스템 확인 중입니다.')
		})
	}
	
	let popup =()=>{
		if(flag === 'exchange'){	// 모의 환전 시
			common.exchange_test_send_keyup()
			let send_data = [ //{ img : 'kr', cntcd : 'KRW', curr : '대한민국 한화', flag : ''}, 
							{ img : 'us', cntcd : 'USD', curr : '미국 달러', flag : '' },
							{ img : 'cn', cntcd : 'CNY', curr : '중국 위안', flag : '' },
							{ img : 'de', cntcd : 'EUR', curr : '독일 유로', flag : '' },			
							{ img : 'au', cntcd : 'AUD', curr : '호주 달러', flag : '' },
							{ img : 'jp', cntcd : 'JPY', curr : '일본 엔', flag : '' }]
			
			$('#cntcd_slide ul').empty()
			cntcd_display(send_data)
			
			$('.form-calculator .amount-row .send')	// send cntcd 클릭 시 팝업
			.click(e=>{
				e.preventDefault()
				if( cntcd === 'KRW' ){
					if( cntcd_slide.style.display === 'none'){
						$('#cntcd_slide').css({ display : 'block'})
					}else{
						$('#cntcd_slide').css({ display : 'none'})
					}
				}
			})
			sessionStorage.setItem('exrateFlag', 'exchange_test')
			exrate.onCreate()
			
		}else{	// 모의 환전 아닐 때
			common.remit_send_focusout()
			let receive_data = [ { img : 'jp', cntcd : 'JPY', curr : '일본 엔', flag : '' },
					{ img : 'cn', cntcd : 'CNY', curr : '중국 위안', flag : '' },
					{ img : 'us', cntcd : 'USD', curr : '미국 달러', flag : '' },
					{ img : 'sg', cntcd : 'SGD', curr : '싱가포르 달러', flag : '' },
					{ img : 'au', cntcd : 'AUD', curr : '호주 달러', flag : '' },
					{ img : 'gb', cntcd : 'GBP', curr : '영국 파운드', flag : '' },
					{ img : 'be', cntcd : 'EUR', curr : '벨기에 유로', flag : '' },
					{ img : 'fr', cntcd : 'EUR', curr : '프랑스 유로', flag : '' },
					{ img : 'de', cntcd : 'EUR', curr : '독일 유로', flag : '' },
					{ img : 'it', cntcd : 'EUR', curr : '이탈리아 유로', flag : '' },
					{ img : 'nl', cntcd : 'EUR', curr : '네덜란드 유로', flag : '' },
					{ img : 'pt', cntcd : 'EUR', curr : '포르투갈 유로', flag : '' },
					{ img : 'es', cntcd : 'EUR', curr : '스페인 유로', flag : '' }]
			
			$('.form-calculator .amount-row .receive')	// receive cntcd 클릭 시
			.click(e=>{
				e.preventDefault()
				$('#popup-root')
				.show()
				
				$('#popup_box input').val('')
				$('#popup_box ul').empty()
				cntcd_display(receive_data)
			})

			$('#popup_box input').keyup(()=>{
				search_filter(receive_data)			
			})
			common.popup_close('root')
		}
	}
	
	let search_filter =x=>{
		let filtered_data = []
		for(let i=0; i< x.length; i++ ){
			if(x[i].curr.indexOf($('#popup_box input').val()) > -1 ){
				filtered_data.push(x[i])
			}else{
				$('#popup_box ul').empty()
			}
		}
		cntcd_display(filtered_data)
	}
	
	let cntcd_display =x=>{
		$.each(x, (i, j)=>{
			j.flag = flag
			let append_root = '#popup_box ul'
			if(j.flag === 'exchange'){
				append_root = '#cntcd_slide ul'
			}
			
			$(`<li><img src="https://img.themoin.com/public/img/circle-flag-${j.img}.svg"><a><p>${j.cntcd}</p><p>${j.curr}</p></a></li>`)
			.appendTo(append_root)
			.click(()=>{
				$('#popup-root')
				.hide()
				$('#popup_box input').val('')
				if( j.flag === 'mypage' || j.flag ==='remit'){
					$('.form-calculator .amount-row .receive img').attr("src",`https://img.themoin.com/public/img/circle-flag-${j.img}.svg`)
					$('.form-calculator .amount-row .receive p').text(`${j.curr.substring(0, j.curr.indexOf(' '))}`)
					$('.form-calculator .amount-row .receive h3').text(`${j.cntcd}`)
					
					sessionStorage.setItem('cntimg', `https://img.themoin.com/public/img/circle-flag-${j.img}.svg`)
					deal.cntp =$('.form-calculator .amount-row .receive p').text()
					deal.cntcd = $('.form-calculator .amount-row .receive h3').text()
					sessionStorage.setItem('deal',JSON.stringify(deal))
					
				}
				else if(( j.flag === 'exchange')){
					if( cntcd_slide.style.display === 'none'){
						$('#cntcd_slide').css({ display : 'block'})
					}else{
						$('#cntcd_slide').css({ display : 'none'})
					}
					
					$('.form-calculator .amount-row .send p').text(`${j.curr.substring(0, j.curr.indexOf(' '))}`)
					$('.form-calculator .amount-row .send h3').text(`${j.cntcd}`)
					exrate.onCreate()

				}
				else if( j.flag === 'exchange2'){
					$('.form-calculator .amount-row .receive p').text(`${j.curr.substring(0, j.curr.indexOf(' '))}`) //레미트박스 국가
					$('.form-calculator .amount-row .receive h3').text(`${j.cntcd}`) //레미트박스 통화
					deal.cntp = j.curr.substring(0, j.curr.indexOf(' '))
					deal.cntcd = j.cntcd
					let deal_arr = []
					function getExrate(){
						return new Promise(function(resolve){
							$.getJSON('/web/exrate/search/cntcd/' + j.cntcd, d=>{	
								if(d){
									$.each(d.exlist, (i, j)=>{
										deal_arr.push(parseFloat(j.exrate))
									})
									deal.exrate = deal[0]
									sessionStorage.setItem('deal', JSON.stringify(deal))
									resolve()
								}
							})
						})
					}
					getExrate()
					.then(()=>{
						common.receive_value_calc(deal_arr[0])
						$('.form-calculator .amount-row input.send-amount').keyup(()=>{
							common.receive_value_calc(deal_arr[0])
						})
					})
					.catch(()=>{
						alert('시스템 확인 중입니다.')
					})
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

					$('#chart2') //통화 변경할 때 그래프 지우고 새로 그래프 그리는 부분
					.html(`<canvas id="canvas1" style="width:200px; height:50px; margin-bottom: 10px"></canvas>`)
					$.getScript(exChart_js)
				}
			})
		})
	}
	
	return { onCreate }
})()
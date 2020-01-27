"use strict"
var remit_box = remit_box || {}
remit_box =(()=>{
	let _, js, line_graph_js, exrate_js, flag
	let init =x=>{
		_ = $.ctx()
		js = $.js()
		line_graph_js = js + '/exchart/line_graph.js'
		exrate_js = js + '/exchart/exrate.js'
		flag = x
	}
	
	let onCreate =x=>{
		init(x)
		remit_send()
		$('.form-calculator .amount-row input.send-amount')
		.focusout(()=>{
			remit_send()
		})
		popup()
		$.getScript(exrate_js)
		.done(()=>{
			exrate.onCreate()
		})
	}
	
	let remit_send =()=>{
		let send = $('.form-calculator .amount-row input.send-amount')
		let send_value = numberFormat(send.val().replace(/,/gi, ''))	
		send.val(send_value)
	}
	
	let numberFormat =x=>{
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
	
	let popup =()=>{
		$('.form-calculator .amount-row .receive')
		.click(e=>{
			e.preventDefault()
			$('#popup-root')
			.show()
			
			$('#popup_box input').val('')
			$('#popup_box ul').empty()
			cntcd_display(data)
		})
		
		let data = [ { img : 'jp', cntcd : 'JPY', curr : '일본 엔', flag : '' },
					{ img : 'cn', cntcd : 'CNY', curr : '중국 위안', flag : '' },
					{ img : 'us', cntcd : 'USD', curr : '미국 달러', flag : '' },
					{ img : 'sg', cntcd : 'SGD', curr : '싱가포르 달러', flag : '' },
					{ img : 'au', cntcd : 'AUD', curr : '호주 달러', flag : '' },
					{ img : 'gb', cntcd : 'GBP', curr : '영국 파운드', flag : '' },
					{ img : 'np', cntcd : 'NPR', curr : '네팔 루피', flag : '' },
					{ img : 'be', cntcd : 'EUR', curr : '벨기에 유로', flag : '' },
					{ img : 'fr', cntcd : 'EUR', curr : '프랑스 유로', flag : '' },
					{ img : 'de', cntcd : 'EUR', curr : '독일 유로', flag : '' },
					{ img : 'it', cntcd : 'EUR', curr : '이탈리아 유로', flag : '' },
					{ img : 'nl', cntcd : 'EUR', curr : '네덜란드 유로', flag : '' },
					{ img : 'pt', cntcd : 'EUR', curr : '포르투갈 유로', flag : '' },
					{ img : 'es', cntcd : 'EUR', curr : '스페인 유로', flag : '' }]
		
		$('#popup_box input').keyup(()=>{
			filter(data)			
		})

		$('#popup-root .moin-close')
		.click(e=>{
			e.preventDefault()
			$('#popup-root')
			.hide()
		})
	}
	
	let filter =x=>{
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
			$(`<li><img src="https://img.themoin.com/public/img/circle-flag-${j.img}.svg"><a><p>${j.cntcd}</p><p>${j.curr}</p></a></li>`)
			.appendTo('#popup_box ul')
			.click(()=>{
				$('#popup-root')
				.hide()
				$('#popup_box input').val('')
				
				$('.form-calculator .amount-row .receive p').text(`${j.curr.substring(0, j.curr.indexOf(' '))}`)
				$('.form-calculator .amount-row .receive h3').text(`${j.cntcd}`)
				
				if( j.flag === 'mypage'){
					$('#chart')
					.html(`<canvas id="canvas" style="width:70%; height:110px"></canvas>`)
					$.getScript(line_graph_js)
				}
				else{
					exrate.onCreate()
				}
			})
		})
	}
	return { onCreate }
})()
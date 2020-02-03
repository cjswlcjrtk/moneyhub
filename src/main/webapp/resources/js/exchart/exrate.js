var exrate = exrate || {}
exrate =(()=>{
	let _, js,deal
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		deal = $.deal()
	}
	
	let onCreate =()=>{
		init()
		rate_calc()
	}
	let rate_calc =()=>{
		let receive_cntcd = $('.form-calculator .amount-row .receive h3').text(),
			send_cntcd = $('.form-calculator .amount-row .send h3').text(),
			cntcd,
			exrate_arr = []
		
		if( receive_cntcd === 'KRW'){
			cntcd = send_cntcd
		}else{
			cntcd = receive_cntcd
		}
	}
		
		$.getJSON( '/web/exrate/search/cntcd/' + cntcd, d=>{	
			$.each(d.exlist.reverse(), (i, j)=>{
				exrate_arr.push(parseFloat(j.exrate))
			})
			deal.exrate = exrate_arr[0]
			receive_value_calc()
			$('.form-calculator .amount-row input.send-amount').keyup(()=>{
				receive_value_calc()
			})
			sessionStorage.setItem('deal',JSON.stringify(deal))
		})
		let exrate = $.exrate()
/*		switch (receive_cntcd) {
		case 'KRW':
			cntcd = send_cntcd
			break;
		case 'USD':
			cntcd = exrate.usd
			break;
		case 'EUR':
			cntcd = exrate.eur
			break;
		case 'CNY':
			cntcd = exrate.cny
			break;
		case 'JPY':
			cntcd = exrate.jpy
			break;
		case 'AUD':
			cntcd = exrate.aud
			break;
		}	
		
		receive_value_calc()
		$('.form-calculator .amount-row input.send-amount').keyup(()=>{
			receive_value_calc()
		})
		*/
		//	수수료 1.5%
		let receive_value_calc =()=>{
			let receive_value = common.comma_remove($('.form-calculator .amount-row input.send-amount').val()) 
		
			if( receive_cntcd === 'KRW'){
				receive_value = receive_value * exrate_arr[exrate_arr.length -1] //* 0.985
			}
			else{
				receive_value = receive_value / exrate_arr[exrate_arr.length -1] //* 0.985
			}
			
			$('.form-calculator .amount-row input.receive-amount').val(common.comma_create(receive_value.toFixed(2)))

			deal.amount = $('.form-calculator .amount-row input.send-amount').val()
			sessionStorage.setItem('deal',JSON.stringify(deal))
		}
	return { onCreate }
})()
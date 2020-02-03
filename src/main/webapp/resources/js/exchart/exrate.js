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
		
		//	수수료 1.5%
		let receive_value_calc =()=>{
			if( receive_cntcd === 'KRW'){
				let receive_value = $('.form-calculator .amount-row input.send-amount').val().replace(/,/gi, '') 
									* exrate_arr[exrate_arr.length -1] * 0.985
			
				$('.form-calculator .amount-row input.receive-amount').val(comma_create(receive_value.toFixed(2)))
			}
			else{
				let receive_value = $('.form-calculator .amount-row input.send-amount').val().replace(/,/gi, '') 
									/ exrate_arr[exrate_arr.length -1] * 0.985
			
				$('.form-calculator .amount-row input.receive-amount').val(comma_create(receive_value.toFixed(2)))
			}
			// * 0.985
			deal.amount = $('.form-calculator .amount-row input.send-amount').val()
			sessionStorage.setItem('deal',JSON.stringify(deal))
		}
		
		let comma_create =x=>{
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		}
	}
	return { onCreate }
})()
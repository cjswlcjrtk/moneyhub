var exrate = exrate || {}
exrate =(()=>{
	let _, js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
	}
	
	let onCreate =()=>{
		init()
		rate_calc()
	}
	let rate_calc =()=>{
//		alert($('#remit_box .amount-row .receive h3').text())
		let cntcd = $('.form-calculator .amount-row .receive h3').text()
		let exrate_arr = []
		$.getJSON( '/web/exrate/search/' + cntcd, d=>{	
			$.each(d.exlist.reverse(), (i, j)=>{
				exrate_arr.push(parseFloat(j.exrate))
			})

			receive_value_calc()
			$('.form-calculator .amount-row input.send-amount').keyup(()=>{
				receive_value_calc()
			})
		})
		
		//	수수료 1.5%
		let receive_value_calc =()=>{
			let receive_value = $('.form-calculator .amount-row input.send-amount').val().replace(/,/gi, '') 
								/ exrate_arr[exrate_arr.length -1] * 0.985 + ""
			
			$('.form-calculator .amount-row input.receive-amount').val(numberFormat(receive_value.substring(0, receive_value.indexOf('.') + 3)))
		}
		
		let numberFormat =x=>{
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		}
	}
	return { onCreate }
})()
"use strict"
var common = common || {}
common = (function(){
	
	return {
		comma_create : function(x){
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		},
		comma_remove : function(x){
			return x.replace(/,/gi, '')
		},
		popup_close : function(x){
			
			$('#popup-' + x + ' .moin-close')
			.click(e=>{
				e.preventDefault()
				$('#popup-' + x)
				.hide()
			})
		},
		clock_format : function(){
			let date = new Date();
			let yyyy = date.getFullYear()
			let mm = (date.getMonth() + 1).toString()
			let dd = date.getDate().toString()
			
			mm = mm[1] ? mm : "0" + mm[0]
			dd = dd[1] ? dd : "0" + dd[0]

			return `${yyyy}-${mm}-${dd}`
		},
		remit_send : function(){
			let send = $('.form-calculator .amount-row input.send-amount')
			let send_value = common.comma_create(common.comma_remove(send.val()))	
			send.val(send_value)
		},
		remit_send_focusout : function(){
			common.remit_send()
			$('.form-calculator .amount-row input.send-amount')
			.focusout(()=>{
				common.remit_send()
			})
		},
		receive_value_calc : function(x){
			let receive_value = common.comma_remove($('.form-calculator .amount-row input.send-amount').val()) 
				receive_value = receive_value * x //* 0.985
			$('.form-calculator .amount-row input.receive-amount').val(common.comma_create(receive_value.toFixed(0)))

		}
			
	}
}())
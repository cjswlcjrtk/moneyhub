"use strict"
var tables_mgmt = tables_mgmt || {}
tables_mgmt =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, disableDays
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		disableDays = []
		
	}
	let onCreate =()=>{
		init()
		setContentView()
	}
	let setContentView =()=>{
		$('div.themoin-landing').empty()
		$('<table id="tab"><tr></tr></table>')
		.css({
			width : '80%',
			height : '900px',
			border : '1px solid black',
			margin : '0 auto',
			'margin-top' : '30px'
		})
		.appendTo('div.themoin-landing')	// body에 오버로딩
		$('<td/>', {id : 'left'})	//	<td/> = <td></td>
		.css({
			width : '20%',
			height : '100%',
			border : '1px solid black',
			margin : '0 auto',
			'vertical-align' : 'top',
			'text-align' : 'center'
		})
		.appendTo('tr')
		$('<td/>', {id : 'right'})
		.css({
			width : '80%',
			height : '100%',
			border : '1px solid black',
			padding : '0 auto',
			'text-align' : 'center',
			'vertical-align' : 'top'
		})
		.appendTo('tr')
		let arr = ['FAQ 관리', 'EXRATE 관리', 'DATEPICKER 관리', 'CUSTOMER 관리','수수료내역Table','수수료Table', 
               '거래Table', '관리자Table', '고객계좌정보Table', '수취내역Table','거래내역Table']
		$.each(arr, (i, j)=>{
			$('<div/>')
			.text(j)		// text(j) - setter
			.css({
				width : '100%',
				height : '10%',
				border : '1px solid black'
			})
			.appendTo('#left')
				.click(function(){
					$(this).css({'background-color':'yellow'})
					$(this).siblings().css({'background-color':'white'})
					switch($(this).text()){
					case 'FAQ 관리' :
						faq_mgmt()
						break
					case 'EXRATE 관리' :
						exrate_mgmt()
						break
					case 'DATEPICKER 관리' :
						datepicker_mgmt()
						break
					case 'CUSTOMER 관리' :
						customer_mgmt()
						break	
					case '관리자Table' :
						admin_mgmt()
						break
					case '고객계좌정보Table' :
						account_mgmt()
						break
					case '거래Table' :
						trade_mgmt()  
						break	
					case '거래내역Table' :
						trade_hr_mgmt()
						break	
					case '수취내역Table' :
						receipt_mgmt()
						break
					case '수수료내역Table' :
						fee_mgmt()
						break	
					case '수수료Table' :
						feedb_mgmt()
			            break
					}
			})
		})
	}
	
	let datepicker_mgmt =()=>{
		$('#right').empty()
		$(`<br><br><h3><a>DATEPICKER 테이블 생성</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + '/datepicker/create/table', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>DATEPICKER 휴일 Insert</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			
		})
		$(`<h3><a>DATEPICKER 테이블  DATA 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/datepicker/truncate/table`, d=>{
				alert(`테이블 DATA 삭제 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>DATEPICKER 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/datepicker/delete/table`, d=>{
				alert(`테이블 삭제 성공여부 : ${d.result}`)
			})
		})
	}
	
	let faq_mgmt =()=>{
		$('#right').empty()
		$(`<br><br><h3><a>FAQ 테이블 생성</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + '/faq/create/table', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>FAQ Insert</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/tx/insert/faqlist`, d=>{
				alert(`테이블 DATA Insert 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>FAQ 테이블  DATA 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/faq/truncate/table`, d=>{
				alert(`테이블 DATA 삭제 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>FAQ 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/faq/delete/table`, d=>{
				alert(`테이블 삭제 성공여부 : ${d.result}`)
			})
		})
	}
	
	let exrate_mgmt =()=>{
		$('#right').empty()
		$(`<br><br><h3><a>EARATE 테이블 생성</a></h3><br><br>`)
		.appendTo('#right')
		.click(()=>{
			$.getJSON( _ + `/exrate/create/table`, d=>{
				alert(`테이블 성공 여부 : ${d.result}`)
			})
		})
		$(`<h3><a>EARATE API & Insert</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
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
		})
		$(`<h3><a>EARATE 테이블  chart test용 data 삽입</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/tx/insert/exratelist`, d=>{
				alert(`테이블 DATA 삽입 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>EARATE 테이블  DATA 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/exrate/truncate/table`, d=>{
				alert(`테이블 DATA 삭제 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>EARATE 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/exrate/delete/table`, d=>{
				alert(`테이블 삭제 성공여부 : ${d.result}`)
			})
		})
	}
	
	let customer_mgmt =()=>{
		$('#right').empty()
		$(`<br><br><h3><a>CUSTOMER 테이블 생성</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + '/crudtable/create/createCustomer', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>CUSTOMER Insert</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/crudtable/insert/insertCustomer`, d=>{
				alert(`테이블 DATA Insert 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>CUSTOMER 테이블  DATA 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/crudtable/truncate/truncateCustomer`, d=>{
				alert(`테이블 DATA 삭제 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>CUSTOMER 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/crudtable/drop/dropCustomer`, d=>{
				alert(`테이블 삭제 성공여부 : ${d.result}`)
			})
		})
	}
	
	let fee_mgmt =()=>{
		$('#right').empty()
		$(`<br><br><h3><a>수수료 내역 테이블 생성</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + '/crudtable/create/createFee', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		
		$(`<h3><a>수수료 내역 Insert</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/crudtable/insert/insertFee`, d=>{
				alert(`테이블 DATA Insert 성공여부 : ${d.result}`)
			})
		})
		
		$(`<h3><a>수수료 내역 테이블  DATA 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/crudtable/truncate/truncateFee`, d=>{
				alert(`테이블 DATA 삭제 성공여부 : ${d.result}`)
			})
			
		})
		
		$(`<h3><a>수수료 내역 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/crudtable/drop/dropFee`, d=>{
				alert(`테이블 삭제 성공여부 : ${d.result}`)
			})
			
		})
	}
	
	let feedb_mgmt =()=>{
		$('#right').empty()
		$(`<br><br><h3><a>수수료 테이블 생성 및 인서트</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + '/crudtable/create/createFeeDB', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		
		$(`<h3><a>수수료 테이블  DATA 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/crudtable/truncate/truncateFeeDB`, d=>{
				alert(`테이블 DATA 삭제 성공여부 : ${d.result}`)
			})
			
		})
		
		$(`<h3><a>수수료 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/crudtable/drop/dropFeeDB`, d=>{
				alert(`테이블 삭제 성공여부 : ${d.result}`)
			})
			
		})
	}

	let admin_mgmt =()=>{
		$('#right').empty()
		$(`<br><br><h3><a>ADMIN 테이블 생성 및 계정 생성</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + '/crudtable/create/createAdmin', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>ADMIN 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/crudtable/drop/dropAdmin`, d=>{
				alert(`테이블 삭제 성공여부 : ${d.result}`)
			})
		})
	}

	let trade_mgmt=()=>{
		$('#right').empty()
		$(`<br><br><h3><a>TRD 테이블 생성</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + '/remtable/create/table/trd', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>TRD 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/remtable/delete/table/trd`, d=>{
				alert(`테이블 삭제 성공여부 : ${d.result}`)
			})
		})
	}
	let trade_hr_mgmt=()=>{
		$('#right').empty()
		$(`<br><br><h3><a>TRDHR 테이블 생성</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + '/remtable/create/table/trdhr', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>TRDHR 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/remtable/delete/table/trdhr`, d=>{
				alert(`테이블 삭제 성공여부 : ${d.result}`)
			})
		})
	}
	let receipt_mgmt=()=>{
		$('#right').empty()
		$(`<br><br><h3><a>RCPT 테이블 생성</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + '/remtable/create/table/rcpt', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		$(`<h3><a>RCPT 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/remtable/delete/table/rcpt`, d=>{
				alert(`테이블 삭제 성공여부 : ${d.result}`)
			})
		})
	}
	return { onCreate }
})()
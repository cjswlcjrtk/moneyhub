"use strict"
var tables_mgmt = tables_mgmt || {}
tables_mgmt =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
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
		let arr = ['FAQ 관리', 'EXRATE 관리', 'CUSTOMER 관리',
			'수수료내역Table', '거래Table', '관리자Table', '고객계좌정보Table', '수취내역Table']
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
			//		let that = $(this).attr('name')
					$(this).css({'background-color':'yellow'})
					$(this).siblings().css({'background-color':'white'})
					switch($(this).text()){
					case 'FAQ 관리' :
						faq_mgmt()
						break
					case 'EXRATE 관리' :
						exrate_mgmt()
						break
					case 'CUSTOMER 관리' :
						customer_mgmt()
						break	
					case '수수료내역Table' :
						fee_db_mgmt()
						break	
					case '거래Table' :
						trade_mgmt()
						break	
					case '관리자Table' :
						admin_mgmt()
						break
					case '고객계좌정보Table' :
						account_mgmt()
						break
					case '수취내역Table' :
						receipt_mgmt()
						break
					}
			})
		})
	}
	let faq_mgmt =()=>{
		$('#right').empty()
		$(`<br><br><h3><a>FAQ 테이블 생성</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + '/faqs/create/table', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		
		$(`<h3><a>FAQ Insert</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/tx/insert/kakaofaq`, d=>{
				alert(`테이블 DATA Insert 성공여부 : ${d.result}`)
			})
		})
		
		$(`<h3><a>FAQ 테이블  DATA 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/faqs/truncate/table`, d=>{
				alert(`테이블 DATA 삭제 성공여부 : ${d.result}`)
			})
			
		})
		
		$(`<h3><a>FAQ 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/faqs/delete/table`, d=>{
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
					url : _ + `/exrate/insert`,
					type : 'GET',
					data : { 'list' : arr },
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
	let fee_db_mgmt =()=>{
		$('#right').empty()
		$(`<br><br><h3><a>수수료 내역 테이블 생성</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + '/crudtable/create/createFeeDB', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		
		$(`<h3><a>수수료 내역 Insert</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/crudtable/insert/insertFeeDB`, d=>{
				alert(`테이블 DATA Insert 성공여부 : ${d.result}`)
			})
		})
		
		$(`<h3><a>수수료 내역 테이블  DATA 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/crudtable/truncate/truncateFeeDB`, d=>{
				alert(`테이블 DATA 삭제 성공여부 : ${d.result}`)
			})
			
		})
		
		$(`<h3><a>수수료 내역 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/crudtable/drop/dropFeeDB`, d=>{
				alert(`테이블 삭제 성공여부 : ${d.result}`)
			})
			
		})
	}
	return { onCreate }
})()
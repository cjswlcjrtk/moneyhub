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
		let arr = ['FAQ 관리', 'EXRATE 관리']
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

			$.getJSON( _ + '/faq/create/table', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		
/*		$(`<h3><a>FAQ Crawling & Insert</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/tx/crawling/faqlist`, d=>{
				alert(`테이블 Crawling & Insert 성공여부 : ${d.result}`)
			})
		})*/
		
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
/*	let exchange_rate =()=>{
		$('#right').empty()
		$.getJSON('https://api.manana.kr/exchange/rate/KRW/'
				+'KRW,USD,JPY,EUR,CNY,HKD,SGD,TWD,THB,VND,PHP,AUD,NZD,CAD,GBP.json', d=>{
			$.each(d, (i, j)=>{
				$(`<div class="box">
						<div class="question">
							<p>날짜 : ${j.date.substr(0, 10)}, 
							통화명 : ${j.name.substr(0, 3)},
							환율 : ${j.rate.toFixed(2)}</p>
							
				       </div>
				       <div class="answer">
							
						</div>
					</div>`)
			    .appendTo('#right')
			})
		})
	}*/
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
	return { onCreate }
})()
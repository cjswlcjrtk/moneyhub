var exchange_test = exchange_test || {}
exchange_test =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'

	let _, js, mypage_vue_js, global_map_js, exth, exrateSess, profitsChart, 
		bdate_exist_flag, deposit, getCno, line_graph_js, disableDays, dpkMinFlag,
		getMapFlag, saveFlag, weekday
		
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		global_map_js = js + '/maps/global_map.js'
		line_graph_js = js + '/exchart/line_graph.js'
		exth = []
		exrateSess = {}
		profitsChart = {}
		bdate_exist_flag = false
		deposit = 100000000
		getCno = $.cusInfo().cno
		getMapFlag = false
		saveFlag = false
		dpkMinFlag = false
		
		exrateSess.flag = 'default'
		sessionStorage.setItem('exrateSess', JSON.stringify(exrateSess))
		disableDays = []
		weekday = []
	}
	let onCreate =()=>{
		init()
		$('.themoin-main').empty()
		$('.themoin-footer').empty()
		
		$.when(
			$.getScript(mypage_vue_js)
		)
		.done(()=>{
			setContentView()
			
			getHoliday()
			.then(function(){
				datepicker_show()
			})
			.catch(function(e){
				alert('시스템 확인 중입니다.')
			})
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})	
	}
	let onCreate2 =()=>{
		setContentView2()
		retention_amount()
		
		datepicker_show()
	}
	
	let setContentView =()=>{
		$('.themoin-main')
		.html(mypage_vue.exchange_test1())
		
		$('#exchange_datepicker')
		.css({
			height : '250px',
			margin : '10px auto',
			'text-align' : 'center'
		})	
		
		$('#test_mode')
		.css({ width : '100%'})
		
		/*$('<button/>')
		.text('모드 1')
		.addClass('btn btn-lg btn-info')
		.appendTo('#test_mode_1')
		.click(()=>{
			if($.exrateSess().flag === 'select2'){
				alert('준비중입니다.... 모드2를 선택해 주세요.')
			}else{
				alert('시작일을 선택해 주세요.')
			}
		})*/
		
		$('<button/>')
		.text('모의 환전 시작')
		.addClass('btn btn-lg btn-success')
		.css({ width : '240px', 'font-weight' : 'bold' })
		.appendTo('#test_mode')
		.click(()=>{
			if($.exrateSess().flag === 'select2'){
				getMapFlag = true
				dpkMinFlag = true
				onCreate2()
			}else{
				alert('시작일을 선택해 주세요.')
			}
		})
	}
	
	let setContentView2 =()=>{
		$('.themoin-main')
		.html(mypage_vue.exchange_test2())
		
		sessionStorage.setItem('chartFlag', 'historyChart')
		$.getScript(line_graph_js)
		
		$('#popup-exchange')
		.html(mypage_vue.exchange_popup())
		.hide()
		
		$('#exchange_datepicker')
		.css({
			height : '60px',
			margin : '10px auto',
			'text-align' : 'left',
			'padding-right' : '20%'
		})	
	}
	
	let exchange_popup =()=>{
		
		$('<button/>')
		.text('환전하기')
		.css({
			width: '100%',
		    height: '70px',
		    'background-color': '#0077c8',
		    'text-align': 'center',
		    'line-height': '1',
		    color: '#ffffff',
		    'margin-top': '20px'	// 11px
		})	
		.appendTo('#exchange_box')
		.click(()=>{
			sessionStorage.setItem('exchangeCount', 1)
			
			let receive_currencies = $('#exchange_' + $('#exchange_box .amount-row .receive h3').text()),
				send_currencies = $('#exchange_' + $('#exchange_box .amount-row .send h3').text()),
				sub_calc = parseFloat(common.comma_remove(send_currencies.text()))
							- parseFloat(common.comma_remove($('#exchange_send_amount').val())),
				exchange_KRW = $('#exchange_KRW')
		
			if(sub_calc >= 0){
				send_currencies
				.text(common.comma_create(sub_calc.toFixed(2)))
				
				let add_calc = parseFloat(common.comma_remove(receive_currencies.text()))
							+ parseFloat(common.comma_remove($('#exchange_box input.receive-amount').val()))
					
				receive_currencies
				.text(common.comma_create(add_calc.toFixed(2)))
			}else{
				alert(`${$('#exchange_box .amount-row .send h3').text()} 보유 금액이 부족합니다.`)
			}
				
			if( exchange_KRW.text().indexOf('.') > -1 ){
				exchange_KRW.text(exchange_KRW.text().substring(0, exchange_KRW.text().indexOf('.')))
			}
			common.total_amount_calc()

			$('#popup-exchange')
			.hide()
		})
	
		$('#popup-exchange .moin-close')
		.click(e=>{
			e.preventDefault()
			$('#cntcd_slide').css({ 'display': 'none' })
			$('#popup-exchange').hide()
		})
	}
	
	let retention_amount =()=>{
		let data = [ { id: 'total_money', currencies : "총 보유금액", money: common.comma_create(deposit), cntcd : 'KRW' },
			{ id: 'exchange_KRW', currencies : "대한민국 한화", money: common.comma_create(deposit), cntcd : 'KRW' },
			{ id: 'exchange_USD', currencies : "미국 달러", money: '0', cntcd : 'USD' },
			{ id: 'exchange_AUD', currencies : "호주 달러", money: '0', cntcd : 'AUD' },
			{ id: 'exchange_EUR', currencies : "유럽 유로", money: '0', cntcd : 'EUR' },
			{ id: 'exchange_CNY', currencies : "중국 위안", money: '0', cntcd : 'CNY' },
			{ id: 'exchange_JPY', currencies : "일본 엔", money: '0', cntcd : 'JPY' }]

		$.each(data, (i,j)=>{
			$(`<li style="width:310px;"><p style="font-size : 18px; width:115px; margin-bottom:0;">${j.currencies}</p>
					<p id="${j.id}" style="color : #2dccd3; font-size : 18px; margin-right : 10px; min-width:120px; width:25%; text-align: right; margin-bottom:0;">${common.comma_create(j.money)}</p>
					<p class="fs-block" style="font-size : 18px; margin-bottom:0;">${j.cntcd}</p>
				</li>`)
			.css({
				'font-size' : '18px'
			})
			.appendTo('#amount ol')
		})
		
			$('#amount')
			.css({ float : 'left'})
			
			$('#init_btn').css({
				width:'50%',
				float : 'left',
				'text-align' : 'right',
				'padding-right': '8%'
			})
			
			$('<button/>')
			.text('초기화')
			.addClass('btn btn-lg btn-primary')
			.appendTo('#init_btn')
			.click(()=>{
				sessionStorage.setItem('exchangeCount', 0)
				exth = []
				amount_init()
				$('#exchange_test_chart1').empty()
				init_Exth()
				exchange_test.onCreate()
			})
			
			$('#save_btn').css({
				width:'50%',
				float : 'left',
				'text-align' : 'left',
				'padding-left' : '8%'
			})
			
			$('<button/>')
			.text('저   장')
			.addClass('btn btn-lg btn-primary')
			.css({ width: '88px' })
			.appendTo('#save_btn')
			.click(()=>{
				init_Exth()
				saveFlag = true
				amount_history()
				common.object_sort(exth)
				sessionStorage.setItem('exchangeCount', 0)
				$.ajax({
					url : `${_}/exth/insert/${deposit}`,
					type : 'POST',
					data : JSON.stringify(exth),
					dataType : 'JSON',
					contentType : 'application/json',
					success : d=>{
						saveFlag = false
						profitsChart= d.exth
						sessionStorage.setItem('profitsChart', JSON.stringify(profitsChart))
						sessionStorage.setItem('chartFlag', 'profitsChart')
	
						$('#exchange_test_chart1')
						.html(`<p style="font-size: 24px; font-weight: bold; color: black;">환전일별 수익금 차트</p>
					 	      	<canvas id="canvas" style="width:100%; height: 210px; max-height: 215px; "></canvas>`)
						$.getScript(line_graph_js)
					},
					error : e=>{
						alert('시스템 확인 중입니다.')
					}
				})
			})
	}
	let init_Exth =()=>{
		$.ajax({
			url : `${_}/exth/delete/${getCno}`,
			type : 'DELETE',
			contentType : 'application/json',
			success : ()=>{

			},
			error : e=>{
				alert('시스템 확인 중입니다.')
			}
		})
	}
	
	let getMapGraph =()=>{
		if(getMapFlag === true){
			getMap()
			getGraph()
		}else{
			$('#exchange_test_header b')
			.text(`모의 환전 시작일 : ${$.exrateSess().bdate}`)
		}
	}
	
	let getMap =()=>{
		$('#world_map')
		.html(`<div class="mapcontainer">
			        <div class="map">
			            <span></span>
			        </div>
			    </div>`)
		$.getScript($.js() + '/maps/global_map.js')
	}
	
	let getGraph =()=>{
		$('#exchange_test_chart2')
		.html(`<div style="width:100%;height:240px;float:left;border-bottom: 1px solid black; padding:20px"><canvas id="canvas2" style="width:100%; height: 190px; max-height: 200px;"></canvas></div>
				<div style="width:50%;height:240px;float:left;border-bottom: 1px solid black;border-right: 1px solid black;padding :20px;"><canvas id="canvas3" style="width:100%; height: 190px; max-height: 200px;"></canvas></div>
				<div style="width:50%;height:240px;float:left;border-bottom: 1px solid black;;padding:20px;"><canvas id="canvas4" style="width:100%; height: 190px; max-height: 200px;"></canvas></div>
				<div style="width:50%;height:240px;float:left;border-right: 1px solid black;padding:20px;"><canvas id="canvas5" style="width:100%; height: 190px; max-height: 200px;"></canvas></div>
				<div style="width:50%;height:240px;float:left;padding:20px;"><canvas id="canvas6" style="width:100%; height: 190px; max-height: 200px;"></canvas></div>`)
		sessionStorage.setItem('chartFlag', 'historyChart')
		$.getScript(line_graph_js)
	}
	
	function getHoliday (){
		return new Promise(function(resolve){
			$.getJSON(`${_}/datepicker/selectall`, d=>{
				if(d){
					$.each(d.dpk, (i, j)=>{
						disableDays[i] = j.ddate
					})
					resolve()
				}
			})
		})
	}
	
	let datepicker_show =()=>{
		
		$('<button/>')
		.text('다음')
		.addClass('btn btn-sm btn-primary')
		.appendTo('#next_day_btn')
		.click(()=>{
		})
		
		datepicker_kr()	
		datepicker_option()
		
		$('#exchange_datepicker img')
		.css({ float: 'left', 'margin-top': '10px' })
		.click(()=>{
			$('#ui-datepicker-div').css({display:'block', 'vertical-align': 'middle'})
		})
		
		$('#datepicker').datepicker()
		.change(()=>{
			if(exrateSess.bdate !== $('#datepicker').val() ){
				amount_history()
				exrateSess.flag = 'select2'
				exrateSess.bdate = $('#datepicker').val()
				sessionStorage.setItem('exrateSess', JSON.stringify(exrateSess));
				
				getMapGraph()
				weekday = []
			}
		})
	}
	
	let datepicker_kr =()=>{
		$.datepicker.setDefaults({
	        dateFormat: 'yymmdd',
	        prevText: '이전 달',
	        nextText: '다음 달',
	        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	        showMonthAfterYear: true,
	        yearSuffix: '년',
	        yearRange: "2019:2020"
	    })
	}
	let datepicker_option =()=>{
		weekday = []
		$('#datepicker').datepicker({
			// datepicker 애니메이션 타입
			// option 종류 : "show" , "slideDown", "fadeIn", "blind", "bounce", "clip", "drop", "fold", "slide"
			showAnim : "slideDown",
			// 해당 월의 다른 월의 날짜가 보이는 여부, 예를 들면 10월이면 전후에 9월 마지막과 11월의 시작 일이 보이는 여부입니다. 즉, 달력이 꽉 차 보이게 하는 것
			showOtherMonths: true,
			// 선택 여부 (showOtherMonths 옵션과 같이 일치시키지 않으면 에러가 발생합니다.)
			selectOtherMonths: true,
			// 달력 밑에 오늘과 닫기 버튼이 보인다.
			showButtonPanel: false,
			// 년 월이 셀렉트 박스로 표현 되어서 선택할 수 있다.
			changeMonth: false,
			changeYear: false,
			// 한번에 보이는 개월 수
			numberOfMonths: 1,
			// 데이터 포멧
			dateFormat: "yy-mm-dd",
			// 텍스트 박스 옆의 달력 포시
			showOn: "button",
			//이미지 타입인지 버튼 타입인지 설정
			buttonImageOnly: true,
			// 이미지 경로
			buttonImage: "https://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
			// 버튼 타입이면 버튼 값
			buttonText: "Select date",
			// alt 데이터 포멧
			altFormat: "DD, d MM, yy",
			// 선택 가능한 날짜(수 형식) - 현재 기준 -20일
	//		minDate: $('#datepicker').val(),
			// 선택 가능한 최대 날짜(문자 형식) - 현재 기준 +1월 +20일
			maxDate: "0M 0D",
			// 주 표시
//			showWeek: true
//			tooltips : { today: "Today" }, 안먹힘
			 
			beforeShowDay: function(date){
				let day = date.getDay();
			   	let thismonth = date.getMonth()+1;
				let thisday = date.getDate();

				if(thismonth < 10){
					thismonth = "0"+thismonth;
				}
				if(thisday < 10){
					thisday = "0"+thisday;
				}
				
			    ymd = date.getFullYear() + "-" + thismonth + "-" + thisday;
			    for(let i=0; i<disableDays.length; i++){
			    	if ( $.inArray(ymd, disableDays) != -1 ) {		 // 공휴일 날짜 출력
				        return [false, 'Highlighted', ymd]	
				    }
			    }
			    if((day != 0 && day != 6)){				// 평일 날짜 출력
			    	weekday.push(ymd)
			    	return [true]
			    }
			    return [false]
			},onClose: function( selectedDate ) {    
                // 시작일(fromDate) datepicker가 닫힐때
                // 종료일(toDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
				if(getMapFlag === true){
					if( selectedDate !== '' ){
						$("#datepicker").datepicker( "option", "minDate", selectedDate )
					}else{
						$("#datepicker").datepicker( "option", "minDate", $.exrateSess().bdate )
					}
					
					$('#exchange_datepicker img')
	    			.css({ float: 'left', 'margin-top': '10px' })
				}
            }
		})
		if( dpkMinFlag === true){
			$('#datepicker').datepicker('setDate', $.exrateSess().bdate)
			$("#datepicker").datepicker( "option", "minDate", $.exrateSess().bdate )
		}
	}

	let amount_init =()=>{
		$('#total_money').text(common.comma_create(100000000))
		$('#exchange_KRW').text(common.comma_create(100000000))
		$('#exchange_USD').text(0)
		$('#exchange_AUD').text(0)
		$('#exchange_EUR').text(0)
		$('#exchange_CNY').text(0)
		$('#exchange_JPY').text(0)
	}
	let amount_history =()=>{
		let bdate_exist
		if($.exchangeCount() > 0 || saveFlag === true){	// 환전버튼 클릭 시 ++
			$.each(exth, (i, j)=>{
				if(exrateSess.bdate === j.bdate ){	//	날짜가 같을 시 오버라이딩 시키기
					bdate_exist_flag = true
					bdate_exist = i
				}
			})
			if( bdate_exist_flag === true ){
				exth[bdate_exist] = { bdate : exrateSess.bdate,
						total : common.comma_remove($('#total_money').text()), 
						krw : common.comma_remove($('#exchange_KRW').text()), 
						usd : common.comma_remove($('#exchange_USD').text()), 
						aud : common.comma_remove($('#exchange_AUD').text()), 
						eur : common.comma_remove($('#exchange_EUR').text()), 
						cny : common.comma_remove($('#exchange_CNY').text()), 
						jpy : common.comma_remove($('#exchange_JPY').text()),
						cno : getCno }
				bdate_exist_flag = false
			}else{
				exth.push({	bdate : exrateSess.bdate,
						total : common.comma_remove($('#total_money').text()), 
						krw : common.comma_remove($('#exchange_KRW').text()), 
						usd : common.comma_remove($('#exchange_USD').text()), 
						aud : common.comma_remove($('#exchange_AUD').text()), 
						eur : common.comma_remove($('#exchange_EUR').text()), 
						cny : common.comma_remove($('#exchange_CNY').text()), 
						jpy : common.comma_remove($('#exchange_JPY').text()),
						cno : getCno	})
			}
		}
	}
	return { onCreate, exchange_popup }
})()
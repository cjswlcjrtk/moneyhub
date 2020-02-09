"use strict"
var mypage = mypage || {}

mypage =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cmm_vue_js, nav_vue_js, main_vue_js, mypage_vue_js, 
		auth_js, compo_js, event_js, faq_js, main_class, withdrawal_js,
		line_graph_js,deal,guide_recieve_js, remit_box_js,clock

	let init =()=>{
		_ = $.ctx()
		js = $.js()
		deal = $.deal()
		cmm_vue_js = js + '/vue/cmm_vue.js'
		nav_vue_js = js + '/vue/nav_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		mypage_vue_js = js + '/vue/mypage_vue.js'
		compo_js = js + '/cmm/compo.js'
		event_js = js + '/cmm/event.js'
		faq_js = js + '/cmm/faq.js'
		guide_recieve_js = js + '/cmm/guide_recieve.js'
		main_class = 'themoin-main'
		withdrawal_js = '/mypage/withdrawal.js'
		line_graph_js = js + '/exchart/line_graph.js'
		remit_box_js = js + '/remit/remit_box.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cmm_vue_js),
			$.getScript(nav_vue_js),
			$.getScript(main_vue_js),
			$.getScript(mypage_vue_js),
			$.getScript(compo_js),
			$.getScript(event_js),
			$.getScript(faq_js),
			$.getScript(guide_recieve_js),
			$.getScript(remit_box_js)
		)
		.done(()=>{
			setContentView()
			page_move()	
			setInterval(clock_excute, 1000)
			setInterval(exchange_API, 1000 * 60 * 60 * 12) // 1000 * 60 : 1분, 
			remit_box.onCreate({ flag : 'mypage', cntcd : '' })
			remit_list({ nowPage : 0})

		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=>{
		$('#root')
		.html(nav_vue.logined_nav(_))
		.append(main_vue.logined_main())
		.append(cmm_vue.footer())
		$.getScript(line_graph_js)
		
		$('<button/>')
		.text('송금하기')
		.addClass('index-send-btn moin-body')
		.appendTo('#remit_box')
		.click(()=>{
			foreignRemit.onCreate()
		})

		$('#popup-exchange').empty()

	}

	let page_move =()=>{
		$('#mgmt')
		.click(()=>{
			sidebar.onCreate()
			$('html').scrollTop(0);
		})
		
		$('#logout')
		.click(()=>{
			sessionStorage.setItem('cus', null); // 로그아웃 클릭하면 세션에 담긴 고객정보를 비운다. 
			app.onCreate()
		})
		$('#compo')
		.click(()=>{
			compo.onCreate(main_class)
		})
		
		$('#event')
		.click(()=>{
			event.onCreate(main_class)
		})
		
		$('#faq')
		.click(()=>{
			faq.onCreate(main_class)
		})
		
		$('#guide')
		.click(()=>{
			guide_recieve.onCreate(main_class)
		})
		
		$('.themoin-header a.logo')
		.click(()=>{
			mypage.onCreate()
			$('html').scrollTop(0);
		})
	}
	let clock_excute =()=>{
		clock = new Clock()
		$('#clock').text(`실시간 모인 환율 - ${clock.year}년 ${clock.month+1}월 ${clock.clockDate}일` +
				` ${clock.hours < 10 ? `0${clock.hours}` : clock.hours}:${clock.minutes < 10 ? `0${clock.minutes}` : clock.minutes }:${clock.seconds < 10 ? `0${clock.seconds }` : clock.seconds }`)
	}

	let exchange_API =()=>{
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
	}
	let remit_list =(x)=>{

		$.getJSON( `${_}/remit/lists/page/${x.nowPage}/search`, d=>{
			$('.remits').empty()
			
			$.each(d.trdhr, (i, j)=>{  //숙제 테이블 두개 정보 받아 넣기
				$(`<div class="themoin-main-remititem">
						<div class="simple">
							<div class="unit-flag">
								<img src="https://img.themoin.com/public/img/circle-flag-us.svg">
							</div>
							<div class="simple-nametime">
								<h3 class="username">
									<span class="fs-block" lang="en" title="a aaa a"></span>
								</h3>
								<p class="create-time">${j.bsdate}</p>
							</div>
							<div class="simple-spacer"></div>
							<div class="simple-amount">
								<div class="user-sendlistdetail-amount">
									<h3 class="user-sendlist-send">
										<span class="user-sendlist-send">${j.trdSend}</span> <span
											class="user-sendlist-sendunit">KRW</span>
									</h3>
									<img src="https://img.themoin.com/public/img/ic-next-p.png"
										class="user-sendlist-ic">
									<h3 class="user-sendlist-receive">
										<span class="user-sendlist-receive">${j.trdAmnt}</span> <span
											class="user-sendlist-receiveunit">USD</span>
									</h3>
								</div>
								<p>적용 환율 : 1 USD = ${j.exrate} KRW</p>
								<div class="send-due">
									<p>가상계좌 입금 이용 시간이 만료되었습니다.</p>
								</div>
							</div>
						</div>
					</div>`)
			    .appendTo('.remits')
			})
			let pxy = d.pager
			if(pxy.existPrev){
				$(`<button class="control disabled" disabled="">
		         	이전
		         </button>`)
		         .appendTo('.themoin-pagination')
		         .click(()=>{
		        	 mypage.remit_list({ nowPage : pxy.prevBlock})
		         })
			}
			$(`<ul class="list_paging"></ul>`)
			.appendTo('.bundle_paging') 
			for(let i = pxy.startPage; i<= pxy.endPage; i++){
				if( pxy.nowPage == i ){
					$(`<li class="on">
							<a href="#" class="link_num">
								<span class="screen_out">선택 됨</span>
								${i+1}
							</a>
						</li>`)
					.appendTo('.bundle_paging ul')		
					$('html').scrollTop(0);
				}else{
					$(`<li class="">
							<a href="#" class="link_num">
								${i+1}
							</a>
						</li>`)
					.appendTo('.bundle_paging ul')
					.click(function(e){
						e.preventDefault()
						faq.faq_list({ nowPage : i, keyword : x.keyword })
					})
				}
			}
			if(pxy.existNext){
				$(`<a href="#" class="link_paging">
						<span class="ico_pay ico_next"></span>다음
		        	</a>`)
		        .appendTo('.bundle_paging')
		        .click(()=>{
		        	faq.faq_list({ nowPage : pxy.nextBlock, keyword : x.keyword })
		        })
			}
			//내역 눌렀을 때 상세 또는 수정 삭제

			/*$('div.box')
		    .click(function(){
		    	if($(this).children('.answer').hasClass('show') == false){
		    		$('div.box').children('.answer').attr('class', 'answer')
		    		$(this).children('.answer').attr('class', 'answer show')
		    	}else{
		    		$('div.box').children('.answer').attr('class', 'answer')
//		    		$(this).children('.answer').attr('class', 'answer')
		    	}
			/*<div class="themoin-pagination"></div>
			<button class="control disabled" disabled="">이전</button>
			<button class="paginator current">1</button>
			<button class="control disabled" disabled="">다음</button>
		</div>
	</div>*/

		})
	}
	
	return { onCreate }
})()
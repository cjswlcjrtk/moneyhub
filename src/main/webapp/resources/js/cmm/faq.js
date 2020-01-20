"use strict"
var faq = faq || {}
faq =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, faq_vue_js, main_class
	
	let init =x=>{
		_ = $.ctx()
		js = $.js()
		faq_vue_js = js + '/vue/faq_vue.js'
		main_class = x
	}
	let onCreate =x=>{
		init(x)
		$.when(
			$.getScript(faq_vue_js)
		)
		.done(()=>{
			setContentView()
			$('#search_img')
			.click(e=>{
				e.preventDefault()
				faq_list({ nowPage : 0, keyword : ($('#search_input').val() === '' ) ? null : $('#search_input').val() })
				$('html').scrollTop(0);
			})
			$('#search_input')
			.keyup(function(e){
				e.preventDefault()
				if(e.keyCode == 13){
					faq_list({ nowPage : 0, keyword : ($('#search_input').val() === '' ) ? null : $('#search_input').val() })
					$('html').scrollTop(0);
				}
			})
			
			faq_list({ nowPage : 0, keyword : null })
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('.'+ main_class)
		.html(faq_vue.faq())
		$('html').scrollTop(0);
	}
	
	let faq_list =(x)=>{

		$.getJSON( `${_}/faq/lists/page/${x.nowPage}/search/${x.keyword}`, d=>{
			$('.content').empty()
			$('.bundle_paging').empty()
			
			$.each(d.faq, (i, j)=>{
				$(`<div class="box">
						<div class="question">
							<p>${j.title}</p>
							<img class="" src="https://img.themoin.com/public/img/btn-open-list.png">
				       </div>
				       <div class="answer">
							${j.content}
						</div>
					</div>`)
			    .appendTo('.content')
			})
			$('div.box')
		    .click(function(){
		    	if($(this).children('.answer').hasClass('show') == false){
		    		$('div.box').children('.answer').attr('class', 'answer')
		    		$(this).children('.answer').attr('class', 'answer show')
		    	}else{
		    		$('div.box').children('.answer').attr('class', 'answer')
//		    		$(this).children('.answer').attr('class', 'answer')
		    	}
		    })
		    
		  
		    let pxy = d.pager
			
			if(pxy.existPrev){
				$(`<a href="#" class="link_paging">
		         	<span class="ico_pay ico_prev"></span>이전
		         </a>`)
		         .appendTo('.bundle_paging')
		         .click(()=>{
		        	 faq.faq_list({ nowPage : pxy.prevBlock, keyword : null })
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
		})
	}

	return { onCreate, faq_list }
})()
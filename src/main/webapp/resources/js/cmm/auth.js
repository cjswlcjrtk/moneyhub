"use strict"
var auth = auth || {}
auth =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, img, auth_vue_js, cookie_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		img = $.img()
		auth_vue_js = js + '/vue/auth_vue.js'
		cookie_js = js + '/cmm/cookie.js'
	}
	let onCreate =x=>{
		init()
		$.when(
			$.getScript(auth_vue_js),
			$.getScript(cookie_js)
		)
		.done(()=>{
			setContentView(x)
			
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =x=>{
		if( x === 'join' ){
			join_1_page()
			join_2_page_btn()
			login_page_a()
		}
		else{
			login_page()
			login()
		}
		
	}
	let login_page =()=>{
		$('#root')
		.html(auth_vue.login_body(_))
		
		$(auth_vue.login())
		.appendTo('.themoin-login')
		
		$('#cemail').val('1')
		$('#cpwd').val('1')
					
		join_2_page_btn()
	}
	
	let login_page_a =()=>{
		$('<p style="margin: 33px auto 0px;"><a>이미 회원이신가요?</a></p>')
		.appendTo('.moin-login')
		.click(()=>{
			login_page()
			login()
		})
	}
	
	let login =()=>{
		$('<button/>')
		.text('로그인')
		.addClass('btn-submit')
		.appendTo('.moin-login form.login')
		.click(e=>{
			e.preventDefault()
			$.ajax({
				url : _ + '/customers/login',
				type : 'POST',
				data : JSON.stringify({
					cemail : $('#cemail').val(),
					cpwd : $('#cpwd').val()
				}),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg === 'SUCCESS'){
						alert(d.cus.cname+'님 환영합니다.')
						setCookie("CEMAIL", d.cus.cemail)
						setCookie("CPWD", d.cus.cpwd)
						setCookie("CNO", d.cus.cno)
						mypage.onCreate()
					}
					else{
						$('#login_pwd').text('이메일 및 비밀번호를 확인해주세요.')
						$('#login_pwd').css('color', 'red')
					}					
				},
				error : e=>{
					alert('login ajax 실패')  
				}
			})
		})
	}
	
	let join_1_page =()=>{
		$('#root')
		.html(auth_vue.login_body(_))
		
		$(auth_vue.join_1())
		.appendTo('.themoin-login')
	}
	
	let join_2_page_btn =()=>{
		$('<button>'+
		  '	<img src="https://img.themoin.com/public/img/login-email.svg">'+
		  '		<p class="newmoin-text-text-button">이메일로<br>시작하기</p>'+
		  '</button>')
		.prependTo('.buttons')
		.click(()=>{
			$('#root')
			.html(auth_vue.join_body(_))
			
			$(auth_vue.join_2(img))
			.appendTo('.themoin-signup')
			
			
			$('#agree_box_all')
				.click(function(){
					if($(this).children('div').hasClass("checked") == true){
						$('#agree_box_all div.box').attr('class', 'box')
			        	$('#agree_box_1 div.box').attr('class', 'box')
			        	$('#agree_box_2 div.box').attr('class', 'box')
			        	$('#agree_box_3 div.box').attr('class', 'box')
					}
			        else{

			        	$('#agree_box_all div.box').attr('class', 'box checked')
			        	$('#agree_box_1 div.box').attr('class', 'box checked')
			        	$('#agree_box_2 div.box').attr('class', 'box checked')
			        	$('#agree_box_3 div.box').attr('class', 'box checked')
			        }
				})
			$.each(['1', '2', '3'], (i, j)=>{
				$('#agree_box_' + j)
				.click(function(){
					if($(this).children('div').hasClass("checked") == true){
						$('#agree_box_'+ j +' div.box').attr('class', 'box')
					}
			        else{
			        	$('#agree_box_'+ j +' div.box').attr('class', 'box checked')
			        	
			        }
				})
			})
			
			$('#code_dropdown')
			.click(function(){
				$(this).attr('class', 'moin-input-group moin-dropdown open')
				$('ul.dropdown-menu').toggle()
			})
			
			$('#code_dropdown .dropdown-toggle')
			.text('+82 (South Korea)')
			.append('<img class="pull-right" src="https://img.themoin.com/public/img/ic-dropdown-p.png">')
			
			$('ul.dropdown-menu li a')
			.click(function(){
				$('#code_dropdown .dropdown-toggle')
				.text($(this).text())
				.append('<img class="pull-right" src="https://img.themoin.com/public/img/ic-dropdown-p.png">')
				
			})
			
			join()
		})
	}

	// 아이디 정규식
	var idJ = /^[a-z0-9]{2,12}$/;
	// 비밀번호 정규식
	var pwJ = /^[A-Za-z0-9]{2,12}$/;
	// 이름 정규식
	var nameJ = /^[가-힣]{1,10}$/;

	let join =()=>{
		existId()
		// <button class="btn-submit" type="submit">가입완료</button>
		
		
		$('#cpwd').blur(function(){
			if(pwJ.test($('#cpwd').val())){
				$('#pwd_check').text('사용가능한 비밀번호입니다.')
				$('#pwd_check').css('color', 'blue')
			}else{
				$('#pwd_check').text('숫자 or 문자로만 2~12자리 입력')
				$('#pwd_check').css('color', 'red')
			}
		})
		$('#cfm_cpwd').blur(function(){
			if($('#cpwd').val() != $('#cfm_cpwd').val()){
				$('#pwd2_check').text('비밀번호가 일치하지 않습니다.')
				$('#pwd2_check').css('color','red')
			}else{
				$('#pwd2_check').text('비밀번호가 일치합니다.')
				$('#pwd2_check').css('color','blue')
			}
		})
		$('#fname').blur(function(){
			if(nameJ.test($('#fname').val())){
				$('#fname_check').text('')
			}else{
				$('#fname_check').text('이름을 다시 확인해주세요.')
				$('#fname_check').css('color','red')
			}
		})
		$('#lname').blur(function(){
			if(nameJ.test($('#lname').val())){
				$('#lname_check').text('')
			}else{
				$('#lname_check').text('이름(성)을 다시 확인해주세요.')
				$('#lname_check').css('color','red')
			}
		})

		$('<button/>')
		.text('가입완료')
		.addClass('btn-submit')
		.appendTo('.moin-login form.signup')
		.click(e=>{
			e.preventDefault()
			let cntcd = $('#phone1').text().substr(1, $('#phone1').text().indexOf(' '))
			if($('#cpwd').val() === $('#cfm_cpwd').val() && $('#cpwd').val().length > 0){
				$.ajax({
					url : _+'/customers/',
					type : 'POST',
					data : JSON.stringify({
						cemail : $('#cemail').val(),
						cpwd : $('#cpwd').val(),
						cname : $('#lname').val() + $('#fname').val(),
						cntcd : cntcd,
						cphone : $('#cphone').val()
						// cemail, cpwd, cfm_cpwd, fname, lname,
						// phone1(국가코드), cphone
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : d=>{
						if(d.msg === 'SUCCESS'){
							login_page()
							login()
						}else{
							alert('회원가입 실패')
						}
					},
					error : e=>{
						alert('join ajax 실패')
					}
				})
			}else{
				alert('비번 틀림')
			}
		})
	}
	
	let existId =()=>{
		$('<input id="cemail" class="fs-block"'+
				' placeholder="youremail@email.com" type="text" tabindex="0" value="">'+
				'<div style="height:20px; margin-top:10px"></div>')
			.appendTo('#moin-input-id')
			
		$('#cemail').keyup(()=>{
			if($('#cemail').val().length >= 1){
				$.getJSON(_+'/customers' + '/existid/' + $('#cemail').val(), d=>{
					if(d.msg === 'Y'){
						$('#moin-input-id div')
						.text('이미 있는 아이디입니다.')
						.css({
							color : 'red'
						})

					}else{
						$('#moin-input-id div')
						.text('사용 가능한 이메일입니다.')
						.css({
							color : 'blue'
						})
					}
				})
			}
			else{
				$('#moin-input-id div').empty()
			}
		})
	}

	return { onCreate }
})()
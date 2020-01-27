"use strict"
var pwd_chg = pwd_chg || {}
pwd_chg =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, nav_vue_js, mypage_vue_js, cookie_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		cookie_js = js + '/cmm/cookie.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(cookie_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView =()=>{
		$('#root div.mypage')
		.html(mypage_vue.pwd_chg())
		$('#cpwd2').blur(function(){
			if($('#cpwd').val() != $('#cpwd2').val()){
				$('#pwd_check2').text('비밀번호가 일치하지 않습니다.')
				$('#pwd_check2').css('color','red')
			}else{
				$('#pwd_check2').text('비밀번호가 일치합니다.')
				$('#pwd_check2').css('color','blue')
			}
		})
		$('<button/>')
		.text('비밀번호 변경')
		.addClass('account-send-btn')
		.appendTo('.themoin-mypage .content form')
		.click(e=>{
			e.preventDefault()
			if(confirm('비밀번호를 변경하시겠습니까?')){
				$.ajax({
					url : _ + '/customers/pwdChg',
					type : 'POST',
					data : JSON.stringify({
						cemail : $('#cemail').val(),
						cpwd : $('#cpwd').val(),
						cno : sessionStorage.getItem('CNO')
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : d=>{
						if(d.msg === 'true'){
							sessionStorage.setItem('CPWD',d.cus.cpwd)
							auth.onCreate()
							alert('변경된 비밀번호로 다시 로그인하실 수 있습니다.')
						}else{
							alert('현재 비밀번호와 동일합니다.')
						}
					},
					error : e=>{
						alert('pwd_chg ajax 실패')  
					}
				})
			}		
			
		})
	}
	
	return { onCreate }
})()
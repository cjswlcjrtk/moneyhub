"use strict"
var withdrawal = withdrawal || {}
withdrawal =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, nav_vue_js, mypage_vue_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js)
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
		.html(mypage_vue.withdrawal())
		$('#withdrawal_pwd').blur(function(){
			if($('#cpwd').val() != $('#withdrawal_pwd').val()){
				$('#withdrawal_pwd2').text('비밀번호가 일치하지 않습니다.')
				$('#withdrawal_pwd2').css('color','red')
			}else{
				$('#withdrawal_pwd2').text('비밀번호가 일치합니다.')
				$('#withdrawal_pwd2').css('color','blue')
			}
		})
		$('<button/>')
		.text('회원탈퇴')
		.addClass('account-send-btn')
		.appendTo('.themoin-mypage .content form')
		.click(e=>{
			e.preventDefault()
			if(confirm('회원탈퇴 하시겠습니까?')){
				$.ajax({
					url : _ + '/customers/withdrawal',
					type : 'DELETE',
					data : JSON.stringify({
						cemail : $('#cemail').val(),
						cpwd : $('#cpwd').val()
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : d=>{
						if(d.msg === 'true'){
							alert('회원탈퇴 되었습니다.')
							app.onCreate()
						}else{
							alert('이메일 및 비밀번호를 확인해주세요.')
							$('#withdrawal_pwd').text('이메일 및 비밀번호를 확인해주세요.')
							$('#withdrawal_pwd').css('color', 'red')
						}
					},
					error : e=>{
						alert('withdrawal ajax 실패')  
					}
				})
			}		
			
		})
	}
	
	return { onCreate }
})()
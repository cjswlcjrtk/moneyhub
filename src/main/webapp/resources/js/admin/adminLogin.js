"use strict"
var adminLogin = adminLogin || {}
adminLogin =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, img, cookie_js, adminLogin_vue_js, adminIndex_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		img = $.img()
		cookie_js = js + '/cmm/cookie.js'
		adminLogin_vue_js = js + '/admin_vue/adminLogin_vue.js'
		adminIndex_vue_js = js + '/admin/adminIndex.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(adminLogin_vue_js),
			$.getScript(adminIndex_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('#root')
		.html(login_vue.login_body())		
		$(login_vue.login())
		.appendTo('.themoin-login')
		login()
	}	
	let login =()=>{
		$('<button/>')
		.text('로그인')
		.addClass('btn-submit')
		.appendTo('.moin-login form.login')
		.click(e=>{
			e.preventDefault()
			$.ajax({
				url : _ + '/admin/login',
				type : 'POST',
				data : JSON.stringify({
					amail : $('#amail').val(),
					pwd : $('#pwd').val()
				}),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg === 'SUCCESS'){
						adminIndex.onCreate()
					}
					else{
						$('#login_pwd').text('이메일 및 비밀번호를 확인해주세요.')
						$('#login_pwd').css('color', 'red')
					}					
				},
				error : e=>{
					alert('관리자login ajax 실패')
				}
			})
		})
	}	
	
	return { onCreate }
})()
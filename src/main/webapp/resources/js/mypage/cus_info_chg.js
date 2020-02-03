"use strict"
var cus_info_chg = cus_info_chg || {}
cus_info_chg =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, main_vue_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		main_vue_js = js + '/vue/main_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(main_vue_js)	
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
		.html(mypage_vue.cus_info_chg())
		$.getJSON(_+'/customers/cusInfo/' + $('#cemail').val(), d=>{
			$('#infoZip').text(d.cus.zip)
			$('#infoAddr').text(d.cus.addr)
			$('#infoAddr2').text(d.cus.daddr)
		})
		
		$('#info_chg_cancle')
		.click(e=>{
			e.preventDefault()
			cus_info.onCreate()
		})
		
		$('#info_chg_check')
		.click(e=>{
			e.preventDefault()
			if(confirm('회원정보를 수정하시겠습니까?')){
				$.ajax({
					url : _ + '/customers/cusInfoChg',
					type : 'POST',
					data : JSON.stringify({
						cemail : sessionStorage.getItem('CEMAIL'),
						zip : $('#zip').val(),
						addr : $('#addr').val(),
						daddr : $('#daddr').val()
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : d=>{
						if(d.msg === 'true'){
							sessionStorage.setItem('ZIP',d.cus.zip)
							sessionStorage.setItem('ADDR',d.cus.addr)
							sessionStorage.setItem('DADDR',d.cus.daddr)
							alert('회원 정보가 수정되었습니다.')
							cus_info.onCreate()
						}else{
							alert('변경된 정보가 없습니다.')
						}
						
					},
					error : e=>{
						alert('cus_info_chg ajax 실패')  
					}
				})
			}
		})
	}
	
	return { onCreate }
})()
"use strict"
var account = account || {}
account =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, main_vue_js, exch, cus, acc,mypage_vue_js,account_vue_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		exch = $.exch()
		cus = $.cusInfo()
		acc = $.acc()
		main_vue_js = js + '/vue/main_vue.js'
		mypage_vue_js = js +'/vue/mypage_vue.js'
		account_vue_js = js +'/vue/account_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(main_vue_js),
			$.getScript(mypage_vue_js),
			$.getScript(account_vue_js)
		)
		.done(()=>{
			setContentView()
			account_deposit()
			account_list()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('#root div.mypage')
		.html(account_vue.account_page())
	
		$(window).on("load resize ", function() {
		  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
		  $('.tbl-header').css({'padding-right':scrollWidth});
		}).resize();

		$('#copy_btn').on('click', function(e){
			var text = $('#account').html()
			$('#clip_target').val(text)
			$('#clip_target').select()
			try { 
				var successful = document.execCommand('copy');
				if(successful){
					alert('복사되었습니다.')
				}else{
					alert('시스템 확인 중입니다.')
				}
			} catch (err) { 
				alert('이 브라우저는 지원하지 않습니다.') 
			}
		})
	}
	let account_deposit=()=>{
		$('#deposit').click(()=>{
			acc.deposit = $('#de_amount').val()
			sessionStorage.setItem('acc', JSON.stringify(acc))
			if(acc.deposit != null && acc.deposit != ''){
			$.ajax({
				url : _ + `/account/deposit`,
				type : 'POST',
				data : JSON.stringify(acc),
				contentType : 'application/json',
				success : ()=>{
					alert('입금되었습니다.')
					let acctno = acc.acctNo
					$.getJSON(_ + '/account/balance/'+acctno, d=>{ 
						acc.balance = d.balance
						sessionStorage.setItem('acc', JSON.stringify(acc))
					})
					account.onCreate()
				},
				error : (request,status,error) => {
//					alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
			})
			} else {alert('입금 금액을 입력해주십시오.')}
		})
	}
	
	let account_list =()=>{
		accHis = $.accHis()
		let cemail = cus.cemail
		let account = acc.acctNo
		$.getJSON(_+'/account/getacchis/' + cemail + '/' + account, d=>{ // 내역 보이기
			if(d.msg === "SUCCESS"){
				$.each(d.accHis, (i, j)=>{
					if(j.atypecd == '1'){j.atypecd = '송금'}
					else if (j.atypecd == '2'){j.atypecd = '환전'}
					else if(j.atypecd === null){j.atypecd = '-'}
					$(`<tr><td>${j.bsdate}</td>
					<td>${common.comma_create(j.deposit)} 원</td>
					<td>${common.comma_create(j.withdrawal)} 원</td>
					<td>${j.comment}</td>
					<td>${j.atypecd}</td>
					<td>${common.comma_create(j.balance)} 원</td></tr>`)
					.appendTo('#account_tbody')
				})
			}else{
				alert('시스템 확인 중입니다.')
			}
		})
	}
	
	
	return { onCreate }
})()
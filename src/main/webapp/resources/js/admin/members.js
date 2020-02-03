"use strict"
var members = members || {}
members =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, tables_vue_js, members_update_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		tables_vue_js = js + '/admin_vue/tables_vue.js'
		members_update_vue_js = js + '/admin_vue/members_update_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(tables_vue_js),
			$.getScript(members_update_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		selectTableMember()	
	}	
	
	let setContentViewUpdate =x=>{	
		$(memberUpdate_vue.memberUpdateHead()).appendTo('head')
		$(memberUpdate_vue.memberUpdateBody(x)).appendTo('div.container')
		$('#updateComplete').click(e=>{
			e.preventDefault()			
			$.ajax({				
				url : _ + '/admin/memberUpdate',
				type : 'POST',
				data : JSON.stringify({		
					cno : x.CNO,
					cemail : $('#updateCEMAIL').val(),
					cpwd : $('#updateCPWD').val(),
					cname : $('#updateCNAME').val(),
					cstcd : $('#updateCSTCD').val()
				}),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg === 'SUCCESS'){
						alert('업데이트 성공')
						$('head').empty()
						$('div.container').empty()
						selectTableMember()
					}
					else{
						alert('업데이트 실패')
						selectTableMember()
					}					
				},
				error : e=>{
					alert('ajax 실패')  
				}
			})
		})
		$('#updateCancel').click(()=>{
			$('head').empty()
			$('div.container').empty()
			selectTableMember()
		})
	}
	
	let selectTableMember = () => {
		$.getJSON(_ + '/admin/member',d=>{
			$(tables_vue.tables_head()).appendTo('head')
			$(tables_vue.tables_body()).appendTo('div.container-fluid')
				$.each(d.adm,(i,j)=>{
					let jObject = j
					$('                    <tr>'+
							'                      <td>'+j.CEMAIL+'</td>'+
							'                      <td>'+j.CNAME+'</td>'+
							'                      <td>23,928,000 원</td>'+
							'                      <td>'+j.AGE+'</td>'+
							'                      <td>'+j.SDATE+'</td>'+
							'                      <td>'+j.CSTCD+'</td>'+
							'                    </tr>')
							.appendTo('#adminMemberList')
							.click(()=>{
								$('head').empty()
								$('div.container-fluid').empty()
								setContentViewUpdate(jObject)
							})
										
				})
					
		})
	}
	
	return { onCreate }
})()
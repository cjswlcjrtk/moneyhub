var nav_vue = nav_vue || {}
nav_vue = {
	nav : ()=>{
		return `<nav class="themoin-header" id="nav-global"> 
			<div> 
				<a class="logo"> 
					<img id="navlogo" src="/web/resources/img/logo/white_logo.png"> 
				</a> 
				<div class="spacer"></div> 
				<a class="menu"> 
					<div class="line1"></div> 
					<div class="line2"></div> 
				</a> 
				<ul class="aa"> 
					<li><a id="join">회원가입</a></li>
					<li><a id="login">로그인</a></li> 
					<li><a id="admin_login">관리자</a></li> 
				</ul> 
		<script> 
					$(document).ready(function(){  
						  $(window).scroll(function(){  
						        var scroll = $(window).scrollTop();  
						        if(scroll == 0){ 
						        	$(".themoin-header").css("background-color","#313c4a"); 
						        	$("#navlogo").attr("src","/web/resources/img/logo/white_logo.png"); 
						        	$(".themoin-header ul li a").css("color","#ffffff"); 
						        	$(".themoin-language-dropdown a").css("color","#ffffff"); 
						        }else  if(scroll>1){ 
							        $(".themoin-header").css("background-color","rgba(255, 255, 255, 0.9)","color","#003764"); 
							        $("#navlogo").attr("src","/web/resources/img/logo/black_logo.png"); 
							        $(".themoin-header ul li a").css("color","#313c4a"); 
							        $(".themoin-language-dropdown a").css("color","#003764") 
							    }  
						  })  
					}) 
				</script>
		</nav`
	},
	logined_nav : ()=>{
		return `<nav class="themoin-header"> 
			<div> 
				<a class="logo"> 
					<img id="navlogo" src="/web/resources/img/logo/white_logo.png"> 
				</a> 
				<div class="spacer"></div> 
				<a class="menu"> 
					<div class="line1"></div> 
					<div class="line2"></div> 
				</a> 
				<ul class="">
					<li><a id="exch">환전</a></li>
					<li><a id="nav_remit">해외 송금</a></li>
					<li><a id="testexch">모의 환전</a></li>
					<li><a id="mgmt">내 계정 관리</a></li> 
					<li><a id="logout">로그아웃</a></li> 
					<li class="mobile"> 
						<div class="themoin-language-dropdown" tabindex="0"> 
			</div> 
		</nav`
	},
	sidebar_cus : ()=>{
		return `<div class="themoin-mypage"> 
		<div class="tab-container"> 
			<div class="tab"> 
			</div> 
		</div> 
		<div class="mypage"></div> 
		</div`

	}
}
var nav_vue = nav_vue || {}
nav_vue = {
	nav : ()=>{
		return '<nav class="themoin-header" id="nav-global">'+
		'	<div>'+
		'		<a class="logo">'+
		'			<img id="navlogo" src="/web/resources/img/logo/white_logo.png">'+
		'		</a>'+
		'		<div class="spacer"></div>'+
		'		<a class="menu">'+
		'			<div class="line1"></div>'+
		'			<div class="line2"></div>'+
		'		</a>'+
		'		<ul class="aa">'+
		'			<li><a id="tables_mgmt_a">DB Table 관리</a></li>'+
		'			<li><a id="admin_login">관리자</a></li>'+
		'			<li><a id="login">로그인</a></li>'+
		'			<li><a id="join">회원가입</a></li>'+
		'			<li class="mobile">'+
		'				<div class="themoin-language-dropdown" tabindex="0">'+
		'					<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
		'					<a> 한국어 </a>'+
		'					<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
		'					<ul>'+
		'						<li>'+
		'							<div class="spacer"></div>'+
		'							<a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a>'+
		'						</li>'+
		'						<li>'+
		'							<div class="spacer"></div>'+
		'							<a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a>'+
		'						</li>'+
		'					</ul>'+
		'				</div>'+
		'			</li>'+
		'		</ul>'+
		'		<div class="language">'+
		'			<div class="themoin-language-dropdown" tabindex="0">'+
		'				<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
		'				<a> 한국어 </a>'+
		'				<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
		'				<ul>'+
		'					<li>'+
		'						<div class="spacer"></div>'+
		'						<a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a>'+
		'					</li>'+
		'					<li>'+
		'						<div class="spacer"></div>'+
		'						<a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a>'+
		'					</li>'+
		'				</ul>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+
		'<script>'+
		'			$(document).ready(function(){ '+
		'				  $(window).scroll(function(){ '+
		'				        var scroll = $(window).scrollTop(); '+
		'				        if(scroll == 0){'+
		'				        	$(".themoin-header").css("background-color","#313c4a");'+
		'				        	$("#navlogo").attr("src","/web/resources/img/logo/white_logo.png");'+
		'				        	$(".themoin-header ul li a").css("color","#ffffff");'+
		'				        	$(".themoin-language-dropdown a").css("color","#ffffff");'+
		'				        }else  if(scroll>1){'+
		'					        $(".themoin-header").css("background-color","rgba(255, 255, 255, 0.9)","color","#003764");'+
		'					        $("#navlogo").attr("src","/web/resources/img/logo/black_logo.png");'+
		'					        $(".themoin-header ul li a").css("color","#313c4a");'+
		'					        $(".themoin-language-dropdown a").css("color","#003764")'+
		'					    } '+
		'				  }) '+
		'			})'+
		'		</script>'
		'</nav>'
	},
	logined_nav : ()=>{
		return '<nav class="themoin-header">'+
		'	<div>'+
		'		<a class="logo">'+
		'			<img id="navlogo" src="/web/resources/img/logo/white_logo.png">'+
		'		</a>'+
		'		<div class="spacer"></div>'+
		'		<a class="menu">'+
		'			<div class="line1"></div>'+
		'			<div class="line2"></div>'+
		'		</a>'+
		'		<ul class="">'+
		'			<li><a id="mgmt">내 계정 관리</a></li>'+
		'			<li><a id="logout">로그아웃</a></li>'+
		'			<li class="mobile">'+
		'				<div class="themoin-language-dropdown" tabindex="0">'+
		'					<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
		'					<a> <!-- -->한국어<!-- --> </a>'+
		'					<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
		'					<ul>'+
		'						<li>'+
		'							<div class="spacer"></div>'+
		'							<a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a>'+
		'						</li>'+
		'						<li>'+
		'							<div class="spacer"></div>'+
		'							<a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a>'+
		'						</li>'+
		'					</ul>'+
		'				</div>'+
		'			</li>'+
		'		</ul>'+
		'		<div class="language">'+
		'			<div class="themoin-language-dropdown" tabindex="0">'+
		'				<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
		'				<a> <!-- -->한국어<!-- --> </a>'+
		'				<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
		'				<ul>'+
		'					<li>'+
		'						<div class="spacer"></div>'+
		'						<a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a>'+
		'					</li>'+
		'					<li>'+
		'						<div class="spacer"></div>'+
		'						<a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a>'+
		'					</li>'+
		'				</ul>'+
		'			</div>'+
		'		</div>'+
		'		<div class="notification">'+
		'			<button>'+
		'				<img src="https://img.themoin.com/public/img/noticenter-icon.svg">'+
		'				<span class="">0</span>'+
		'			</button>'+
		'		</div>'+
		'	</div>'+
		'</nav>'
	},
	/*sidebar_admin : ()=>{
		return '<div class="themoin-mypage">'+
		'	<div class="tab-container">'+
		'		<div class="tab">'+
		'			<!-- <a v-for="list of lists" :key="list.aclick" @click="list.aclick" class="list.isShow"> {{list.text}}</a> -->'+
		'			<a class="active1" @click.prevent="admin_a">관리자 변경</a>'+
		'			<a class="" @click.prevent="pwdchg_a">비밀번호 변경</a>'+
		'			<a class="" @click.prevent="studentList_a">학생 목록</a>'+
		'			<a class="" @click.prevent="studentsFindSome_a">조건별 학생 검색</a>'+
		'			<a class="" @click.prevent="scoreEdit_a">학생 성적 수정</a>'+
		'			<a class="" @click.prevent="idSearch_a">ID 학생 검색</a>'+
		'			'+
		'			<div class="spacer"></div>'+
		'			<img src="https://img.themoin.com/public/img/img-man-s.svg">'+
		'			<p>{{cemail}}</p>'+
		'		</div>'+
		'	</div>'+
		'</div>'
	},*/
	sidebar_cus : ()=>{
		return '<div class="themoin-mypage">'+
		'<div class="tab-container">'+
		'	<div class="tab">'+
		'		<a id="cus_info" class="active" data-tab="tab-1" style="margin-right: 50px">회원 정보</a>'+
		'		<a id="pwd_chg" class="active_a" data-tab="tab-2" style="margin-right: 50px">비밀번호 변경</a>'+
		'		<a id="auth_mgmt" class="active_a" data-tab="tab-3" style="margin-right: 50px">인증관리</a>'+
		'		<a id="exchange_test" class="active_a" data-tab="tab-6" style="margin-right: 50px">환전 모의</a>'+
		'		<a id="withdrawal" class="active_a" data-tab="tab-7" style="margin-right: 50px">회원 탈퇴</a>'+
		'		<div class="spacer"></div>'+
		'		<img src="https://img.themoin.com/public/img/img-man-s.svg">'+
		'		<p>rogbest@naver.com</p>'+
		'	</div>'+
		'</div>'+
		'<div class="mypage"></div>'+
		'</div>'
	}
}
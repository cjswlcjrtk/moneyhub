var cmm_vue = cmm_vue || {}
cmm_vue = {
	head : ()=>{
		return '<head>'+
		'<!-- Google Tag Manager -->'+
		'<!--	<script type="text/javascript" async="" src="//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"></script> '+
		'	<script type="text/javascript" async="" src="https://cdn.channel.io/plugin/ch-plugin-web.js" charset="UTF-8"></script>'+
		'	<script async="" crossorigin="anonymous" src="https://edge.fullstory.com/s/fs.js"></script>'+
		'	<script type="text/javascript" async="" src="//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"></script>'+
		'	<script src="https://connect.facebook.net/signals/config/990202451106612?v=2.9.13&amp;r=stable" async=""></script>'+
		'	<script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>'+
		'	<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>'+
		' -->'+
		'<!-- End Google Tag Manager -->'+
//		'	<link href="https://www.kakaobank.com/products_static/css/common/pc.css" rel="stylesheet" type="text/css">'+
		'	'+

		'	<!-- Bootstrap core CSS -->'+
		'	'+
		`<style>
		canvas{
			-moz-user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
		}
		</style>`+
		'</head>'
	},
	footer : ()=>{
		return '<div class="themoin-footer">'+
		'	<div>'+
		'		<div class="section top">'+
		'			<div class="contact">'+
		'				<h3><b><a id="compo" class="">회사 소개</a></b></h3>'+
	/*	'				<h3>언어별 고객 센터</h3>'+
		'				<h3 class="phone ko">한국어<!-- --> <br> 02-333-3333 / 070-1234-5678</h3>'+
		'				<p><span>평일 : 09:00 ~ 18:00 (주말/공휴일 휴무)</span><br>팩스 : 0504-123-4567<br>이메일 : support@moneyhub.com<br>카카오톡 플러스친구 : @머니허브 MONEYHUB</p>'+
		'				<h3 class="phone np">नेपाली<!-- --> <br> 070-4367-0297</h3>'+
		'				<p><span>Weekday : 12:45 ~ 21:45</span><br>email : abc@moneyhub.com</p>'+
		'				<h3 class="business">비즈니스 및 제휴 문의 <br> 070-1234-5678</h3>'+*/
		'			</div>'+
		'			<div class="spacer"></div>'+
		'			<div class="social">'+
		'				<h3><b><a id="faq" class="">F A Q</a></b></h3>'+
/*		'				<h3 class="desktop">Follow Us</h3>'+
		'				<a href="https://www.facebook.com/moincompany" target="new">'+
		'					<img src="https://img.themoin.com/public/img/btn-facebook.svg">'+
		'					<span class="desktop">머니허브 페이스북 페이지</span>'+
		'				</a>'+
		'				<a href="http://blog.naver.com/moin_company" target="new">'+
		'					<img src="https://img.themoin.com/public/img/btn-blog.svg">'+
		'					<span class="desktop">머니허브 네이버 블로그</span>'+
		'				</a>'+
		'				<a href="https://plus.kakao.com/home/ne7qlhac" target="new" style="width:240px">'+
		'					<img src="https://img.themoin.com/public/img/btn-kakaotalk.svg">'+
		'					<span class="desktop">머니허브 카카오톡 플러스친구</span>'+
		'				</a>'+*/
		'			</div>'+
		'			<div class="spacer"></div>'+
		'			<div class="links">'+
		'        		<h3><b><a id="event" class="">이벤트 페이지</a></b></h3>'+
/*		'				<h3 class="desktop">Company</h3>'+
		'				<a id="compo" class="caption">회사 소개</a>'+
		'				<a class="caption">서비스 소개</a>'+
		'				<a class="caption">이용약관</a>'+
		'				<a class="caption">개인정보 취급방침</a>'+
		'				<a id="faq" class="caption">F A Q</a>'+
		'        		<a id="event" class="caption">이벤트 페이지</a>'+
		'				<a class="caption">공지사항</a>'+
		'				<h3 class="event-univ">학생 및 기관 할인</h3>'+
		'				<a class="caption">학생 및 기관 할인등록 페이지</a>'+*/
		'			</div>'+
		'			<div class="spacer"></div>'+
		'			<div class="social">'+
		'				<h3><b><a id="guide" class="">WU 수취 가이드</a></b></h3>'+
		'			</div>'+
		'		</div>'+
		'		<div class="section bottom">'+
		'			<div class="company">'+
		'				<img src="/web/resources/img/logo/gray_logo.png">'+
		'				<p>'+
		'							(주)머니허브 | 대표이사 : 양현미 | 사업자등록번호 : 123-45-67890'+
		'							<br>'+
		'							소액해외송금업 등록번호 : 2019-12'+
		'							<br>'+
		'							주소 : 서울시 마포구 백범로 23 구프라자 3층'+
		'							<br>'+
		'							© 2019 MONEYHUB, Inc. All Rights Reserved.'+
		'						</p>'+
		'			</div>'+
		'			<div class="spacer"></div>'+
		'		</div>'+
		'	</div>'+
		'</div>'+
		'<!-- <div style="display:none"></div>		 -->'
	}
}
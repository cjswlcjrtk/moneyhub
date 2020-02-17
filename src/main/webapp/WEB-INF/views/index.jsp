<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, viewport-fit=cover">
	<meta name="description" content="빠르고 저렴하게 해외로 돈을 보낼 수 있는 해외송금서비스, 중국송금, 일본송금, 싱가포르송금, 미국송금, 호주송금">
	<meta property="og:type" content="website">
	<meta property="og:title" content="머니허브(MoneyHub) 해외송금">
	<meta property="og:description" content="빠르고 저렴하게 해외로 돈을 보낼 수 있는 해외송금서비스">
	<meta property="og:image" content="https://img.themoin.com/public/img/meta_link_thumbnail.png">
	<meta property="og:url" content="https://www.themoin.com">
	<meta name="application-name" content="머니허브(MoneyHub) 해외송금">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<link rel="canonical" href="https://www.themoin.com">
	<link rel="shortcut icon" href="/web/resources/img/logo/ci_logo.png">
	<link rel="alternate" hreflang="ko" href="https://www.themoin.com/ko">
	<link rel="alternate" hreflang="en" href="https://www.themoin.com/en">
	<link rel="alternate" hreflang="x-default" href="https://www.themoin.com/">
	<link href="/web/resources/css/moin.bundle.css" rel="stylesheet" type="text/css">
	
	<!--카카오 css-->
	<link href="/web/resources/css/kabang.css" rel="stylesheet" type="text/css">
	<!-- Add a banner for Appstore link -->
	<meta name="apple-itunes-app" content="app-id=1228063143">
	<title>머니허브(MoneyHub) 해외송금</title>
	
	<link href="https://www.kakaobank.com/products_static/css/event/list/style.css" rel="stylesheet" type="text/css">
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	
	<!-- maps -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js"></script>
	
	<!-- kakao map -->
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b335250e135b3c4aeca8f2b704648e5c"></script>
	
	<!-- kakao zip -->
	<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	
	<!-- kakao login -->
	<!-- <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script> -->
	
	<!-- chart -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>

	<!-- dateTimePicker -->
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	
	<!-- jQuery Modal -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
	

	<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/router.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/common.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/cmm_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/main_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/auth_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/cookie.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/mypage.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/vue/mypage_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/compo.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/compo_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/event.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/event_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/faq.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/faq_vue.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/remit/foreignRemit.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/remit/remit_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/remit/remit_box.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/remit/exchange.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/mypage/cus_info.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/sidebar.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/cus_info_chg.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/pwd_chg.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/account.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/alarm.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/ref_mgmt.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/withdrawal.js"></script>
	<%-- <script src="<%=application.getContextPath()%>/resources/js/mypage/exchange.js"></script> --%>
	<%-- <script src="<%=application.getContextPath()%>/resources/js/mypage/exChart.js"></script> --%>
	
	<script src="<%=application.getContextPath()%>/resources/js/admin/adminLogin.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin/adminIndex.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin/buttons.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin/members.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin/fee.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin/profitChart.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin/qna.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin/transactionChart.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin_vue/adminIndex_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin_vue/adminIndexHome_vue.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/mypage/exchange_test.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/tables/tables_mgmt.js"></script>	
	<script src="<%=application.getContextPath()%>/resources/js/exchart/Chart.min.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/exchart/utils.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/kakao/postcode.v2.js"></script>
	
</head>
<body id="page-top">
	<div id="intro">
		<link rel="stylesheet" href="http://www.kaiwa-projects.com/assets/css/qbkl-grid.css">
		<link rel="stylesheet" href="http://www.kaiwa-projects.com/assets/css/style-ko.css">
<!-- 		<div class="top-decorations" style="width: 100%;position: absolute; "></div> -->
		<section id="intro" class="fx-backstretch">
			<div class="info" style="position: relative; z-index: 0; background: none;">
				<div class="container" style="top: 18%;">
					<div class="row">

						<div class="col-full"><h1>김민국</h1></div>

					</div>
					<div class="row">
						<div class="col-1-4 centered line"></div>
					</div>
					<div class="row">
						<div class="col-full"><h4>소프트웨어 엔지니어</h4></div>
					</div>
				</div>
				<div class="backstretch" style="left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; height: 91%; width: 100%; z-index: -999998; position: absolute;">
<!-- 					<img src="http://www.kaiwa-projects.com/assets/img/backstretch.jpg" style="position: absolute; margin: 0px; padding: 0px; border: none; width: 100%; height: 825px; max-height: none; max-width: none; z-index: -999999; left: -129.833px; top: 0px;"> -->
					<img src="/web/resources/img/main.png" style="opacity: 0.5; margin: 0px; padding: 0px; border: none; width: 100%; height: 99%; max-height: none; max-width: none; z-index: -999999; left: -129.833px; top: 0px;">
				</div>
			</div>
			<div id="nav-sticky-wrapper" class="sticky-wrapper" style="height: 60px;">
				<nav id="nav" style="z-index: 100; font-size: 30px">
					<ul class="clearfix" style="width:610px; font-weight: bold;">
						<li class="current" style="margin-right: 60px;"><a href="#aboutme">인사 소개</a></li>
						<li class="" style="margin-right: 60px;"><a href="#skills"><span></span>기술</a></li>
						<li class="" style="margin-right: 60px;"><a href="#portfolio">프로젝트</a></li>
						<li class=""><a href="#contact">연락</a></li>
					</ul>
				</nav>
			</div>
		</section>
		<section id="aboutme" class="section">
			<div class="container" style="width : 70%">
				<div class="row">
					<div class="col-full">
						<h2 class="section-title">인사 소개</h2>
						<div class="centered line"></div>
					</div>
				</div>
				<div class="row section-content">
					<div class="col-1-2" style="text-align: center;">
						<img src="resources/img/면접용.jpeg" style="height: 200px;" src="">
					</div>

					<div class="col-1-3">
						<h4>안녕하세요? 김민국입니다!</h4>
						<p>저는 훌륭하고 멋진 소프트웨어 개발을 즐겨하는 사람입니다. 웹사이트 및 브라우저 플러그인, 기업 소프트웨어도 만들었고, 게임도 제작했습니다. 그 중  좋아했던 프로젝트 몇 개를 아래 포트폴리오로 만들었으니 <a href="#portfolio">여기를 누르시거나</a> 페이지 아래쪽에서 구경해 보세요! 도움이 필요하세요? 저하고 이야기해 보시겠어요? 소셜 미디어나 <a href="#contact">이메일</a>로 연락해 주세요.</p>
						<ul class="social-links clearfix">
							<li><a href="https://www.github.com/hmyanghm" target="_blank" title="Github"><i class="fa fa-github"></i></a></li>
						</ul>
					</div>
					<!-- <div class="col-1-3">
						<h4>개인 관심사</h4>
						<p><a href="#skills">프로그래밍</a>을 하지 않을 때는 다음과 같은 것으로 소일하며 즐거운 생활을 하고 있답니다.</p>
						<ul>
							<li>여행을 다니는 것을 좋아합니다</li>
							<li>책 읽는 것을 좋아합니다</li>
							<li>예전 영화나 최신영화를 보는것을 즐깁니다.</li>
						</ul>
					</div> -->
				</div>
			</div>
		</section>
		<section id="skills" class="section-alt">
			<div class="container" style="width:1000px">
				<div class="row" style="margin:0 auto">
					<div class="col-full">
						<h2 class="section-title">전문 기술</h2>
						<div class="centered line"></div>
					</div>
				</div>
				<div class="row section-content" style="margin:0 auto">
					<div class="skill-container">
						<div class="col-full">
							<div class="col-full text-center" style="color: #333;">저는 웹으로는  자바를 사용합니다.<br>
							화면은 부트스트랩과 제이쿼리를 이용해 구성하였고
							<br>데이터베이스는 MariaDB를 사용하였습니다.
							</div>
						</div>
						<div class="col-1-5 skill">
							<h4></h4>
						</div>
						<div class="col-1-5 skill">
							<h4>Java</h4>
						</div>
						<div class="col-1-5 skill">
							<h4>Jquery</h4>
						</div>
						<div class="col-1-5 skill">
							<h4>JavaScript</h4>
						</div>
					</div>
					<div class="col-full skill-container">
						<h3>자주 사용하는 소프트웨어</h3>
					</div>
					<div class="col-2-3 col-wrap centered skill-container" style="with:100%;justify-content: center;">
						<div class="col-1-2" style="padding-left:100px">
							<h4>프레임워크하고 엔진</h4>
							<ul style="color: #333;"><li>Spring5</li></ul>							
						</div>
						<div class="col-1-2" style="padding-left:100px">
							<h4>소프트웨어</h4>
							<ul style="color: #333;"><li>Git</li><li>MySQL</li><li>MariaDB</li></ul>	
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="portfolio" class="section">
			<div class="container">
				<div class="row">
					<div class="col-full">
						<h2 class="section-title">프로젝트 & Git Hub</h2>
						<div class="centered line"></div>
					</div>
				</div>
				<div class="row section-content">
					<div class="row">
						<div class="col-full">
							<ul class="filters">
								<li class="filter active" data-filter="all">전체</li>
							</ul>
						</div>
					</div>
					<div class="row projects gallery" style="margin-left: 320px;">
						<div class="col-1-6 project port-application mix_all" style="display: inline-block;  opacity: 1;">
							<a id="project" href="#">
								<img src="/web/resources/img/logo/ci_logo2.png" alt="project">
							</a>
						</div>
						<div class="col-1-6 project port-game mix_all" style="display: inline-block;  opacity: 1; padding-top: 30px;">
							<a href="https://github.com/hmyanghm" title="github" >
								<img src="https://github.githubassets.com/images/modules/open_graph/github-mark.png" alt="Super Puzzle Platformer is a Unity game developed in 14 days.">
							</a><
						</div>						
					</div>
				</div>
			</div>
		</section>
		<section id="contact" class="section">
			<div class="container">
				<div class="row">
					<div class="col-full">
						<h2 class="section-title">연락처</h2>
						<div class="centered line"></div>
					</div>
				</div>
				<div class="row section-content">
					<div class="col-2-3 col-wrap centered text-center">
						<div class="row">
							<div class="col-full" style="margin-bottom: 25px;">

								항상 초심같은 마음가짐으로 임할것이고 최신기술 트렌드에도 뒤져지지
								않고 하루하루 성장하겠습니다  <br>rogbest@naver.com으로 이메일 주세요. 곧 답장 드리겠습니다.<br>언제든지 연락주세요	
							</div>
						</div>
						<div id="form-contact-container">
							<div class="col-full">
								<label for="">이름
									<h2>김민국</h2>
								</label>
							</div>
							<div class="col-full">
								<label for="">Email 주소

									<h2>rogbest@naver.com</h2>
								</label>
							</div>
							<div class="col-full">
								<label for="">휴대폰 번호
									<h2>010-4223-4683</h2>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	<div id="root">	
	</div>
	<div id="popup-root"></div>
	<div id="popup-exchange"></div>
	<script>
		$('#project')
		.click(()=>{
			app.run('<%=application.getContextPath()%>')
		})
	</script>
</body>
</html>
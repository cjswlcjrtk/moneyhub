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
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- 	maps -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js"></script>
	
	<!-- kakao map -->
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b335250e135b3c4aeca8f2b704648e5c"></script>
	
	<!-- kakao zip -->
	<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	
	<!-- kakao login -->
	<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/router.js"></script>
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
	<script src="<%=application.getContextPath()%>/resources/js/cmm/guide_recieve.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/guide_vue.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/remit/foreignRemit.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/remit/remit_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/remit/remit_dropdown.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/remit/remit_popup.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/remit_box.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/mypage/cus_info.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/sidebar.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/cus_info_chg.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/pwd_chg.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/auth_mgmt.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/alarm.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/ref_mgmt.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/withdrawal.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/admin/adminIndex.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin/buttons.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin/members.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin/membersChart.js"></script>
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
	<div id="root"></div>
	<div id="popup-root"></div>
	<script>
		app.run('<%=application.getContextPath()%>')
	</script>
</body>
</html>
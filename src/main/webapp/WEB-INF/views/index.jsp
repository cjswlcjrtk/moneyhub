<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<!-- 	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> -->
<!-- 	maps -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>

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
	
	<script src="<%=application.getContextPath()%>/resources/js/remit/foreignRemit.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/remit/remit_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/remit/remit_dropdown.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/remit/remit_popup.js"></script>
	
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

</head>
<body id="page-top">
	<div id="root">
	</div>
	<script>
		app.run('<%=application.getContextPath()%>')
	</script>
</body>
</html>
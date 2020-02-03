Kakao.init('0a12b00f4d7ca8dab74be5cd92f7e359')
//카카오 로그인 버튼을 생성합니다.
Kakao.Auth.createLoginButton({
	container : '#kakao-login-btn',
	success : function(authObj) {
		// 로그인 성공시, API를 호출합니다.
		Kakao.API.request({
			url : '/v1/user/me',
			success : function(res) {
				console.log(JSON.stringify(res.kaccount_email));
				console.log(JSON.stringify(res.id));
				console.log(JSON.stringify(res.properties.profile_image));
				console.log(JSON.stringify(res.properties.nickname));
			},
			fail : function(error) {
				alert(JSON.stringify(error));
			}
		});
	},
	fail : function(err) {
		alert(JSON.stringify(err));
	}
})

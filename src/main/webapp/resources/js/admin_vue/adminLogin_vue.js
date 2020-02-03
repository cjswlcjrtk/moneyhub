var login_vue = login_vue || {}
login_vue ={
	login_body : ()=>{
		return '	<div class="themoin-login">'+
		'				<div>'+
		'					<div class="image-box">'+
		'			<img src="/web/resources/img/logo/ci_logo.png">'+
		'					</div>'+
		'				</div>'+
		'			</div>'+
		'			<div style="display:none"></div>'
	},
	login : ()=>{
		return '<div>'+
		'			<div class="moin-login">'+
		'						<div class="newmoin-text-header">관리자 로그인</div>'+
		'						<form class="login" method="post" action="/a/v1/member/login">'+
		'							<div class="moin-input-group">'+
		'								<div class="moin-input">'+
		'									<label style="color: rgb(116, 127, 155);">이메일 (Email)</label>'+
		'									<input id="amail" class="fs-block" placeholder="youremail@email.com" type="text" tabindex="0" value="1">'+
		'									<div class="check_font" id="login_cemail" ></div>'+
		'								</div>'+
		'								<p class="moin-error"></p>'+
		'							</div>'+
		'							<div class="themoin-password-input moin-input-group password">'+
		'								<div class="moin-input">'+
		'									<label style="color: rgb(116, 127, 155);">비밀번호 (Password)</label>'+
		'									<input id="pwd" class="fs-block" placeholder="비밀번호를 입력해주세요." type="password" tabindex="0" maxlength="20" value="1">'+
		'									<div class="check_font" id="login_pwd" ></div>'+
		'								</div>'+
		'								<p class="moin-error"></p>'+
		'							</div>'+
		'						</form>'+
		'						<div class="divider"></div>'+
		'					</div>'+
		'			</div>'
	}
}
var auth_vue = auth_vue || {}
auth_vue ={
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
		'						<div class="newmoin-text-header">로그인</div>'+
		'						<form class="login" method="post" action="/a/v1/member/login">'+
		'							<div class="moin-input-group">'+
		'								<div class="moin-input">'+
		'									<label style="color: rgb(116, 127, 155);">이메일 (Email)</label>'+
		'									<input id="cemail" class="fs-block" placeholder="youremail@email.com" type="text" tabindex="0" value="">'+
		'									<div class="check_font" id="login_cemail" ></div>'+
		'								</div>'+
		'								<p class="moin-error"></p>'+
		'							</div>'+
		'							<div class="themoin-password-input moin-input-group password">'+
		'								<div class="moin-input">'+
		'									<label style="color: rgb(116, 127, 155);">비밀번호 (Password)</label>'+
		'									<input id="cpwd" class="fs-block" placeholder="비밀번호를 입력해주세요." type="password" tabindex="0" maxlength="20" value="">'+
		'									<div class="check_font" id="login_pwd" ></div>'+
		'								</div>'+
		'								<p class="moin-error"></p>'+
		'							</div>'+
/*		'							<button class="btn-submit" type="submit">로그인</button>'+*/
		'						</form>'+
		'						<p style="margin: 30px auto;">'+
		'							<a>비밀번호를 잊어버리셨나요?</a>'+
		'						</p>'+
		'						<div class="divider"></div>'+
		'						<p class="or">or</p>'+
		'						<div class="buttons">'+
/*		'							<button>'+
		'								<img src="https://img.themoin.com/public/img/login-email.svg">'+
		'								<p class="newmoin-text-text-button">이메일로<br>시작하기</p>'+
		'							</button>'+*/
		/*'							<button>'+
		'								<img src="https://img.themoin.com/public/img/login-facebook-2.svg">'+
		'								<p class="newmoin-text-text-button">페이스북으로<br>시작하기</p>'+
		'							</button>'+*/
		/*'							<button>'+
		'								<img src="https://img.themoin.com/public/img/login-naver-2.svg">'+
		'								<p class="newmoin-text-text-button">네이버로<br>시작하기</p>'+
		'							</button>'+*/
		'							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
		'							<a id="kakao-login-btn"></a>'+
		'							<a href="http://developers.kakao.com/logout"></a>'+	
		'						</div><br><br>'+
		'					</div>'+
		'			</div>'
	},	
	join_body : x=>{
		return '	<div class="themoin-signup">'+
		'				<div>'+
		'					<div class="image-box">'+
		'						<img src="'+x+'/resources/img/logo/ci_logo.png">'+
		'					</div>'+
		'				</div>'+
		'			</div>'
	},
	join_1 : ()=>{
		return '		<div><br><br><br>'+
		'					<div class="moin-login">'+
		'						<div class="newmoin-text-header">회원가입</div>'+
		'						<p class="signup-subtitle">아직 머니허브 회원이 아니신가요?</p><br>'+
		'						<div class="buttons">'+
	/*	'							<button id="join_page_btn">'+
		'								<img src="https://img.themoin.com/public/img/login-email.svg">'+
		'								<p class="newmoin-text-text-button">이메일로<br>시작하기</p>'+
		'							</button>'+*/
/*		'							<button>'+
		'								<img src="https://img.themoin.com/public/img/login-facebook.svg">'+
		'								<p class="newmoin-text-text-button">페이스북으로<br>시작하기</p>'+
		'							</button>'+*/
/*		'							<button>'+
		'								<img src="https://img.themoin.com/public/img/login-naver.svg">'+
		'								<p class="newmoin-text-text-button">네이버로<br>시작하기</p>'+
		'							</button>'+*/
		'							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
		'							<a id="kakao-login-btn"></a>'+
		'							<a href="http://developers.kakao.com/logout"></a>'+	
		'						</div><br>'+
		'						<div class="divider"></div>'+
/*		'						<p style="margin: 33px auto 0px;"><a>이미 회원이신가요?</a></p>'+*/
		'					</div>'
	},
	join_2 : ()=>{
		return '		<div>'+
		'					<div id="moneyhub_join" class="moin-login">'+
		'						<div class="newmoin-text-header">회원가입</div>'+
		'						<form class="signup" action="/a/v1/member/join" method="post">'+
		'							<div class="themoin-composite-input moin-input-group phone2">'+
		'								<div class="extra-controls">'+
		'									<button>인증번호받기</button>'+
		'								</div>'+
		'								<div class="moin-input" id="moneyhub-id">'+
		'									<label style="color: rgb(116, 127, 155);">이메일 주소 (Email)</label>'+
		//'										<input id="cemail" class="fs-block" placeholder="youremail@email.com" type="text" tabindex="0" value="">'+
		'								</div>'+
		'								<p class="moin-error"></p>'+
		'							</div>'+
		'							<div class="themoin-composite-input moin-input-group">'+
		'								<div class="moin-input">'+
		'										<label style="color: rgb(116, 127, 155);">인증번호 입력</label>'+
		'										<input class="fs-block" placeholder="인증번호 입력" type="text" tabindex="0" maxlength="6" value="">'+
		'								</div>'+
		'								<p class="moin-error"></p>'+
		'							</div>'+
		'							<div class="themoin-password-input moin-input-group">'+
		'								<div class="moin-input">'+
		'									<label style="color: rgb(116, 127, 155);">비밀번호 (Password)</label>'+
		'									<input id="cpwd" class="fs-block" placeholder="영문 숫자 조합 8~20" type="password" tabindex="0" value="">'+
		'									<div class="check_font" id="pwd_check" ></div>'+
		'								</div>'+
		'								<p class="moin-error"></p>'+
		'							</div>'+
		'							<div class="themoin-password-input moin-input-group">'+
		'								<div class="moin-input">'+
		'									<label style="color: rgb(116, 127, 155);">비밀번호 확인 (Confirm Password)</label>'+
		'									<input id="cfm_cpwd" class="fs-block" placeholder="위 비밀번호와 동일하게 입력해주세요." type="password" tabindex="0" value="">'+
		'									<div class="check_font" id="pwd2_check" ></div>'+
		'								</div>'+
		'								<p class="moin-error"></p>'+
		'							</div>'+
		'						<div class="checkboxes" id="checkbox_id">'+
		'								<a id="agree_box_all" class="themoin-checkbox">'+
		'									<div class="box"></div>'+
		'									<span><label class="caption">아래 항목에 모두 동의합니다.</label></span>'+
		'								</a>'+
		'								<pre style="white-space: pre-wrap; text-align: left;">머니허브 이용약관'+
		'+제1장 총칙'+
		'+제1조 (목적)'+
		'이 약관은 주식회사 머니허브(이하 "회사"라고 합니다)가 "머니허브" 인터넷 사이트(https://www.themoin.com, m.themoin.com 및 해당 모바일 사이트와 연결 사이트, 이하 "머니허브 사이트"라고 합니다)와 스마트폰 등 이동통신기기를 통해 제공되는 "머니허브" 모바일 애플리케이션(이하 "모바일 머니허브"라고 합니다)을 통하여 제공하는 소액해외송금서비스(이하 "서비스"라고 합니다)와 관련하여 회사와 회원 간의 권리와 의무, 책임사항 및 회원의 서비스이용절차에 관한 사항을 규정함을 목적으로 합니다.'+
		'+제2조 (용어의 정의)'+
		'이 약관에서 사용하는 용어의 정의는 다음과 같습니다.'+
		'1. 회원: 이 약관을 승인하고 회사와 서비스이용계약을 체결한 자를 말합니다. 회원은 가입형태에 따라 개인회원과 사업자회원으로 구분되며 상호간 회사가 정하는 바에 따라 전환할 수 있습니다.'+
		'2. 아이디(ID): 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인한 문자와 숫자 및 특수문자의 조합을 말합니다.'+
		'3. 비밀번호: 회원의 동일성 확인과 회원정보의 보호를 위하여 회원이 설정하고 회사가 승인한 문자와 숫자 및 특수문자의 조합을 말합니다.'+
		'4. 의뢰인: 회원으로서 회사의 지정 계좌에 금원을 입금하면서 지정하는 제3자가 수령할 수 있도록 의뢰하는 명의인을 말합니다.'+
		'5. 수령인: 의뢰인이 입금한 금원 또는 회사와 연계된 해외 협력업체로부터 회사가 지급 의뢰를 받은 금원을 회사가 제공하는 시스템을 통해서 수령하는 명의인을 말합니다.'+
		'6. 거래 지시: 회원이 회사에 일정 금액의 금원을 수령인이 수령할 수 있도록 의뢰하는 것을 말합니다.'+
		'7. 영업일: 공휴일, 주말, 대체휴일을 제외한 날로 회사가 대한민국에서 정상적으로 영업을 하는 날을 말합니다.'+
		'+제3조 (서비스의 종류)'+
		'회사가 제공하는 서비스는 아래와 같습니다.'+
		'1. 지급 업무: 회원이 해외의 수령인에게 보내고자 하는 금원을 회사의 연계된 국내외 협력업체(이하 "협력업체")를 통하여 위 수령인이 수령할 수 있도록 하는 서비스를 제공합니다.'+
		'2. 수령 업무: 회사가 해외 협력업체로부터 국내의 수령인에게 지급을 의뢰 받은 금원을 협력업체를 통하여 위 수령인이 수령할 수 있도록 하는 서비스를 제공합니다. '+
		'+제2장 서비스이용계약'+
		'+제4조 (서비스이용계약)'+
		'① 회사가 제공하는 서비스에 관한 이용계약(이하 "이용계약"이라고 합니다)은 해당 서비스를 이용하고자 하는 자의 이용신청에 대하여 회사가 승낙함으로써 성립합니다.'+
		'② 회원가입은 만 14세 이상의 개인 또는 사업자(개인사업자 및 법인사업자)가 할 수 있습니다.'+
		'③ 이용신청자는 실명으로 가입신청을 하여야 합니다. 실명이 아니거나 타인의 정보를 도용하여 회원으로 가입한 자는 회사가 제공하는 서비스를 이용할 수 없으며, 회원은 회사가 실명확인을 위해 회원에게 실명확인증표 등 필요한 자료를 요구할 경우 이에 응하여야 합니다.'+
		'④ 회원의 아이디(ID)는 회원 1인당 1개의 아이디를 사용하는 것을 원칙으로 하되, 사업자회원의 경우에는 사업자등록번호가 실명의 기준이 됩니다.'+
		'⑤ 개인회원이 이용계약 종료 후 재가입하는 경우에는 최종 이용시에 사용한 아이디(ID)와 동일한 아이디(ID)를 사용하는 것을 원칙으로 합니다.'+
		'+제5조 (이용신청)'+
		'① 서비스를 이용하고자 하는 자는 회사가 온라인으로 제공하는 가입신청양식에 따라 사실대로 기재하여야 합니다. 가입신청시 기재사항은 이용신청자가 개인, 외국인 또는 사업자인지 여부에 따라 구분됩니다.'+
		'② 법인은 사업자회원으로 가입신청 하여야 하고, 개인사업자의 경우에도 그 사업과 관련하여 서비스를 이용하고자 하는 때에는 사업자회원으로 가입하여야 합니다. 사업자회원으로 가입하고자 하는 자는 회사의 요청에 따라 사업자등록증, 법인등기부등본, 결제를 위한 대표자 또는 법인명의의 계좌정보 등의 증빙자료와 추가 정보를 제공하여야 합니다.'+
		'+제6조 (이용신청의 승낙)'+
		'① 회사는 이용신청자가 필수기재항목을 정확하게 기재하고 이 약관에 동의한 경우에는 이 약관에 규정된 실명확인절차를 거쳐 서비스의 이용을 승낙하는 것을 원칙으로 합니다.'+
		'② 회사는 다음과 같은 사유가 있는 경우, 이용신청에 대한 승낙을 거부할 수 있습니다.'+
		'1. 만 14세 미만의 자가 이용신청을 하는 경우'+
		'2. 가입신청시 기재하여야 할 필수 기재 항목에 허위사실을 기재한 경우'+
		'3. 기타 이 약관에 위배되거나 위법 또는 부당한 이용신청임이 확인된 경우'+
		'③ 회사는 다음과 같은 사유가 있는 경우, 이용신청에 대한 승낙을 유보할 수 있습니다. 이 경우, 회사는 이용신청자에게 승낙유보의 사유, 승낙가능시기 또는 승낙에 필요한 추가요청정보 내지 자료 등 기타 승낙유보와 관련된 사항을 해당 서비스화면에 게시하거나 이메일을 통하여 통지합니다.'+
		'1. 설비에 여유가 없는 경우'+
		'2. 기술상 지장이 있는 경우'+
		'3. 기타 회사가 합리적인 판단에 의하여 필요하다고 인정하는 경우'+
		'+제7조 (이용계약의 해지)'+
		'회원 또는 회사는 아래에서 정한 절차에 따라 이용계약을 해지할 수 있습니다.'+
		'① 회원은 언제든지 회사에게 해지의사를 통지함으로써 이용계약을 해지할 수 있습니다. 회사는 온라인으로 이용계약을 해지할 수 있는 절차를 제공하고, 이용계약은 회원의 해지의사가 회사에 도달한 때에 종료됩니다. 본 항에 따라 해지를 한 회원은 이 약관이 정하는 회원가입절차와 관련조항에 따라 회원으로 다시 가입할 수 있습니다.'+
		'② 회사는 다음과 같은 사유가 있는 경우 이용계약을 해지할 수 있습니다. 이 경우 회사는 회원에게 이메일, 전화, 팩스 기타의 방법을 통하여 해지사유를 밝혀 해지의사를 통지합니다. 이 경우 회사는 해당 회원에게 사전에 해지사유에 대한 의견진술의 기회를 부여하여야 하며, 이용계약은 회사의 해지의사가 회원에게 도달한 때에 종료됩니다.'+
		'1. 회원에게 제6조 제2항에서 정하고 있는 이용신청의 승낙거부사유가 있음이 확인된 경우'+
		'2. 기타 회원이 이 약관에 위배되는 행위를 하여 회사가 상당한 기간을 정하여 이에 대한 시정요구를 하였음에도 불구하고 회원이 이를 시정하지 않는 경우'+
		'+제3장 회원정보의 보호'+
		'+제8조 (회원정보의 수집과 보호)'+
		'① 회사는 이용계약을 위하여 회원이 제공한 정보 외에도 수집목적 또는 이용목적 등을 밝혀 회원으로부터 필요한 정보를 수집·이용할 수 있습니다. 이 경우, 회사는 회원으로부터 정보 수집·이용에 대한 동의를 받으며, 회원의 개인정보의 수집·이용·제공에 관한 동의 거절 시 제한되는 서비스를 구체적으로 명시하고, 필수수집항목이 아닌 개인정보의 수집·이용·제공에 관한 이용신청자의 동의 거절을 이유로 회원가입을 제한하거나 거절하지 않습니다.'+
		'② 회사가 정보 수집·이용을 위하여 회원의 동의를 받는 경우, 회사는 정보의 수집목적 및 이용목적, 제3자에 대한 정보 제공 관련사항을 미리 명시하거나 고지합니다. 회원은 정보제공에 동의하더라도 언제든지 그 동의를 철회할 수 있습니다.'+
		'③ 회사는 아이디(ID) 등 서비스화면을 통하여 공개되는 정보를 제외하고는 회사가 수집한 회원정보를 정보수집시에 밝힌 수집목적, 이용목적, 원활한 서비스의 제공 및 제공서비스의 확대 외의 용도로 사용하거나 제3자에게 제공하지 않습니다. 회사는 정보수집시에 밝힌 이용목적 이외에 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용∙제공 단계에서 당해 회원에게 그 목적을 고지하고 동의를 받습니다, 다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다.'+
		'④ 회사는 회원정보의 보호를 위하여 관리자를 최소한으로 한정하며, 회사의 고의 또는 과실로 인하여 회원정보가 분실, 도난, 유출, 변조되거나 위법하게 제3자에게 제공된 경우에는 그로 인한 회원의 손해에 대하여 모든 책임을 부담합니다.'+
		'⑤ 이용계약이 종료된 경우, 회사는 당해 회원의 정보를 파기하는 것을 원칙으로 합니다. 다만, 아래의 경우에는 회원정보를 보관하고, 이 경우 회사는 보관하고 있는 회원정보를 그 보관의 목적으로만 이용합니다.'+
		'1. 상법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.'+
		'2. 기타 정보수집에 관한 동의를 받을 때 보유기간을 명시한 경우에는 그 보유기간까지 회원정보를 보관합니다.'+
		'⑥ 회사가 제3자에게 회원의 개인정보를 제공할 필요가 있는 경우 회사는 실제 제공되는 개인정보 항목, 제공받는 자, 제공받는 자의 개인정보 이용목적 및 보유·이용기간 등을 명시하여 회원의 동의를 받고, 개인정보의 수집·처리·관리 등을 위탁하는 경우에는 위탁업무의 내용 및 수탁사의 명칭 등에 관한 사항을 서면, 전자우편, 모사전송, 전화 또는 홈페이지를 통해 미리 회원에게 고지하여 동의를 받고, 개인정보 처리방침에 포함하여 머니허브 사이트와 모바일 머니허브에 공개합니다.'+
		'⑦ 회사는 회사의 개인정보 관리책임자 및 연락처, 회원정보의 보호와 관리에 관한 개인정보처리방침을 회원과 회사의 서비스를 이용하고자 하는 자가 알 수 있도록 머니허브 사이트와 모바일 머니허브에 공개합니다.'+
		'⑧ 회사가 회원의 개인정보를 처리할 때에는 개인정보의 분실·도난·누출·변조 또는 훼손을 방지하기 위하여 관련법령에서 정한 기술적·관리적 조치를 다하여야 합니다.'+
		'+제9조 (회원정보의 변경)'+
		'① 회원은 이용신청시 기재한 사항이 잘못되었거나 변경되었을 경우, 즉시 해당 사항을 수정해야 합니다. 단, 아이디(ID) 및 성명은 수정할 수 없음을 원칙으로 합니다.'+
		'② 회사의 회원에 대한 통지는 회원정보에 기재된 이메일 주소에 도달함으로써 통지된 것으로 보며, 회원정보가 변경되었음에도 해당 사항을 수정하지 않음으로써 발생한 손해와 잘못된 수정으로 인하여 발생한 손해는 회사의 고의, 과실이 없는 한 당해 회원이 부담하여야 하며 회사는 이에 대하여 책임을 지지 않습니다.'+
		'+제10조 (아이디(ID) 및 비밀번호 관리)'+
		'① 아이디(ID) 및 비밀번호에 대한 관리책임은 회원에게 있으며, 회원은 아이디(ID) 및 비밀번호를 타인에게 양도, 대여할 수 없습니다.'+
		'② 회사의 귀책사유에 의하지 아니한 아이디(ID) 또는 비밀번호의 유출, 양도, 대여로 인한 손실이나 손해에 대하여 회사는 아무런 책임을 지지 않습니다.'+
		'③ 회원이 아이디(ID) 또는 비밀번호를 도난 당하거나 제3자가 이를 사용하고 있음을 인지한 경우 즉시 회사에게 통보하여야 하고, 회사의 안내가 있는 경우에는 그에 따라야 합니다.'+
		'+제4장 서비스의 이용'+
		'+제11조 (서비스의 이용)'+
		'① 회원이 회사의 서비스를 통하여 거래할 수 있는 한도는 외국환거래규정에 따라 기획재정부장관이 고시하는 동일인당 건당 지급 및 수령 한도와 연간 지급 및 수령 한도 금액을 한도로 합니다. '+
		'② 회원은 회원이 지정하는 제3자에게 금원을 지급하고자 하는 경우 최초 1회 회사가 지정하는 인증 절차를 거쳐 본인임을 확인한 후에 서비스 이용이 가능합니다.'+
		'③ 회사는 회원에게 서비스 이용에 대한 서비스 이용 수수료를 부과할 수 있으며, 회사는 회원의 서비스 이용 시 해당 건에 대해 확정된 서비스 이용 수수료를 통지합니다. 이 경우 회사는 수수료에 관한 사항을 환전수수료, 송금수수료, 협력업자 수수료 등 세부 구성항목별로 구분하여 그 내역을 회원에게 제공하여야 합니다.'+
		'④ 회원은 회사의 서비스를 1일 24시간, 1년 365일 이용할 수 있으나, 시스템 점검 등 기타 불기피한 사유가 발생할 경우 회사는 회원에게 미리 사유와 기간을 고지하여 회원의 서비스 이용을 제한할 수 있습니다.'+
		'+제12조 (거래 지시 및 거래의 완료)'+
		'① 의뢰인이 머니허브 사이트에서 거래하고자 하는 금액을 기재하고 수령인명, 수령인의 전화번호, 주소, 계좌번호, 은행명 등을 기재한 후 거래확인을 할 때 거래 지시가 완료(이하 "거래 지시 완료"라고 합니다) 됩니다. 회사는 거래 지시가 완료된 시점의 고시 환율을 적용하여 거래를 진행하며, 회사는 의뢰인이 거래 지시 완료 전에 의뢰인이 거래하고자 하는 금액에 대한 서비스 이용 수수료, 적용 환율, 실제 수령인이 받는 금액의 원화표시 및 외화표시 금액, 거래 완료에 소요되는 예상 기간에 관한 사항을 의뢰인이 확인할 수 있도록 합니다.'+
		'② 회사는 소액해외송금업무에 사용할 계좌인 것으로 소액해외송금업 등록(변경등록 포함) 당시 지정한 회사명의의 금융회사 개설 계좌(이하 "지정계좌"라고 합니다)를 통해서만 수령인에게 금원을 지급하거나 의뢰인으로부터 금원을 수령할 수 있습니다. 회사는 지정계좌에 관한 내용을 회사 홈페이지에 게시하고 이를 최신 내용으로 관리하여야 합니다.'+
		'③ 의뢰인은 거래 지시 완료 후 회사가 지정한 시한 내에 지정계좌로 해당 금원을 입금합니다. 이 경우, 의뢰인이 거래 지시한 금원과 의뢰인이 실제로 입금한 금원의 액수가 일치하지 않는 경우에는 회사는 의뢰인에게 이메일 또는 문자메시지 등 의뢰인이 선택한 방법을 통하여 불일치 사실을 통지하고, 의뢰인이 거래 지시한 금원과 동일한 액수를 입금할 때까지 거래를 이행하지 않습니다.'+
		'④ 의뢰인이 거래 지시 완료 후 회사가 지정한 시한 내에 회사 명의의 계좌에 거래 지시한 금원과 동일한 액수를 입금하지 아니하는 경우 해당 거래 지시는 취소되며(이하 "취소된 거래 지시"라고 합니다), 의뢰인이 다시 동일한 내용으로 회사에 거래 지시(이하 "재거래 지시"라고 합니다)를 하더라도 해당 거래에 대해서는 재거래 지시 완료 시점을 기준으로 적용 환율 등이 결정되어 취소된 거래 지시 시 안내되었던 내용과는 거래 내용이 달라질 수 있습니다. 한편, 회사는 재거래 지시 완료 전에도 의뢰인이 제1항 제2문의 확인 사항을 확인할 수 있도록 합니다. '+
		'+제 13조 (거래 지시 철회)'+
		'① 의뢰인은 거래 지시 후 거래 완료 전까지는 거래 지시를 철회할 수 있으나, 거래가 완료된 이후에는 사유를 불문하고 거래 지시를 철회할 수 없습니다. 다만, 의뢰인의 거래 지시 철회가 가능한 경우에도 회사는 의뢰인의 해당 거래 요청 건에 대하여 기 진행된 상황에 따라 회원에게 소정의 거래 철회 수수료를 부과할 수 있고, 회사는 의뢰인의 거래 지시 철회 신청 시 해당 거래 요청 건에 적용되는 거래 철회 수수료를 의뢰인에게 미리 안내하여야 합니다.'+
		'② 제1항에 따른 거래 지시 철회 시 회사는 의뢰인이 거래를 지시한 금원에서 거래 철회 수수료를 공제한 나머지 금원을 회원에게 반환할 수 있습니다.'+
		'+제 14조 (거래 내역 통지 및 회원의 확인 의무)'+
		'① 회사는 의뢰인의 거래 지시 요청 건이 완료된 즉시 의뢰인에게 이메일 또는 문자메시지로 거래 내역을 통지하여야 합니다.'+
		'② 의뢰인은 회사에 요청한 거래 지시 내용과 거래 내역 통지 내용이 다른 경우에는 지체 없이 회사에게 해당 사실을 통보하고 사실 관계 확인을 요청하여야 합니다.'+
		'③ 회사는 제2항에 따른 의뢰인의 요청에 대해 의뢰인의 요청이 있은 날로부터 2주 이내에 확인된 사실 관계와 해결 방안에 대해서 의뢰인에게 알려 주어야 합니다.'+
		'④ 기타 법령에 의하여 거래 내역에 대해서 의뢰인에게 별도의 신고 또는 보고 의무가 발생하는 경우 의뢰인 스스로 해당 의무를 이행하도록 하며, 회사는 해당 의무 이행에 관여하지 않습니다.'+
		'+제 15조 (아이디, 비밀번호 도난, 분실, 위조, 변조 시)'+
		'① 회원은 회사의 아이디(ID) 또는 비밀번호가 도난, 분실, 위조 또는 변조된 사실을 알았거나 기타 회원의 회사 서비스 이용에 영향을 줄 만한 정보가 누설되었음을 알았을 때에는 지체없이 이를 회사에 신고하여야 합니다.'+
		'② 회사는 제1항의 신고를 받은 즉시부터 해당 문제가 해결될 때까지 회원의 서비스 이용을 중지하여야 하고, 이용 중지 기간 동안 제3자가 회원의 아이디(ID) 또는 비밀번호를 사용함으로써 회원에게 발생한 금전적인 손해를 배상할 책임을 부담합니다.'+
		'+제 16조 (서비스 이용정지, 이용제한)'+
		'회원의 거래 내역 상으로 통상적인 거래와는 다른 이상 거래로 의심되는 거래가 있는 경우 회사는 해당 회원에게 고지를 하고 사실이 확인될 때까지 해당 회원의 서비스 이용을 일시적으로 제한할 수 있습니다. 해당 서비스 제한 기간은 사실 확인을 위한 정당한 이유가 있는 이용 제한이므로 이용 제한에 대해서 회사는 별도로 책임을 부담하지 않습니다.'+
		'+제5장 손해배상책임 등'+
		'+제17조 (손해배상)'+
		'① 회사는 회사의 귀책사유로 다음 각 호의 어느 하나에 해당하는 사고가 발생하여 회원이 손해를 입은 경우 그 손해를 배상할 책임을 부담하되, 손해배상의 범위는 민법에서 정하고 있는 통상손해를 포함하고, 특별한 사정으로 인한 손해는 회사가 그 사정을 알았거나 알 수 있었을 때에 한하여 배상책임이 있습니다.'+
		'1. 접근매체의 위조나 변조로 발생한 사고'+
		'2. 거래 지시 및 전달의 전자적 전송이나 처리 과정에서 발생한 사고'+
		'3. 서비스 제공을 위한 전자적 장치 또는 회사의 정보통신망에 침입하여 거짓이나 그 밖의 부정한 방법으로 획득한 접근매체의 이용으로 발생한 사고'+
		'② 제1항에도 불구하고 회사는 다음 각 호의 어느 하나에 해당하는 경우에는 그 책임의 전부 또는 일부를 회원이 부담하게 할 수 있습니다.'+
		'1. 사고 발생에 있어서 회원의 고의나 중대한 과실이 있는 경우'+
		'2. 회원이 사고 발생을 알았음에도 불구하고 약관 제15조에 따라 회사에 통지하지 않은 경우'+
		'3. 회원이 아이디(ID)나 비밀번호를 제3자에게 대여하거나 그 사용을 위임한 경우'+
		'4. 회원이 제3자가 권한없이 회원의 아이디(ID)와 비밀번호를 이용하여 회사의 서비스를 이용할 수 있음을 알았거나 쉽게 알 수 있었음에도 불구하고 아이디(ID)와 비밀번호를 누설하거나 노출 또는 방치한 경우'+
		'+제18조 (환급)'+
		'① 의뢰인의 귀책사유 없이 의뢰인의 거래지시 완료일로부터 15일 내에 거래가 완료되지 않는 경우 의뢰인은 회사에 거래지시한 금원의 환급을 신청할 수 있습니다.'+
		'② 회사는 의뢰인으로부터 제1항에 따른 환급신청을 받은 경우 특별한 사정이 있는 경우를 제외하고는 당초 거래지시한 금원 및 제17조 제1항에 따른 손해배상금을 의뢰인에게 지급하여야 합니다. '+
		'+제19조 (분쟁처리절차)'+
		'① 회사는 소액해외송금업무와 관련하여 고객이 제기하는 정당한 의견이나 불만을 반영하고 고객이 소액해외송금업무와 관련하여 입은 손해를 배상하기 위한 절차(이하 분쟁처리절차)에 관한 사항을 마련하여야 합니다.'+
		'② 회사는 분쟁사항에 대한 접수방법(분쟁처리책임자와 담당자 지정내역 및 그 연락처 포함), 분쟁처리절차(단순불만사항과 손해배상요구사항을 구분하여 마련) 및 분쟁처리결과에 대한 고객통보에 관한 사항(처리기한, 고객통보방식 등) 등을 고객에게 제공하여야 합니다.'+
		'③ 고객은 소액해외송금거래의 처리에 관하여 이의가 있을 때에는 회사의 분쟁처리기구(분쟁처리책임자 및 담당자 등)에 그 해결을 요구할 수 있으며, 회사는 이를 조사하여 제2항의 처리기한 이내에 처리결과를 고객에게 통보하여야 합니다.'+
		'④ 회사는 분쟁처리책임자와 담당자 지정내역 및 그 연락처 등을 회사 홈페이지 등에 게시하고 이를 최신 내용으로 관리하여야 합니다.'+
		'+제20조 (회사의 면책)'+
		'천재지변, 회사의 귀책사유가 없는 정전 및 통신장애 등으로 인하여 일시적 또는 종국적으로 서비스를 제공할 수 없는 경우, 이와 관련하여 회사의 손해배상책임은 면제됩니다. 이 경우 회사는 회사의 홈페이지에 게시하거나 기타의 방법으로 회원들에게 통지합니다.'+
		'+제6장 기타'+
		'+제21조(거래기록의 보존) '+
		'회사는 외국환거래법령 등에 따라 이 약관에 따른 거래 기록을 5년간 보관하여야 합니다.'+
		'+제22조 (준거법 및 관할법원)'+
		'이 약관과 회사와 회원 간의 서비스 이용계약 및 그 해석에 대해서는 대한민국 법령이 적용되며, 이와 관련하여 분쟁이 발생할 경우 당사자는 회사의 소재지를 관할하는 법원 또는 민사소송법 및 관련 법률이 정하는 관할 법원을 해당 분쟁의 제1심의 관할 법원으로 한다.'+
		'+제23조 (약관의 명시, 효력 및 변경)'+
		'① 회사는 이 약관을 서비스를 이용하고자 하는 자와 회원이 알 수 있도록 서비스가 제공되는 머니허브 사이트의 초기화면에 게시하여야 하며, 회원과 이 약관 및 서비스 이용 계약을 체결할 경우 고객에게 약관을 명시하여야 합니다.'+
		'② 회사는 회원이 요청할 경우 회원에게 전자문서의 전송(전자우편을 이용한 전송을 포함합니다)의 방식으로 약관의 사본을 고객에게 교부하여야 합니다.'+
		'③ 회사는 고객이 약관의 내용에 대한 설명을 요청하는 경우 다음 각 호의 어느 하나의 방법으로 고객에게 약관의 중요내용을 설명하여야 합니다.'+
		'1. 약관의 중요내용을 고객에게 직접 설명'+
		'2. 약관의 중요내용에 대한 설명을 전자적 장치를 통하여 고객이 알기 쉽게 표시하고 고객으로부터 해당 내용을 충분히 인지하였다는 의사표시를 전자적 장치를 통하여 수령'+
		'④ 회사가 이 약관을 개정하는 경우에는 개정된 약관의 적용일자 및 개정사유를 명시하여 현행 약관과 함께 그 적용일자 7일 이전 이전부터 적용일자 전일까지 위 1항의 방법으로 공지합니다. 개정된 약관은 적용일자 이전으로 소급하여 적용되지 아니합니다.'+
		
		'+제24조 (관련법령과의 관계)'+
		'이 약관 또는 개별약관에서 정하지 않은 사항은 외국환거래법, 전자금융거래법, 전기통신사업법, 전자거래기본법, 정보통신망이용촉진 및 정보보호 등에 관한 법률 등 관련 법령의 규정과 일반적인 상관례에 의합니다.'+
		
		'+부 칙'+
		'(적용일자)'+
		'이 약관은 2019년 2월 21일부터 적용됩니다.'+
		
		'+분쟁처리책임자 및 담당자'+
		'허성현 070-5089-2017'+
		'금융감독원 종합민원센터 1322'+
		'							</pre>'+
		'								<a id="agree_box_1" class="themoin-checkbox">'+
		'									<div class="box"></div>'+
		'									<span>'+
		'										<label class="caption">'+
		'											<span class="underline" style="cursor:pointer;" target="new">이용 약관'+
		'											</span>'+
		/*'											<span class="underline" onclick="location.href='https://www.themoin.com/terms'" style="cursor:pointer;" target="new">이용 약관'+
		'											</span>'+*/
		'											<span>에 대한 동의 (필수)</span>'+
		'										</label>'+
		'									</span>'+
		'								</a>'+
		'								<pre style="white-space: pre-wrap; text-align: left;">머니허브 개인정보 처리방침'+
		'주식회사 머니허브(이하 “회사”)는 회사가 운영하는 인터넷 사이트(www.themoin.com 및 해당 모바일 사이트와 연결 사이트), 스마트폰 등 이동통신기기를 통해 제공되는 머니허브 모바일 애플리케이션 (이하 “머니허브”)를 이용하는 이용자님들의 개인정보를 매우 중요하게 생각하며 아래와 같은 개인 정보 처리방침을 가지고 있습니다. 이 개인정보 처리방침은 개인정보와 관련한 법령 또는 지침의 변경이 있는 경우 개정되고, 회사 정책의 변화에 따라 달라질 수 있으니 이용자님들께서는 개인정보 처리 방침을 수시로 확인하여 주시기 바랍니다.'+
		'1. 개인정보의 수집•이용'+
		'(1) 회사가 개인정보를 수집하는 목적은 이용자의 신분과 서비스 이용 의사를 확인하여 최적화되고 맞춤화 된 서비스를 제공하고자 함입니다. 회사는 최초 회원가입 시[회원이 아닌 이용자(이하 “타발송금 수령인”이라 함)의 경우 최초 타발송금(대한민국 외의 국가에 소재한 의뢰인으로부터 회사의 협력업체가 이용자에 대한 송금을 의뢰 받아 회사를 통해 이용자에게 금원을 지급하는 것을 말합니다) 수령 시] 서비스의 본질적 기능을 수행하기 위해 반드시 필요한 최소한의 정보만을 수집하고 있으며 회사가 제공하는 서비스 이용에 따라서 필요한 정보를 추가로 수집할 수 있습니다.'+
		'(2) 회사는 개인정보를 수집•이용목적 이외에 다른 용도로 이를 이용하거나 이용자의 동의 없이 제3자에게 이를 제공하지 않습니다.'+
		'(3) 회사는 다음과 같은 목적으로 개인정보를 수집하여 이용할 수 있습니다. 다만, 관련법령에 따라 개인정보의 수집• 보관이 불가피한 경우에는 이용자에게 고지하여 해당 정보를 수집할 수 있습니다.'+
		'1) 회원의 경우'+
		'- 본인여부 확인 : 이름, 아이디, 비밀번호, 휴대폰번호, 이메일 주소'+
		'- 약관 변경 등의 고지를 위한 연락 : 이름, 아이디, 전화번호, 이메일 주소, 주소'+
		'- 부정 이용 방지, 서비스 제공 및 계약의 이행 : 사이트 방문 일시, IP 주소, 서비스 이용 기록 및 기기 정보'+
		'- 금액 이체 및 서비스 이행 : 이름, 은행계좌번호 및 기타 은행 정보, 주소, 전화번호'+
		'- 본인인증 식별, 연령 확인 : 이름, 성별, 생년월일, 휴대폰번호'+
		'- 신규 서비스 개발, 맞춤 서비스 및 서비스 이용 통계 : 성별, 생년월일, 전화번호, 이메일 주소, 사이트 방문 일시, IP 주소, 서비스 이용 기록 및 기기 정보'+
		'2) 타발송금 수령인의 경우'+
		'- 본인여부, 본인인증 식별, 연령 확인 : 이름, 성별, 생년월일, 전화번호'+
		'- 금액 이체 및 서비스 이행 : 이름, 은행계좌번호 및 기타 은행 정보, 주소, 전화번호'+
		'- 신규 서비스 개발, 맞춤 서비스 및 서비스 이용 통계 : 성별, 생년월일, 전화번호, 이메일 주소, 사이트 방문 일시, IP 주소, 서비스 이용 기록 및 기기 정보'+
		'(4) 서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집•저장•조합•분석 될 수 있습니다.'+
		'- IP 주소, 쿠키, 서비스 이용 기록, 기기 정보'+
		'(5) 회사는 이용자의 개인정보를 수집할 경우 법령상 근거가 없는 한 반드시 이용자의 동의를 얻어 수집하며, 이용자의 기본적 인권을 침해할 우려가 있는 인종, 출신지, 본적지, 사상, 정치적 성향, 범죄기록, 건강상태 등의 정보는 이용자의 동의 또는 법령의 규정에 의한 경우 이외에는 수집하지 않습니다.'+
		'(6) 회사는 회원 가입 또는 개인정보 수집을 만 14세 이상인 경우에 가능하도록 하며 개인정보의 수집•이용에 법정대리인의 동의가 필요한 만 14세 미만 아동의 개인정보는 원칙적으로 수집하지 않습니다. 단, 법정대리인의 동의를 얻은 경우에는 만 14세 미만 이용자의 개인정보를 수집•이용할 수 있습니다.'+
		'(7) 회사는 다음과 같은 방법으로 개인정보를 수집할 수 있습니다. '+
		'가. 홈페이지, 모바일 어플리케이션, 모바일 웹사이트, 서면, 팩스, 전화, 이벤트 응모'+
		'나. 생성정보 수집 툴을 통한 자동 수집'+
		'2. 개인정보 처리 위탁'+
		'회사는 서비스 제공을 위하여 필요한 업무 중 일부를 아래와 같이 외부 업체에 위탁하고 있으며, 위탁 받은 업체가 개인정보를 안전하게 처리하도록 관리, 감독을 하고 있습니다.'+
		'(1) Cashwell Asset Management'+
		'- 위탁업무 내용 : 일본 내 송금 업무'+
		'- 개인정보 보유 및 이용기간 : 위탁 목적 달성 시 까지'+
		'(2) Tranglo SDN. BHD.'+
		'- 위탁업무 내용 : 중국, 싱가폴 내 송금 업무'+
		'- 개인정보 보유 및 이용기간 : 위탁 목적 달성 시 까지'+
		'(3) Wyre, Inc.'+
		'- 위탁업무 내용 : 미국 내 송금 업무'+
		'- 개인정보 보유 및 이용기간 : 위탁 목적 달성 시 까지'+
		'(4) (주)스윗트래커'+
		'- 위탁업무 내용 : 문자 및 알림톡 전송 시스템 운영'+
		'- 개인정보의 보유 및 이용기간 : 위탁 목적 달성 시 까지'+
		'(4) Infobip ltd.'+
		'- 위탁업무 내용 : 문자 및 알림톡 전송 시스템 운영'+
		'- 개인정보의 보유 및 이용기간 : 위탁 목적 달성 시 까지'+
		'(4) (주)누리고'+
		'- 위탁업무 내용 : 문자 및 알림톡 전송 시스템 운영'+
		'- 개인정보의 보유 및 이용기간 : 위탁 목적 달성 시 까지'+
		'(5) Amazon Web Services, Inc.'+
		'- 위탁업무 내용 : 클라우드 서비스 운영 및 이메일 전송 시스템 운영'+
		'- 개인정보의 보유 및 이용기간 : 위탁 목적 달성 시 까지'+
		'(6) 주식회사 조이코퍼레이션'+
		'- 위탁업무 내용 : 채팅 문의 시스템 운영'+
		'- 개인정보의 보유 및 이용기간 : 위탁 목적 달성 시 까지'+
		'3. 이용자 개인정보의 보유: 이용기간 및 파기'+
		'회사는 이용자의 개인정보를 원칙적으로 고지 또는 약정한 기간 동안 보유 및 이용하며 개인정보의 이용자의 파기 요청이 있는 경우 지체 없이 파기합니다.'+
		'단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 법령에서 규정한 일정한 기간 동안 이용자 개인정보를 보관합니다. 이 경우 회사는 해당 정보를 그 보관의 목적으로만 이용하며 마케팅 등 다른 목적으로 이용하지 않습니다.'+
		'-	통신비밀보호법 제 12조의 2'+
		'로그인 기록, IP 주소 등 : 3개월'+
		'-	특정 금융거래정보법 제 10조'+
		'서비스 이용 기록, 이용자 정보 등 : 5년'+
		'-	외국환거래법 시행령 제 17조의 1'+
		'서비스 이용 기록, 이용자 정보 등 : 5년'+
		'(1) 수집된 개인정보의 보유•이용기간은 회원의 경우 서비스 이용계약 체결(회원가입)시부터 서비스 이용계약 해지 시 까지 이며, 타발송금 수령인의 경우 개인정보 수집 및 이용 동의 해지 시 까지 입니다. 또한, 서비스 이용계약 또는 동의 해지 시 회사는 이용자의 개인정보를 상기 명시한 정보 보유 사유에 따라 일정 기 간 저장하는 자료를 제외하고는 지체 없이 파기하며 개인정보처리가 제3자에게 위탁된 경우에는 수탁자 에게도 파기하도록 지시합니다.'+
		'(2) 회사는 1년 동안 회사의 서비스를 이용하지 않은 이용자의 개인정보는 ‘정보통신망 이용촉진 및 정보보호등에 관한 법률 제29조’ 에 근거하여 이용자에게 사전통지하고 개인정보를 파기하거나 별도로 분리하여 저장 합니다.'+
		'(3) 회사는 제3항의 기간 만료 30일 전까지 개인정보가 파기되거나 분리되어 저장•관리되는 사실과 기간 만일 및 해당 개인정보의 항목을 공지사항, 전자우편 등의 방법으로 이용자에게 알립니다. 이를 위해 이용자는 회사에 정확한 연락처 정보를 제공/수정하여야 합니다.'+
		'(4) 이용자의 개인정보는 수집 및 이용목적이 달성된 후에는 지체 없이 파기됩니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각 등을 통하여 파기하고, 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법 또는 물리적 방법을 사용하여 파기합니다.'+
		'4. 스마트폰 앱 관리'+
		'스마트폰 앱을 통해 서비스 이용 시, 이용자에게 개인정보 수집・이용 동의를 받은 범위 내에서 단말기 정보 등에 접근한다는 것을 고지하고 승인을 획득한 후 정보가 수집되거나 전송됩니다. 앱 상에서 이용자가 단말기 접근 권한을 허용하였다고 하여 허용 권한과 관련된 모든 정보가 즉시 수집되거나 전송되는 것은 아닙니다.'+
		'5. 쿠키(Cookie)의 운용 및 거부'+
		'(1) 회사는 개인 맞춤 서비스를 제공하기 위해서 이용자에 대한 정보를 저장하고 수시로 불러오는 쿠키(cookie)를 사용합니다. 쿠키는 웹사이트 서버가 이용자의 브라우저에게 전송하는 소량의 정보로서 이용 자 컴퓨터의 하드디스크에 저장됩니다.'+
		'(2) 회사는 회원을 식별하고 회원의 로그인 상태를 유지하기 위해 쿠키를 사용할 수 있으며, 쿠키의 사용을 통해서만 가능한 특정된 맞춤형 서비스를 제공할 수 있습니다.'+
		'(3) 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 조정함으로써 모든 쿠키를 허용/거부하거나, 쿠키가 저장될 때마다 확인을 거치도록 할 수 있습니다.'+
		'(4) 쿠키의 저장을 거부할 경우에는 개인 맞춤서비스 등 회사가 제공하는 일부 서비스는 이용이 어려울 수 있습니다.'+
		'6. 이용자의 권리'+
		'(1) 이용자는 언제든지 머니허브 사이트의 “정보수정”을 통하여 이용자의 개인정보를 열람, 정정 처리하실 수 있으며, 이용자의 개인정보가 제3자에게 제공되거나 처리 위탁된 경우 이용자는 회사 또는 ‘제3자’/’수탁자’에게 파기를 요청할 수 있습니다. 또한 개인정보 오류에 대한 정정요청한 경우에는 다른 법률에 따라 개인정보의 제공을 요청 받는 경우가 아닌 한 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. '+
		'(2) 이용자는 언제든지 머니허브 사이트의 개인정보에 대하여 처리의 정지를 요구 할 수 있습니다. 다만 아래의 경우에 해당하는 경우 처리정지 요구를 거절할 수 있습니다. '+
		'1) 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우'+
		'2) 다른 사람의 생명•신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우'+
		'3) 개인정보를 처리하지 아니하면 정보주체와 약정한 서비스를 제공하지 못하는 등 계약의 이행이 곤란한 경우로서 정보주체가 그 계약의 해지 의사를 명확하게 밝히지 아니한 경우'+
		'(3) 회원가입 등을 통해 개인정보의 수집•이용•제공에 대해 이용자께서 동의하신 내용을 언제든지 철회할 수 있습니다. 동의철회는 회사 사이트 내 “회원 탈퇴 신청”을 클릭하거나 서면, 이메일 등으로 연락하시면 지체 없이 개인정보의 삭제 등 필요한 조치를 하겠습니다. 다만 법률 또는 약관의 규정에 따라 회사가 이용자님의 개인정보를 보존하여야 하는 경우에는 해당 처리가 제한될 수 있습니다.'+
		'7. 이용자의 의무'+
		'이용자는 자신의 개인정보를 보호할 의무가 있으며, 회사의 귀책사유가 없이 ID, 비밀번호, 접근매체 등의 양도•대여•분실이나 로그인 상태에서 이석 등 이용자 본인의 부주의나 관계법령에 의한 보안조치로 차단할 수 없는 방법이나 기술을 사용한 해킹 등 회사가 상당한 주의에도 불구하고 통제할 수 없는 인터넷 상의 문제 등으로 개인정보가 유출되어 발생한 문제에 대해 회사는 책임을 지지 않습니다.'+
		'(1) 이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다.'+
		'(2) 타인의 개인정보를 도용하여 회원가입을 하거나 타발송금 수령을 받는 경우 이용자 자격 상실과 함께 개인정보보호법 및 주민등록법에 의거하여 처벌될 수 있습니다.'+
		'(3) 이용자는 아이디, 비밀번호 등에 대해 보안을 유지할 책임이 있으며 제3자에게 이를 양도하거나 대여할 수 없습니다. 이용자는 회사의 개인정보보호정책에 따라 보안을 위해 비밀번호의 주기적 변경에 협조할 의무가 있습니다.'+
		'(4) 이용자는 회사의 서비스를 이용한 후에는 반드시 로그인 계정을 종료하고 웹 브라우저 프로그램을 종료해야 합니다.'+
		'(5) 이용자는 "정보 통신망 이용촉진 및 정보보호 등에 관한 법률", “개인정보보호법” 등 기타 개인정보에 관한 법률을 준수하여야 합니다.'+
		'8. 개인정보의 기술적/관리적 보호 대책'+
		'회사는 이용자들의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 보호대책을 강구하고 있습니다.'+
		'(1) 개인정보의 암호화'+
		'이용자의 비밀번호는 일방향 암호화하여 저장 및 관리되고 있으며, 개인정보의 확인 및 변경은 비밀번호를 알고 있는 본인에 의해서만 가능합니다. 비밀번호는 이용자의 생일, 전화번호 등 타인이 추측하기 쉬운 숫자 등을 이용하지 않도록 비밀번호 생성규칙을 수립하여 적용하고 있습니다. 외국인 등록번호, 은행계좌번호 등의 개인정보는 안전한 암호 알고리즘으로 암호화되어 저장 및 관리되고 있습니다.'+
		'(2) 해킹 등에 대비한 대책'+
		'회사는 해킹 등 회사 정보통신망 침입에 의해 이용자의 개인정보가 유출되는 것을 방지하기 위해 침입탐지 및 침입차단 시스템을 24시간 가동하고 있습니다. 만일의 사태에 대비하여 모든 침입탐지 시스템과 침입차단 시스템은 이중화로 구성하여 운영하고 있으며, 민감한 개인정보는 암호화 통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다.'+
		'(3) 개인정보 내부 관리계획의 수립 및 시행'+
		'회사는 이용자의 개인정보를 안전하게 처리하기 위하여 내부적으로 법령상 회사에 요구되는 수준에 상응하는 개인정보 관리 계획을 수립하고 시행합니다. '+
		'(4)개인정보 처리자의 최소화 및 교육'+
		'회사는 회사의 개인정보 처리자를 최소한으로 제한하며, 개인정보 처리자에 대한 교육 등 관리적 조치를 통해 개인정보보호의 중요성을 인식시키고 있습니다.'+
		'(5)개인정보보호 책임자 지정 '+
		'회사는 개인정보의 효율적 보호를 위해 개인정보보호 책임자를 지정하고 있으며, 개인정보 처리방침의 이행사항 및 개인정보 처리자의 준수여부를 확인하여 문제가 발견될 경우 즉시 수정할 수 있도록 노력하고 있습니다.'+
		'9. 개인정보보호책임자 연락처'+
		'회사는 이용자가 회사의 서비스를 안전하게 이용할 수 있도록 최선을 다하고 있습니다. 이용자는 회사의 서비스 이용과 관련한 모든 개인정보보호 민원을 전담부서로 신고하실 수 있으며, 회사는 이용자의 신고사항에 대해 신속하고 성실하게 답변해드리고 있습니다.'+
		'[개인정보보호책임자]'+
		'성명: 백진욱'+
		'직위: 연구개발부문장'+
		'전자우편: jinuk.baek@themoin.com'+
		'전화번호: 070-4367-0113'+
		'FAX: 0504-393-9687'+
		'※ 개인정보침해에 대한 신고 또는 상담이 필요하신 경우에는 아래 기관으로 의하시기 바랍니다.'+
		'- 개인정보분쟁조정위원회 (www.kopico.or.kr / 118)'+
		'- 개인정보침해신고센터 (http://privacy.kisa.or.kr / 118)'+
		'- 대검찰청 사이버범죄수사단 (www.spo.go.kr/ 02-3480-3571)'+
		'- 경찰청 사이버테러대응센터 (www.netan.go.kr / 1566-0112)'+
		'10. 고지의 의무 '+
		'현 개인정보 처리방침은 정부의 정책 또는 회사의 필요에 의하여 변경될 수 있으며 내용의 추가 및 삭제, 수정이 있을 시에는 홈페이지 또는 이메일을 통해 즉시 지체 없이 공지하며, 이 정책은 공지한 날로부터 시행됩니다. 또한 당사는 개인정보의 수집 및 활용, 제3자 제공 등 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련법령에 따라 고객의 별도 동의가 필요한 사항과 관련된 내용이 추가, 변경되는 경우에는 관련 법령에 따른 고객의 별도 동의를 받습니다.'+
		'공고일자: 2019년 1월 10일'+
		'시행일자: 2019년 1월 10일'+
		'								</pre>'+
		'								<a id="agree_box_2" class="themoin-checkbox">'+
		'									<div class="box"></div>'+
		'									<span>'+
		'										<label class="caption">'+
		'											<span class="underline" style="cursor: pointer;" target="new">개인정보 수집 이용</span>'+
		'										 	동의 (필수)'+
/*		'											<span class="underline" onclick="location.href='/privacy'" style="cursor: pointer;" target="new">개인정보 수집 이용</span>'+
		'										 	동의 (필수)'+		*/
		'										</label>'+
		'									</span>'+
		'								</a>'+
		'								<a id="agree_box_3" class="themoin-checkbox">'+
		'									<div class="box"></div>'+
		'									<span><label class="caption">마케팅 SMS, 이메일 수신에 대한 동의 (선택)</label></span>'+
		'								</a>'+
		'							</div><br>'+
		'							<div class="moin-input-group">'+
		'								<div class="moin-input">'+
		'									<label style="color: rgb(116, 127, 155);">이름 (First name)</label>'+
		'									<input id="fname" class="fs-block" placeholder="보검" type="text" tabindex="0" value="">'+
		'									<div class="check_font" id="fname_check" ></div>'+
		'								</div>'+
		'								<p class="moin-error"></p>'+
		'							</div>'+
		'							<div class="moin-input-group">'+
		'								<div class="moin-input">'+
		'									<label style="color: rgb(116, 127, 155);">성 (Last name)</label>'+
		'									<input id="lname" class="fs-block" placeholder="박" type="text" tabindex="0" value="">'+
		'									<div class="check_font" id="lname_check" ></div>'+
		'								</div>'+
		'								<p class="moin-error"></p>'+
		'							</div>'+
		'				<div class="form-row col-2">'+
		'							<div class="themoin-composite-input moin-input-group phone2">'+
		'								<div class="extra-controls">'+
//		'									<input type="button" onclick="fn_setAddr()" value="우편번호 찾기">'+
//		'									<button">우편번호 검색</button>'+
		'               					 <button onclick="fn_setAddr()" class="btn-zipcode" type="button" tabindex="0">주소 검색</button>'+
		'								</div>'+
		'								<div class="moin-input">'+
		'									<label style="color: rgb(116, 127, 155);">우편번호(Zip)</label>'+
		'										<input id="zip" class="fs-block" placeholder="12345" type="text" tabindex="0" value="">'+
		'									</div>'+
		'								<p class="moin-error"></p>'+
		'							</div>'+
		'                <div class="themoin-password-input moin-input-group">'+
		'                    <div class="address">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">주소(Address)</label>'+
		'                            <input id="addr" class="fs-block" placeholder="서울시 마포구 백범로 23 구프라자" type="text" tabindex="0" value="">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="themoin-password-input moin-input-group">'+
		'                    <div class="subaddress">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">상세주소(subAddress)</label>'+
		'                            <input id="daddr" class="fs-block" placeholder="3층" type="text" tabindex="0" value="">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="themoin-password-input moin-input-group">'+
		'                    <div class="birthday">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">생년월일(Birth)</label>'+
		'                            <input id="birth" class="fs-block" placeholder="19900101" type="text" tabindex="0" value="">'+
		'							<div class="check_font" id="birth_check" ></div>'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		
		
		
/*핸드폰인증'							<div class="themoin-sms-request">'+
		'								<div id="code_dropdown" class="moin-input-group moin-dropdown">'+	// 국가 번호 open - moin-input-group moin-dropdown open
		'									<label>국가 번호 (Country Code)</label>'+
		'									<a id="phone1" class="dropdown-toggle">'+
		'										<img class="pull-right" src="https://img.themoin.com/public/img/ic-dropdown-p.png">'+	
		'									</a>'+
		'									<ul class="dropdown-menu"><li><a>+1 (United States)</a></li><li><a>+1 (Canada)</a></li><li><a>+1242 (Bahamas)</a></li><li><a>+1246 (Barbados)</a></li><li><a>+1264 (Anguilla)</a></li><li><a>+1268 (Antigua and Barbuda)</a></li><li><a>+1284 (British Virgin Islands)</a></li><li><a>+1340 (United States Virgin Islands)</a></li><li><a>+1345 (Cayman Islands)</a></li><li><a>+1441 (Bermuda)</a></li><li><a>+1473 (Grenada)</a></li><li><a>+1649 (Turks and Caicos Islands)</a></li><li><a>+1664 (Montserrat)</a></li><li><a>+1670 (Northern Mariana Islands)</a></li><li><a>+1671 (Guam)</a></li><li><a>+1684 (American Samoa)</a></li><li><a>+1721 (Sint Maarten)</a></li><li><a>+1758 (Saint Lucia)</a></li><li><a>+1767 (Dominica)</a></li><li><a>+1784 (Saint Vincent and the Grenadines)</a></li><li><a>+1787 (Puerto Rico)</a></li><li><a>+1809 (Dominican Republic)</a></li><li><a>+1868 (Trinidad and Tobago)</a></li><li><a>+1869 (Saint Kitts and Nevis)</a></li><li><a>+1876 (Jamaica)</a></li><li><a>+20 (Egypt)</a></li><li><a>+211 (South Sudan)</a></li><li><a>+212 (Western Sahara)</a></li><li><a>+212 (Morocco)</a></li><li><a>+213 (Algeria)</a></li><li><a>+216 (Tunisia)</a></li><li><a>+218 (Libya)</a></li><li><a>+220 (Gambia)</a></li><li><a>+221 (Senegal)</a></li><li><a>+222 (Mauritania)</a></li><li><a>+223 (Mali)</a></li><li><a>+224 (Guinea)</a></li><li><a>+225 (Ivory Coast)</a></li><li><a>+226 (Burkina Faso)</a></li><li><a>+227 (Niger)</a></li><li><a>+228 (Togo)</a></li><li><a>+229 (Benin)</a></li><li><a>+230 (Mauritius)</a></li><li><a>+231 (Liberia)</a></li><li><a>+232 (Sierra Leone)</a></li><li><a>+233 (Ghana)</a></li><li><a>+234 (Nigeria)</a></li><li><a>+235 (Chad)</a></li><li><a>+236 (Central African Republic)</a></li><li><a>+237 (Cameroon)</a></li><li><a>+238 (Cape Verde)</a></li><li><a>+239 (São Tomé and Príncipe)</a></li><li><a>+240 (Equatorial Guinea)</a></li><li><a>+241 (Gabon)</a></li><li><a>+242 (Republic of the Congo)</a></li><li><a>+243 (DR Congo)</a></li><li><a>+244 (Angola)</a></li><li><a>+245 (Guinea-Bissau)</a></li><li><a>+246 (British Indian Ocean Territory)</a></li><li><a>+248 (Seychelles)</a></li><li><a>+249 (Sudan)</a></li><li><a>+250 (Rwanda)</a></li><li><a>+251 (Ethiopia)</a></li><li><a>+252 (Somalia)</a></li><li><a>+253 (Djibouti)</a></li><li><a>+254 (Kenya)</a></li><li><a>+255 (Tanzania)</a></li><li><a>+256 (Uganda)</a></li><li><a>+257 (Burundi)</a></li><li><a>+258 (Mozambique)</a></li><li><a>+260 (Zambia)</a></li><li><a>+261 (Madagascar)</a></li><li><a>+262 (Mayotte)</a></li><li><a>+262 (Réunion)</a></li><li><a>+263 (Zimbabwe)</a></li><li><a>+264 (Namibia)</a></li><li><a>+265 (Malawi)</a></li><li><a>+266 (Lesotho)</a></li><li><a>+267 (Botswana)</a></li><li><a>+268 (Swaziland)</a></li><li><a>+269 (Comoros)</a></li><li><a>+27 (South Africa)</a></li><li><a>+291 (Eritrea)</a></li><li><a>+297 (Aruba)</a></li><li><a>+298 (Faroe Islands)</a></li><li><a>+299 (Greenland)</a></li><li><a>+30 (Greece)</a></li><li><a>+31 (Netherlands)</a></li><li><a>+32 (Belgium)</a></li><li><a>+33 (France)</a></li><li><a>+34 (Spain)</a></li><li><a>+350 (Gibraltar)</a></li><li><a>+351 (Portugal)</a></li><li><a>+352 (Luxembourg)</a></li><li><a>+353 (Ireland)</a></li><li><a>+354 (Iceland)</a></li><li><a>+355 (Albania)</a></li><li><a>+356 (Malta)</a></li><li><a>+357 (Cyprus)</a></li><li><a>+358 (Åland Islands)</a></li><li><a>+358 (Finland)</a></li><li><a>+359 (Bulgaria)</a></li><li><a>+36 (Hungary)</a></li><li><a>+370 (Lithuania)</a></li><li><a>+371 (Latvia)</a></li><li><a>+372 (Estonia)</a></li><li><a>+373 (Moldova)</a></li><li><a>+374 (Armenia)</a></li><li><a>+375 (Belarus)</a></li><li><a>+376 (Andorra)</a></li><li><a>+377 (Monaco)</a></li><li><a>+378 (San Marino)</a></li><li><a>+380 (Ukraine)</a></li><li><a>+381 (Serbia)</a></li><li><a>+382 (Montenegro)</a></li><li><a>+383 (Kosovo)</a></li><li><a>+385 (Croatia)</a></li><li><a>+386 (Slovenia)</a></li><li><a>+387 (Bosnia and Herzegovina)</a></li><li><a>+389 (Macedonia)</a></li><li><a>+39 (Italy)</a></li><li><a>+3906698 (Vatican City)</a></li><li><a>+40 (Romania)</a></li><li><a>+41 (Switzerland)</a></li><li><a>+420 (Czechia)</a></li><li><a>+421 (Slovakia)</a></li><li><a>+423 (Liechtenstein)</a></li><li><a>+43 (Austria)</a></li><li><a>+44 (United Kingdom)</a></li><li><a>+44 (Guernsey)</a></li><li><a>+44 (Isle of Man)</a></li><li><a>+44 (Jersey)</a></li><li><a>+45 (Denmark)</a></li><li><a>+46 (Sweden)</a></li><li><a>+47 (Norway)</a></li><li><a>+4779 (Svalbard and Jan Mayen)</a></li><li><a>+48 (Poland)</a></li><li><a>+49 (Germany)</a></li><li><a>+500 (Falkland Islands)</a></li><li><a>+500 (South Georgia)</a></li><li><a>+501 (Belize)</a></li><li><a>+502 (Guatemala)</a></li><li><a>+503 (El Salvador)</a></li><li><a>+504 (Honduras)</a></li><li><a>+505 (Nicaragua)</a></li><li><a>+506 (Costa Rica)</a></li><li><a>+507 (Panama)</a></li><li><a>+508 (Saint Pierre and Miquelon)</a></li><li><a>+509 (Haiti)</a></li><li><a>+51 (Peru)</a></li><li><a>+52 (Mexico)</a></li><li><a>+53 (Cuba)</a></li><li><a>+54 (Argentina)</a></li><li><a>+55 (Brazil)</a></li><li><a>+56 (Chile)</a></li><li><a>+57 (Colombia)</a></li><li><a>+58 (Venezuela)</a></li><li><a>+590 (Saint Barthélemy)</a></li><li><a>+590 (Guadeloupe)</a></li><li><a>+590 (Saint Martin)</a></li><li><a>+591 (Bolivia)</a></li><li><a>+592 (Guyana)</a></li><li><a>+593 (Ecuador)</a></li><li><a>+594 (French Guiana)</a></li><li><a>+595 (Paraguay)</a></li><li><a>+596 (Martinique)</a></li><li><a>+597 (Suriname)</a></li><li><a>+598 (Uruguay)</a></li><li><a>+5999 (Curaçao)</a></li><li><a>+60 (Malaysia)</a></li><li><a>+61 (Australia)</a></li><li><a>+61 (Cocos (Keeling) Islands)</a></li><li><a>+61 (Christmas Island)</a></li><li><a>+62 (Indonesia)</a></li><li><a>+63 (Philippines)</a></li><li><a>+64 (New Zealand)</a></li><li><a>+64 (Pitcairn Islands)</a></li><li><a>+65 (Singapore)</a></li><li><a>+66 (Thailand)</a></li><li><a>+670 (Timor-Leste)</a></li><li><a>+672 (Norfolk Island)</a></li><li><a>+673 (Brunei)</a></li><li><a>+674 (Nauru)</a></li><li><a>+675 (Papua New Guinea)</a></li><li><a>+676 (Tonga)</a></li><li><a>+677 (Solomon Islands)</a></li><li><a>+678 (Vanuatu)</a></li><li><a>+679 (Fiji)</a></li><li><a>+680 (Palau)</a></li><li><a>+681 (Wallis and Futuna)</a></li><li><a>+682 (Cook Islands)</a></li><li><a>+683 (Niue)</a></li><li><a>+685 (Samoa)</a></li><li><a>+686 (Kiribati)</a></li><li><a>+687 (New Caledonia)</a></li><li><a>+688 (Tuvalu)</a></li><li><a>+689 (French Polynesia)</a></li><li><a>+690 (Tokelau)</a></li><li><a>+691 (Micronesia)</a></li><li><a>+692 (Marshall Islands)</a></li><li><a>+7 (Russia)</a></li><li><a>+76 (Kazakhstan)</a></li><li><a>+81 (Japan)</a></li><li><a>+82 (South Korea)</a></li><li><a>+84 (Vietnam)</a></li><li><a>+850 (North Korea)</a></li><li><a>+852 (Hong Kong)</a></li><li><a>+853 (Macau)</a></li><li><a>+855 (Cambodia)</a></li><li><a>+856 (Laos)</a></li><li><a>+86 (China)</a></li><li><a>+880 (Bangladesh)</a></li><li><a>+886 (Taiwan)</a></li><li><a>+90 (Turkey)</a></li><li><a>+91 (India)</a></li><li><a>+92 (Pakistan)</a></li><li><a>+93 (Afghanistan)</a></li><li><a>+94 (Sri Lanka)</a></li><li><a>+95 (Myanmar)</a></li><li><a>+960 (Maldives)</a></li><li><a>+961 (Lebanon)</a></li><li><a>+962 (Jordan)</a></li><li><a>+963 (Syria)</a></li><li><a>+964 (Iraq)</a></li><li><a>+965 (Kuwait)</a></li><li><a>+966 (Saudi Arabia)</a></li><li><a>+967 (Yemen)</a></li><li><a>+968 (Oman)</a></li><li><a>+970 (Palestine)</a></li><li><a>+971 (United Arab Emirates)</a></li><li><a>+972 (Israel)</a></li><li><a>+973 (Bahrain)</a></li><li><a>+974 (Qatar)</a></li><li><a>+975 (Bhutan)</a></li><li><a>+976 (Mongolia)</a></li><li><a>+977 (Nepal)</a></li><li><a>+98 (Iran)</a></li><li><a>+992 (Tajikistan)</a></li><li><a>+993 (Turkmenistan)</a></li><li><a>+994 (Azerbaijan)</a></li><li><a>+995 (Georgia)</a></li><li><a>+996 (Kyrgyzstan)</a></li><li><a>+998 (Uzbekistan)</a></li>'+
		'									</ul>'+
		'								</div>'+
		'								<div class="themoin-composite-input moin-input-group phone2">'+
		'									<div class="extra-controls">'+
		'										<button disabled="">인증번호받기</button>'+
		'									</div>'+
		'									<div class="moin-input">'+
		'										<label style="color: rgb(116, 127, 155);">휴대전화 번호 (Mobile)</label>'+
		'										<input id="cphone" class="fs-block" placeholder="01012345678" type="text" tabindex="0" maxlength="11" value="">'+
		'									</div>'+
		'									<p class="moin-error"></p>'+
		'								</div>'+
		'								<div class="themoin-composite-input moin-input-group">'+
		'									<div class="moin-input">'+
		'										<label style="color: rgb(116, 127, 155);">인증번호 입력</label>'+
		'										<input class="fs-block" placeholder="인증번호 입력" type="text" tabindex="0" maxlength="6" value="">'+
		'									</div>'+
		'									<p class="moin-error"></p>'+
		'								</div>'+
		'							</div>'+*/
		
		
/*추천인	'							<div class="moin-input-group refercode-input">'+
		'								<div class="moin-input">'+
		'									<label style="color: rgb(116, 127, 155);">추천인 코드 - 선택 (Referral Code - Optional)</label>'+
		'									<input class="fs-block" placeholder="영문 숫자 조합 5자" type="text" tabindex="0" maxlength="5" value="">'+
		'								</div>'+
		'								<p class="moin-error"></p>'+
		'							</div>'+	*/
		
		
/*		'							<button class="btn-submit" type="submit">가입완료</button>'+	*/
		'						</form>'+
		'					</div><br><br><br>'+
		'				</div>'
	}
}
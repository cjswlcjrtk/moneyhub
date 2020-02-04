var mypage_vue = mypage_vue || {}
mypage_vue = {
	cus_info : ()=>{
		return '<div class="themoin-mypage-profile" style="text-align:-webkit-center"><br>'+
		'        <h1>회원정보</h1><br>'+
		'        <p class="newmoin-text-text-button" style="text-align: center;">기입한 연락처로 송금 관련 알림이 발송됩니다. 중요한 안내를 받지 못하는 일이 없도록 정확히 입력해주세요.<br>회원정보는 개인정보처리방침에 따라 안전하게 보호되며, 회원님의 동의없이 공개되지 않습니다.<br>정보 수정을 원하시면 하단의 수정하기 버튼을 눌러주세요.<br></p><br>'+
		'        <div class="themoin-info-preview">'+
		'            <div class="head">로그인 정보</div>'+
		'            <ol>'+
		'                <li>'+
		'                    <p>ID</p>'+
		'                    <div class="fs-block" id="infoEmail"></div>'+
		'                </li>'+
		'            </ol>'+
		'            <div class="head">회원정보</div>'+
		'            <ol>'+
		'                <li>'+
		'                    <p>이름</p>'+
		'                    <p class="fs-block" id="infoName"></p>'+
		'                </li>'+
		'                <li>'+
		'                    <p>우편번호</p>'+
		'                    <p class="fs-block" id="infoZip"></p>'+
		'                </li>'+
		'                <li>'+
		'                    <p>집주소</p>'+
		'                    <p class="fs-block" id="infoAddr"></p>'+
		'                </li>'+
		'                <li>'+
		'                    <p>상세주소</p>'+
		'                    <p class="fs-block" id="infoAddr2"></p>'+
		'                </li>'+
		'                <li>'+
		'                    <p>생년월일</p>'+
		'                    <p class="fs-block" id="infoBirth"></p>'+
		'                </li>'+
		'            </ol>'+
		'        </div><br>'+
		'    </div>'
	},
	cus_info_chg : ()=>{
		return '<div class="themoin-mypage-profile"><br>'+
		'        <h1>회원정보</h1><br>'+
		'        <p class="newmoin-text-text-button" style="text-align: center;">회원정보는 개인정보처리방침에 따라 안전하게 보호되며, 회원님의 동의없이 공개되지 않습니다.<br>정보 수정을 원하시면 하단의 수정하기 버튼을 눌러주세요.<br></p><br>'+
		'        <div class="content themoin-recipient-field-section">'+
		'            <form action="/a/v1/member/update" method="post">'+
		'                <div class="form-row col-2">'+
		'                    <div class="zip">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">우편번호(Zip)</label>'+
		'                            <input id="zip" class="fs-block" placeholder="12345" type="text" tabindex="0" value="">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                    <div class="postcode">'+
		'                <button onclick="fn_setAddr()" class="btn-zipcode" type="button" tabindex="0">주소 검색</button>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row">'+
		'                    <div class="address">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">주소(Address)</label>'+
		'                            <input id="addr" class="fs-block" placeholder="417, Yeongdong-daero, Gangnam-gu, Seoul, Korea" type="text" tabindex="0" value="">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row">'+
		'                    <div class="subaddress">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">상세주소(SubAddress)</label>'+
		'                            <input id="daddr" class="fs-block" placeholder="B2 Floor" type="text" tabindex="0" value="">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row"></div>'+
		'            </form>'+
		'                </div>'+
		'            </div>'+
		'        </div>'+
		'        <div class="form-row submit-row">'+
		'            <div class="submit">'+
		'                <button id="info_chg_cancle" class="account-send-btn" type="button" tabindex="0" style="width:50%; float:right;">취소</button>'+
		'            </div>'+
		'            <div class="submit">'+
		'				<button id="info_chg_check" class="account-send-btn" type="button" tabindex="0" style="width:50%">저장</button>'+
		'            </div>'+
		'        </div>'+
		'    </div>'
	},
	pwd_chg : ()=>{
		return '<div class="themoin-mypage-password">'+
		'        <div class="content">'+
		'            <h1>비밀번호 변경 안내</h1>'+
		'            <p>다른 사이트에서 사용한 적이 없는 비밀번호나 이전에 사용한 적이 없는 비밀번호를 입력해주세요.<br>생일이나 전화번호, 연속된 숫자 등의 알기 쉬운 비밀번호도 피해주세요.</p>'+
		'            <form action="/a/v1/member/update" method="post">'+
		'               <div class="form-row">'+
		'                    <div class="email">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">이메일 주소</label>'+
		'                            <input id="cemail" class="fs-block" placeholder="현재 이메일 주소를 입력해주세요." type="text" tabindex="0" value="">'+
		'							<div class="check_font" id="cemail_check" ></div>'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row">'+
		'                    <div class="password">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">현재 비밀번호</label>'+
		'                            <input id="oldPwd" class="fs-block" placeholder="현재 비밀번호를 입력해주세요." type="password" tabindex="0" value="">'+
		'							<div class="check_font" id="oldPwd_check" ></div>'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row">'+
		'                    <div class="password">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">새 비밀번호</label>'+
		'                            <input id="cpwd" class="fs-block" placeholder="영문 숫자 조합 8~20자" type="password" tabindex="0" value="">'+
		'							<div class="check_font" id="pwd_check" ></div>'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row">'+
		'                    <div class="repassword">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">새 비밀번호 확인</label>'+
		'                            <input id="cpwd2" class="fs-block" placeholder="위 비밀번호와 동일하게 입력해주세요." type="password" tabindex="0" value="">'+
		'							<div class="check_font" id="pwd_check2" ></div>'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row submit-row">'+
		'                    <div class="submit">'+
		'                    </div>'+
		'                </div>'+
		'            </form>'+
		'        </div>'+
		'    </div>'
	},
	auth_mgmt : ()=>{
		return '<div><br>'+
		'        <h1 style="text-align : center">자산정보</h1><br>'+
		'        <div class="themoin-info-preview" style="margin: 0 auto">'+
		'            <div class="head">발급된 가상계좌</div>'+
		'            <ol>'+
		'                <li>'+
		'                    <p>계좌번호</p>'+
		'                    <p class="fs-block" id="bank" style="color:black">국민은행&nbsp;&nbsp;</p>'+
		'                    <p class="fs-block" id="account" style="color:black">9427010261003</p>'+
		'                    <p class="fs-block">&nbsp;&nbsp;&nbsp;</p>'+
		'                    <p class="fs-block" id="cname" style="color:black"></p>'+
		'                    <p class="fs-block" style="color:black">_머니허브</p>'+
		'                </li>'+
		'                <li class="control">'+
		'                    <button class="text" id="copy_btn">가상계좌복사하기</button>'+
		'                    <input id="clip_target" type="text" value="" style="position:absolute;top:-9999em;"/>'+
		'                </li>'+
		'            </ol>'+
		'        </div>'+
		'        <div class="themoin-info-preview" style="margin: 0 auto">'+
		'            <div class="head">잔액</div>'+
		'            <ol>'+
		'                <li>'+
		'                    <p>현재잔액</p>'+
		'                    <p class="fs-block" id="balance" style="color:black">100,000,000</p>'+
		'                    <p class="fs-block">&nbsp;</p>'+
		'                    <p class="fs-block" style="color:black">원</p>'+
		'                </li>'+
		'            </ol>'+
		'        </div>'+
		'        <div class="themoin-info-preview" style="margin: 0 auto">'+
		'            <div class="head">거래내역</div>'+
		'            <ol>'+
		'                <li>'+
		'                    <p>HISTORY</p>'+
		'                    <p class="fs-block" id="date" style="color:black">2020-02-04</p>'+
		'                    <p class="fs-block">&nbsp;&nbsp;&nbsp;</p>'+
		'                    <p class="fs-block" id="plM" style="color:black">+</p>'+
		'                    <p class="fs-block">&nbsp;</p>'+
		'                    <p class="fs-block" id="history" style="color:black">100,000,000</p>'+
		'                    <p class="fs-block">&nbsp;</p>'+
		'                    <p class="fs-block" style="color:black">원</p>'+
		'                </li>'+
		'            </ol>'+
		'        </div>'+
		'        <p class="warning" style="text-align : center">계좌이체는 계좌변경이 불가능 합니다. 인증계좌 변경 희망 시 홈페이지 1:1문의하기로 연락주세요.</p><br><br>'+
		'    </div>'
	},
	alarm : ()=>{
		return '<div class="themoin-mypage-notification">'+
		'        <div class="content">'+
		'            <h1>알림 설정 안내</h1>'+
		'            <p>이벤트, 할인 소식 등 다양한 모인의 소식 및 알림을 받기 위한 설정을 할 수 있습니다.<br>송금 진행상황과 관련된 사항은 알림 동의 여부와 상관없이 발송됩니다.</p>'+
		'            <form action="/a/v1/member/update" method="post">'+
		'                <div class="form-row">'+
		'                    <div>'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">알림을 받을 이메일</label>'+
		'                            <input disabled="" class="fs-block" type="text" tabindex="0" readonly="" value="rogbest@naver.com">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row">'+
		'                    <div>'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">알림을 받을 휴대전화번호</label>'+
		'                            <input disabled="" class="fs-block" type="text" tabindex="0" readonly="" value="01042234683">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row">'+
		'                    <div class="checkbox">'+
		'                        <input type="checkbox">'+
		'                        <span class="caption">위의 연락처로 이벤트, 할인 소식 등 다양한 모인의 소식 및 알림을 받겠습니다.</span>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row submit-row">'+
		'                    <div class="submit">'+
		'                        <button class="account-send-btn" type="submit" tabindex="0">저장</button>'+
		'                    </div>'+
		'                </div>'+
		'            </form>'+
		'        </div>'+
		'    </div>'
	},
	ref_mgmt : ()=>{
		return '<div class="themoin-mypage-refer">'+
		'        <div class="content">'+
		'            <h1>나의 추천인 코드</h1>'+
		'            <p>1. 친구에게 추천코드를 알려준다.(무제한으로 가능)<br>2. 친구가 가입시 추천코드를 넣고 첫 송금 완료시, 수수료 감면 쿠폰을 받는다.</p><br><br>'+
		'            <p class="fs-block">FNO9W</p>'+
		'            <input type="text" value="FNO9W" style="opacity: 0; height: 0px;">'+
		'            <form>'+
		'                <div class="form-row submit-row">'+
		'                    <div class="submit" style="margin-top: 0px;">'+
		'                        <button class="account-send-btn" type="submit" tabindex="0">추천인 코드 복사하기</button>'+
		'                    </div>'+
		'                </div>'+
		'                <br>'+
		'                <p style="padding: 0px 10px;">- 모인을 사용해 본 이력이 없는 사용자만 추천코드를 등록할 수 있습니다.<br>- 본인이 본인을 추천한 경우 리워드로 지급된 쿠폰 사용이 불가합니다.<br>- 친구 추천 이벤트는 사전에 통지 없이 변경 또는 중지 될 수 있습니다.</p>'+
		'            </form>'+
		'            <div class="horizontal-divider"></div>'+
		'            <h1>추천인 등록</h1>'+
		'            <p>추천인 코드를 등록해 모인 해외송금 시 수수료 혜택을 받아보세요!<br>첫 송금 완료시 수수료 감면 쿠폰이 발급되며, 추천인에게는 감사쿠폰이 발급됩니다.<br>추천인 코드는 첫 송금전 단, 1회 등록할 수 있습니다. </p>'+
		'            <form action="/a/v1/member/update" method="post">'+
		'                <div class="form-row">'+
		'                    <div class="code">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">추천인 코드</label>'+
		'                            <input class="fs-block" placeholder="영문 숫자 조합 5자" type="text" tabindex="0" maxlength="5" value="">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row submit-row">'+
		'                    <div class="submit">'+
		'                        <button class="account-send-btn" type="submit" tabindex="0">확인</button>'+
		'                    </div>'+
		'                </div>'+
		'                <br>'+
		'                <p style="padding: 0px 10px;">- 모인을 사용해 본 이력이 없는 사용자를 추천할 경우에만 리워드가 지급됩니다.<br>- 제휴업체 추천코드와 추천인 코드 중복 사용은 불가능합니다.<br>- 본인이 본인을 추천한 경우 리워드로 지급된 쿠폰사용이 불가합니다.<br>- 친구 추천 이벤트는 사전에 통지 없이 변경 또는 중지 될 수 있습니다.</p>'+
		'            </form>'+
		'        </div>'+
		'    </div>'
	},
	withdrawal : ()=>{
		return '<div class="themoin-mypage-password">'+
		'        <div class="content">'+
		'            <h1>회원 탈퇴</h1>'+
		'            <p>더 이상 머니허브 서비스를 이용하지 않으시겠습니까?</p>'+
		'            <form action="/a/v1/member/update" method="delete">'+
		'               <div class="form-row">'+
		'                    <div class="email">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">이메일 주소</label>'+
		'                            <input id="cemail" class="fs-block" placeholder="현재 이메일 주소를 입력해주세요." type="text" tabindex="0" value="">'+
		'							<div class="check_font" id="withdrawal_cemail" ></div>'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row">'+
		'                    <div class="password">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">현재 비밀번호</label>'+
		'                            <input id="cpwd" class="fs-block" placeholder="현재 비밀번호를 입력해주세요." type="password" tabindex="0" value="">'+
		'							<div class="check_font" id="withdrawal_pwd" ></div>'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row submit-row">'+
		'                    <div class="submit">'+
		'                    </div>'+
		'                </div>'+
		'            </form>'+
		'        </div>'+
		'    </div>'
	},
	exchange_test : ()=>{
//		let exrate = $.exrate().bdate	${$.exrate().bdate}
		return `<div class="container">
					<div id="exchange_datepicker">
						<div style="width : 70%; float:left; font-size: 18px;"><b>환율 기준일 : </b></div>
						<div style="width : 30%; float:left">년/월/일 : <input type="text" id="datePicker" class="form-control">
				    		<button>클릭</button>
				    	</div>
					</div>	
				    <div class="mapcontainer">
				        <div class="map">
				            <span>Alternative content for the map</span>
				        </div>
				    </div>
				    <div id="amount" class="themoin-info-preview" style="width:400px">
				    	<ol style="border-bottom-width: 0px;"></ol>
				    </div>
				</div>`
	},
	exchange_test_head : ()=>{
		return `<style type="text/css">
        body {
            color: #5d5d5d;
            font-family: Helvetica, Arial, sans-serif;
        }

        h1 {
            font-size: 30px;
            margin: auto;
            margin-top: 50px;
        }

        .container {
            max-width: 800px;
            margin: auto;
        }

        /* Specific mapael css class are below
         * 'mapael' class is added by plugin
        */

        .mapael .map {
            position: relative;
        }

        .mapael .mapTooltip {
            position: absolute;
            background-color: #fff;
            moz-opacity: 0.70;
            opacity: 0.70;
            filter: alpha(opacity=70);
            border-radius: 10px;
            padding: 10px;
            z-index: 1000;
            max-width: 200px;
            display: none;
            color: #343434;
        }
    </style>

    <script src="/web/resources/js/maps/global_map.js"></script>
	<script src="/web/resources/js/maps/jquery.mapael.js"></script>
    <script src="/web/resources/js/maps/world_countries.js"></script>

`
	},
	exchange_popup : ()=>{	//themoin-remit-component
		return `<div class="moin-popup">
					<div class="themoin-unit-select-popup" tabindex="-1">
						<div class="unit-content" style="width: 500px; height: 400px;">
							<a class="moin-close">
								<img src="https://img.themoin.com/public/img/btn-close.png" srcset="https://img.themoin.com/public/img/btn-close.png 1x,
										https://img.themoin.com/public/img/btn-close@2x.png 2x,
										https://img.themoin.com/public/img/btn-close@3x.png 3x">
							</a>
							<div class="themoin-remit-component" style="padding-top: 23px; border-top-width: 0px; padding-bottom: 0px; margin: 0 auto;">
								<div id="exchange_box" class="form-calculator main" style="width: 100%; min-width: 400px;">
									<div class="amount-row" style="height: 100px;">
										<div class="">
											<p style="text-align: left;">송금 금액</p>
											<input class="send-amount" id="exchange_send_amount"  type="text" tabindex="0" placeholder="0.00" value="1000000">
										</div>
										<div class="unit-select send" tabindex="0">
											<p>대한민국</p>
											<h3>KRW</h3>
										</div>
									</div>
									<div class="amount-row" style="height: 100px;">
										<div class="">
											<p style="text-align: left;">예상 비용</p>
											<input class="receive-amount" type="text" tabindex="0" placeholder="0.00" readonly="">
										</div>
										<div class="unit-select receive" tabindex="0" style="background-image: none; cursor: text;">
											<p>미국</p>
											<h3>USD</h3>
										</div>
									</div>
									<div id="exchange_test_exrate">
										<p>환율 : </p> 
									</div>
								</div>
							</div>
						</div>
					</div>`
	},
	exchange : ()=>{
		return 	'<div class="themoin-remit-component">'+
		'		<div id="moin-event-amount" class="moin-event-amount">'+
		'		<h1>지금 바로 머니허브 환전을 이용해보세요</span>'+
		'			<p class="color-deepgrey"></p>'+
		'		</div>'+
		'<div id="divToggle" style="display: none;"><canvas id="canvas2" style="width:200px; height:50px; margin-bottom: 10px"></canvas></div>'+
		'		<div class="moin-amount">'+
		'			<div id="remit_box" class="form-calculator main">'+
		'				<div class="amount-row">'+
		'					<div class="">'+
		'						<p>환전 금액</p>'+
		'						<input class="send-amount" id="exchange_amount"  type="text" tabindex="0" placeholder="0.00">'+
		'					</div>'+
		'					<div class="unit-select disabled" tabindex="0" >'+
		'						<p>대한민국</p>'+
		'						<h3>KRW</h3>'+
		'					</div>'+
		'				</div>'+
		'				<div class="amount-row">'+
		'					<div class="">'+
		'						<p>예상 비용</p>'+
		'						<input class="receive-amount" type="text" tabindex="0" placeholder="0.00" readonly="">'+
		'					</div>'+
		'					<div class="unit-select receive" tabindex="0">'+
		'						<p>미국</p>'+
		'						<h3>USD</h3>'+
		'					</div>'+
		'				</div>'+
		'				<button id="exchangebutton" class="index-send-btn moin-body">환전하기</button>'+
		'			</div>'+
		'		</div>'+
		'	</div>'
		
	},
	cntcd_popup : ()=>{
		return `<div class="moin-popup">
					<div class="themoin-unit-select-popup" tabindex="-1">
						<div class="unit-content">
							<a class="moin-close">
								<img src="https://img.themoin.com/public/img/btn-close.png" srcset="https://img.themoin.com/public/img/btn-close.png 1x,
								          https://img.themoin.com/public/img/btn-close@2x.png 2x,
								          https://img.themoin.com/public/img/btn-close@3x.png 3x">
			      			</a>
			      			<h3>송금 국가 선택</h3>
			      			<div id="popup_box">
			      				<form onsubmit="return false">
			      					<input type="text" placeholder="송금국가를 선택해주세요.">
			      					<button>입력</button>
			      				</form>
			      				<ul>
			      					
			      				</ul>
			      			</div>
			      		</div>
			      	</div>
				</div>`
	}
}
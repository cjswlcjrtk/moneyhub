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
//		'        <button class="next">정보수정하기</button>'+
//		'		 <br><br>'+
		'    </div>'
	},
	cus_info_chg : ()=>{
		return '<div class="themoin-mypage-profile"><br>'+
		'        <h1>회원정보</h1><br>'+
		'        <p class="newmoin-text-text-button" style="text-align: center;">회원정보는 개인정보처리방침에 따라 안전하게 보호되며, 회원님의 동의없이 공개되지 않습니다.<br>정보 수정을 원하시면 하단의 수정하기 버튼을 눌러주세요.<br></p><br>'+
		'        <div class="content themoin-recipient-field-section">'+
		'            <form action="/a/v1/member/update" method="post">'+
		/*'                <div class="form-row col-2">'+
		'                    <div class="firstname">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">이름 (First name)</label>'+
		'                            <input class="fs-block" placeholder="Gildong" type="text" tabindex="0" value="">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                    <div class="lastname">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">성 (Last name)</label>'+
		'                            <input class="fs-block" placeholder="Hong" type="text" tabindex="0" value="">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+*/
		'                <div class="form-row col-2">'+
		'                    <div class="zip">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">우편번호(Zip)</label>'+
		'                            <input id="zip" class="fs-block" placeholder="12345" type="text" tabindex="0" value="">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                    <div class="postcode">'+
//		'						<input type="button" onclick="fn_setAddr()" value="우편번호 찾기">'+
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
		/*'                <div class="form-row col-2">'+
		'                    <div class="phone1">'+
		'                        <div class="moin-dropdown">'+
		'                            <label>국가 번호 (Country Code)</label>'+
		'                            <a id="phone1" class="dropdown-toggle">+82 (South Korea)'+
		'                                <img class="pull-right" src="https://img.themoin.com/public/img/ic-dropdown-p.png">'+
		'                            </a>'+
		'                            <ul class="dropdown-menu">'+
		'							<li><a>+1 (United States)</a></li>'+
		'							<li><a>+1 (Canada)</a></li>'+
		'							<li><a>+1242 (Bahamas)</a></li>'+
		'							<li><a>+1246 (Barbados)</a></li>'+
		'							<li><a>+1264 (Anguilla)</a></li>'+
		'							<li><a>+1268 (Antigua and Barbuda)</a></li>'+
		'							<li><a>+1284 (British Virgin Islands)</a></li>'+
		'							<li><a>+1340 (United States Virgin Islands)</a></li>'+
		'							<li><a>+1345 (Cayman Islands)</a></li>'+
		'							<li><a>+1441 (Bermuda)</a></li>'+
		'							<li><a>+1473 (Grenada)</a></li>'+
		'							<li><a>+1649 (Turks and Caicos Islands)</a></li>'+
		'							<li><a>+1664 (Montserrat)</a></li>'+
		'							<li><a>+1670 (Northern Mariana Islands)</a></li>'+
		'							<li><a>+1671 (Guam)</a></li>'+
		'							<li><a>+1684 (American Samoa)</a></li>'+
		'							<li><a>+1721 (Sint Maarten)</a></li>'+
		'							<li><a>+1758 (Saint Lucia)</a></li>'+
		'							<li><a>+1767 (Dominica)</a></li>'+
		'							<li><a>+1784 (Saint Vincent and the Grenadines)</a></li>'+
		'							<li><a>+1787 (Puerto Rico)</a></li>'+
		'							<li><a>+1809 (Dominican Republic)</a></li>'+
		'							<li><a>+1868 (Trinidad and Tobago)</a></li>'+
		'							<li><a>+1869 (Saint Kitts and Nevis)</a></li>'+
		'							<li><a>+1876 (Jamaica)</a></li>'+
		'							<li><a>+20 (Egypt)</a></li>'+
		'							<li><a>+211 (South Sudan)</a></li>'+
		'							<li><a>+212 (Western Sahara)</a></li>'+
		'							<li><a>+212 (Morocco)</a></li>'+
		'							<li><a>+213 (Algeria)</a></li>'+
		'							<li><a>+216 (Tunisia)</a></li>'+
		'							<li><a>+218 (Libya)</a></li>'+
		'							<li><a>+220 (Gambia)</a></li>'+
		'							<li><a>+221 (Senegal)</a></li>'+
		'							<li><a>+222 (Mauritania)</a></li>'+
		'							<li><a>+223 (Mali)</a></li>'+
		'							<li><a>+224 (Guinea)</a></li>'+
		'							<li><a>+225 (Ivory Coast)</a></li>'+
		'							<li><a>+226 (Burkina Faso)</a></li>'+
		'							<li><a>+227 (Niger)</a></li>'+
		'							<li><a>+228 (Togo)</a></li>'+
		'							<li><a>+229 (Benin)</a></li>'+
		'							<li><a>+230 (Mauritius)</a></li>'+
		'							<li><a>+231 (Liberia)</a></li>'+
		'							<li><a>+232 (Sierra Leone)</a></li>'+
		'							<li><a>+233 (Ghana)</a></li>'+
		'							<li><a>+234 (Nigeria)</a></li>'+
		'							<li><a>+235 (Chad)</a></li>'+
		'							<li><a>+236 (Central African Republic)</a></li>'+
		'							<li><a>+237 (Cameroon)</a></li>'+
		'							<li><a>+238 (Cape Verde)</a></li>'+
		'							<li><a>+239 (São Tomé and Príncipe)</a></li>'+
		'							<li><a>+240 (Equatorial Guinea)</a></li>'+
		'							<li><a>+241 (Gabon)</a></li>'+
		'							<li><a>+242 (Republic of the Congo)</a></li>'+
		'							<li><a>+243 (DR Congo)</a></li>'+
		'							<li><a>+244 (Angola)</a></li>'+
		'							<li><a>+245 (Guinea-Bissau)</a></li>'+
		'							<li><a>+246 (British Indian Ocean Territory)</a></li>'+
		'							<li><a>+248 (Seychelles)</a></li>'+
		'							<li><a>+249 (Sudan)</a></li>'+
		'							<li><a>+250 (Rwanda)</a></li>'+
		'							<li><a>+251 (Ethiopia)</a></li>'+
		'							<li><a>+252 (Somalia)</a></li>'+
		'							<li><a>+253 (Djibouti)</a></li>'+
		'							<li><a>+254 (Kenya)</a></li>'+
		'							<li><a>+255 (Tanzania)</a></li>'+
		'							<li><a>+256 (Uganda)</a></li>'+
		'							<li><a>+257 (Burundi)</a></li>'+
		'							<li><a>+258 (Mozambique)</a></li>'+
		'							<li><a>+260 (Zambia)</a></li>'+
		'							<li><a>+261 (Madagascar)</a></li>'+
		'							<li><a>+262 (Mayotte)</a></li>'+
		'							<li><a>+262 (Réunion)</a></li>'+
		'							<li><a>+263 (Zimbabwe)</a></li>'+
		'							<li><a>+264 (Namibia)</a></li>'+
		'							<li><a>+265 (Malawi)</a></li>'+
		'							<li><a>+266 (Lesotho)</a></li>'+
		'							<li><a>+267 (Botswana)</a></li>'+
		'							<li><a>+268 (Swaziland)</a></li>'+
		'							<li><a>+269 (Comoros)</a></li>'+
		'							<li><a>+27 (South Africa)</a></li>'+
		'							<li><a>+291 (Eritrea)</a></li>'+
		'							<li><a>+297 (Aruba)</a></li>'+
		'							<li><a>+298 (Faroe Islands)</a></li>'+
		'							<li><a>+299 (Greenland)</a></li>'+
		'							<li><a>+30 (Greece)</a></li>'+
		'							<li><a>+31 (Netherlands)</a></li>'+
		'							<li><a>+32 (Belgium)</a></li>'+
		'							<li><a>+33 (France)</a></li>'+
		'							<li><a>+34 (Spain)</a></li>'+
		'							<li><a>+350 (Gibraltar)</a></li>'+
		'							<li><a>+351 (Portugal)</a></li>'+
		'							<li><a>+352 (Luxembourg)</a></li>'+
		'							<li><a>+353 (Ireland)</a></li>'+
		'							<li><a>+354 (Iceland)</a></li>'+
		'							<li><a>+355 (Albania)</a></li>'+
		'							<li><a>+356 (Malta)</a></li>'+
		'							<li><a>+357 (Cyprus)</a></li>'+
		'							<li><a>+358 (Åland Islands)</a></li>'+
		'							<li><a>+358 (Finland)</a></li>'+
		'							<li><a>+359 (Bulgaria)</a></li>'+
		'							<li><a>+36 (Hungary)</a></li>'+
		'							<li><a>+370 (Lithuania)</a></li>'+
		'							<li><a>+371 (Latvia)</a></li>'+
		'							<li><a>+372 (Estonia)</a></li>'+
		'							<li><a>+373 (Moldova)</a></li>'+
		'							<li><a>+374 (Armenia)</a></li>'+
		'							<li><a>+375 (Belarus)</a></li>'+
		'							<li><a>+376 (Andorra)</a></li>'+
		'							<li><a>+377 (Monaco)</a></li>'+
		'							<li><a>+378 (San Marino)</a></li>'+
		'							<li><a>+380 (Ukraine)</a></li>'+
		'							<li><a>+381 (Serbia)</a></li>'+
		'							<li><a>+382 (Montenegro)</a></li>'+
		'							<li><a>+383 (Kosovo)</a></li>'+
		'							<li><a>+385 (Croatia)</a></li>'+
		'							<li><a>+386 (Slovenia)</a></li>'+
		'							<li><a>+387 (Bosnia and Herzegovina)</a></li>'+
		'							<li><a>+389 (Macedonia)</a></li>'+
		'							<li><a>+39 (Italy)</a></li>'+
		'							<li><a>+3906698 (Vatican City)</a></li>'+
		'							<li><a>+40 (Romania)</a></li>'+
		'							<li><a>+41 (Switzerland)</a></li>'+
		'							<li><a>+420 (Czechia)</a></li>'+
		'							<li><a>+421 (Slovakia)</a></li>'+
		'							<li><a>+423 (Liechtenstein)</a></li>'+
		'							<li><a>+43 (Austria)</a></li>'+
		'							<li><a>+44 (United Kingdom)</a></li>'+
		'							<li><a>+44 (Guernsey)</a></li>'+
		'							<li><a>+44 (Isle of Man)</a></li>'+
		'							<li><a>+44 (Jersey)</a></li>'+
		'							<li><a>+45 (Denmark)</a></li>'+
		'							<li><a>+46 (Sweden)</a></li>'+
		'							<li><a>+47 (Norway)</a></li>'+
		'							<li><a>+4779 (Svalbard and Jan Mayen)</a></li>'+
		'							<li><a>+48 (Poland)</a></li>'+
		'							<li><a>+49 (Germany)</a></li>'+
		'							<li><a>+500 (Falkland Islands)</a></li>'+
		'							<li><a>+500 (South Georgia)</a></li>'+
		'							<li><a>+501 (Belize)</a></li>'+
		'							<li><a>+502 (Guatemala)</a></li>'+
		'							<li><a>+503 (El Salvador)</a></li>'+
		'							<li><a>+504 (Honduras)</a></li>'+
		'							<li><a>+505 (Nicaragua)</a></li>'+
		'							<li><a>+506 (Costa Rica)</a></li>'+
		'							<li><a>+507 (Panama)</a></li>'+
		'							<li><a>+508 (Saint Pierre and Miquelon)</a></li>'+
		'							<li><a>+509 (Haiti)</a></li>'+
		'							<li><a>+51 (Peru)</a></li>'+
		'							<li><a>+52 (Mexico)</a></li>'+
		'							<li><a>+53 (Cuba)</a></li>'+
		'							<li><a>+54 (Argentina)</a></li>'+
		'							<li><a>+55 (Brazil)</a></li>'+
		'							<li><a>+56 (Chile)</a></li>'+
		'							<li><a>+57 (Colombia)</a></li>'+
		'							<li><a>+58 (Venezuela)</a></li>'+
		'							<li><a>+590 (Saint Barthélemy)</a></li>'+
		'							<li><a>+590 (Guadeloupe)</a></li>'+
		'							<li><a>+590 (Saint Martin)</a></li>'+
		'							<li><a>+591 (Bolivia)</a></li>'+
		'							<li><a>+592 (Guyana)</a></li>'+
		'							<li><a>+593 (Ecuador)</a></li>'+
		'							<li><a>+594 (French Guiana)</a></li>'+
		'							<li><a>+595 (Paraguay)</a></li>'+
		'							<li><a>+596 (Martinique)</a></li>'+
		'							<li><a>+597 (Suriname)</a></li>'+
		'							<li><a>+598 (Uruguay)</a></li>'+
		'							<li><a>+5999 (Curaçao)</a></li>'+
		'							<li><a>+60 (Malaysia)</a></li>'+
		'							<li><a>+61 (Australia)</a></li>'+
		'							<li><a>+61 (Cocos (Keeling) Islands)</a></li>'+
		'							<li><a>+61 (Christmas Island)</a></li>'+
		'							<li><a>+62 (Indonesia)</a></li>'+
		'							<li><a>+63 (Philippines)</a></li>'+
		'							<li><a>+64 (New Zealand)</a></li>'+
		'							<li><a>+64 (Pitcairn Islands)</a></li>'+
		'							<li><a>+65 (Singapore)</a></li>'+
		'							<li><a>+66 (Thailand)</a></li>'+
		'							<li><a>+670 (Timor-Leste)</a></li>'+
		'							<li><a>+672 (Norfolk Island)</a></li>'+
		'							<li><a>+673 (Brunei)</a></li>'+
		'							<li><a>+674 (Nauru)</a></li>'+
		'							<li><a>+675 (Papua New Guinea)</a></li>'+
		'							<li><a>+676 (Tonga)</a></li>'+
		'							<li><a>+677 (Solomon Islands)</a></li>'+
		'							<li><a>+678 (Vanuatu)</a></li>'+
		'							<li><a>+679 (Fiji)</a></li>'+
		'							<li><a>+680 (Palau)</a></li>'+
		'							<li><a>+681 (Wallis and Futuna)</a></li>'+
		'							<li><a>+682 (Cook Islands)</a></li>'+
		'							<li><a>+683 (Niue)</a></li>'+
		'							<li><a>+685 (Samoa)</a></li>'+
		'							<li><a>+686 (Kiribati)</a></li>'+
		'							<li><a>+687 (New Caledonia)</a></li>'+
		'							<li><a>+688 (Tuvalu)</a></li>'+
		'							<li><a>+689 (French Polynesia)</a></li>'+
		'							<li><a>+690 (Tokelau)</a></li>'+
		'							<li><a>+691 (Micronesia)</a></li>'+
		'							<li><a>+692 (Marshall Islands)</a></li>'+
		'							<li><a>+7 (Russia)</a></li>'+
		'							<li><a>+76 (Kazakhstan)</a></li>'+
		'							<li><a>+81 (Japan)</a></li>'+
		'							<li><a>+82 (South Korea)</a></li>'+
		'							<li><a>+84 (Vietnam)</a></li>'+
		'							<li><a>+850 (North Korea)</a></li>'+
		'							<li><a>+852 (Hong Kong)</a></li>'+
		'							<li><a>+853 (Macau)</a></li>'+
		'							<li><a>+855 (Cambodia)</a></li>'+
		'							<li><a>+856 (Laos)</a></li>'+
		'							<li><a>+86 (China)</a></li>'+
		'							<li><a>+880 (Bangladesh)</a></li>'+
		'							<li><a>+886 (Taiwan)</a></li>'+
		'							<li><a>+90 (Turkey)</a></li>'+
		'							<li><a>+91 (India)</a></li>'+
		'							<li><a>+92 (Pakistan)</a></li>'+
		'							<li><a>+93 (Afghanistan)</a></li>'+
		'							<li><a>+94 (Sri Lanka)</a></li>'+
		'							<li><a>+95 (Myanmar)</a></li>'+
		'							<li><a>+960 (Maldives)</a></li>'+
		'							<li><a>+961 (Lebanon)</a></li>'+
		'							<li><a>+962 (Jordan)</a></li>'+
		'							<li><a>+963 (Syria)</a></li>'+
		'							<li><a>+964 (Iraq)</a></li>'+
		'							<li><a>+965 (Kuwait)</a></li>'+
		'							<li><a>+966 (Saudi Arabia)</a></li>'+
		'							<li><a>+967 (Yemen)</a></li>'+
		'							<li><a>+968 (Oman)</a></li>'+
		'							<li><a>+970 (Palestine)</a></li>'+
		'							<li><a>+971 (United Arab Emirates)</a></li>'+
		'							<li><a>+972 (Israel)</a></li>'+
		'							<li><a>+973 (Bahrain)</a></li>'+
		'							<li><a>+974 (Qatar)</a></li>'+
		'							<li><a>+975 (Bhutan)</a></li>'+
		'							<li><a>+976 (Mongolia)</a></li>'+
		'							<li><a>+977 (Nepal)</a></li>'+
		'							<li><a>+98 (Iran)</a></li>'+
		'							<li><a>+992 (Tajikistan)</a></li>'+
		'							<li><a>+993 (Turkmenistan)</a></li>'+
		'							<li><a>+994 (Azerbaijan)</a></li>'+
		'							<li><a>+995 (Georgia)</a></li>'+
		'							<li><a>+996 (Kyrgyzstan)</a></li>'+
		'							<li><a>+998 (Uzbekistan)</a></li>'+
		'                            </ul>'+
		'                        </div>'+
		'                    </div>'+
		'                    <div class="themoin-composite-input  phone2">'+
		'                        <div class="extra-controls">'+
		'                            <button>번호변경</button>'+
		'                        </div>'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">휴대전화 번호 (Mobile)</label>'+
		'                            <input class="fs-block" placeholder="01012345678" type="text" tabindex="0" maxlength="11" value="">'+
		'                        </div>'+*/
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row"></div>'+
		'            </form>'+
		/*'	<div class="daum-container hidden">'+
		'		<div class="daum-layer">'+
		'			<img id="btnCloseLayer"'+
		'				src="https://i1.daumcdn.net/localimg/localimages/07/postcode/320/close.png"'+
		'				alt="닫기 버튼" style="cursor: pointer; position: absolute; z-index: 1;">'+
		'			<div id="__daum__layer_5"'+
		'				style="position: relative; width: 100%; height: 100%; background-color: rgb(255, 255, 255); z-index: 0; overflow: hidden; min-width: 300px; margin: 0px; padding: 0px;">'+
		'				<iframe frameborder="0" src="about:blank"'+
		'					style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px none; margin: 0px; padding: 0px; overflow: hidden; min-width: 300px;">'+
		'					#document'+
		'					<html lang="ko" style="margin: 0px; padding: 0px; height: 100%; overflow: hidden;">'+
		'						<head>'+
		'						<script async="" crossorigin="anonymous" src="https://edge.fullstory.com/s/fs.js"></script>'+
		'						</head>'+
		'						<body style="margin: 0px; padding: 0px; height: 100%; width: 100%; overflow: hidden;">'+
		'							<iframe frameborder="0" title="우편번호검색프레임" id="__daum__viewerFrame_5"'+
		'								src="https://spi.maps.daum.net/postcode/search?origin=https%3A%2F%2Fwww.themoin.com&amp;indaum=off&amp;banner=on&amp;mode=transmit&amp;vt=layer&amp;am=on&amp;ani=off&amp;sd=on&amp;plrg=&amp;plrgt=1.5&amp;hmb=off&amp;heb=off&amp;asea=off&amp;smh=off&amp;zo=off&amp;us=on&amp;msi=10&amp;ahs=off&amp;whas=500&amp;sm=on&amp;a51=off&amp;zn=Y&amp;fullpath=%2Flogin%2Fnaver%2Fcallback%2FGDQbs6CWPjp0oppX5W"'+
		'								style="border: 0 none; margin: 0; width: 100%; height: 100%; min-width: 300px; overflow: hidden; padding: 0">'+
		'								#document'+
		'									<!--[if lte IE 6]><html lang="ko" class="ie_low ie_hate"><![endif]-->'+
		'									<!--[if IE 7]><html lang="ko" class="ie_low"><![endif]-->'+
		'									<!--[if IE 8]><html lang="ko" class="ie_medium"><![endif]-->'+
		'									<!--[if gte IE 9]><!-->'+
		'									<html lang="ko">'+
		'										<!--<![endif]-->'+
		'									<head>'+
		'									    <meta charset="utf-8">'+
		'									    <meta http-equiv="X-UA-Compatible" content="IE=edge">'+
		'									    <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width">'+
		'									        <link href="//t1.daumcdn.net/postcode/resource/images/favicon.ico" rel="shortcut icon">'+
		'									    <title>Daum 우편번호 서비스</title>'+
		'									        <link rel="stylesheet" href="//t1.daumcdn.net/postcode/cssjs/service/1567501403279/service.v2.min.css">'+
		'									        <style></style>'+
		'									</head>'+
		'									<body style="">'+
		'									<div style="" class="daum_popup mapping_auto use_suggest" data-mode="transmit" data-intsh="false" data-ctx="" data-plrgno="" data-plrgtimer="" data-msi="10" data-whas="500" data-submitmode="on">'+
		'									        <div class="popup_post_type2">         <div class="popup_head">'+
		'									            <h1 class="screen_out">우편번호 검색</h1>'+
		'									            <form action="/postcode/search" id="searchForm" class="form_search" target="_self" method="GET">'+
		'									    <fieldset class="fld_inside">'+
		'									        <legend class="screen_out">우편번호 검색 입력폼</legend>'+
		'									        <div class="post_search">'+
		'									            <label for="region_name" class="screen_out">검색할 도로명/지번주소를 입력, 예시) 판교역로 235, 분당 주공, 삼평동 681</label>'+
		'									            <div class="wrap_tf_keyword">'+
		'									                <input type="text" id="region_name" class="tf_keyword" name="region_name" value="" autocomplete="off">'+
		'									            </div>'+
		'									            <input type="hidden" name="cq" id="cQuery" value="">'+
		'									            <input type="hidden" name="cpage" id="cPage" value="">'+
		'									            <input type="hidden" name="origin" value="https://www.themoin.com">'+
		'									            <input type="hidden" name="isp" id="isP" value="">             <input type="hidden" name="isgr" id="isGR" value="">             <input type="hidden" name="isgj" id="isGJ" value="">             <input type="hidden" name="ongr" id="onGR" value="N">             <input type="hidden" name="ongj" id="onGJ" value="N">             <input type="hidden" name="regionid" id="regionId" value="">'+
		'									            <input type="hidden" name="regionname" id="regionName" value="">'+
		'									            <input type="hidden" name="roadcode" id="roadCode" value="">'+
		'									            <input type="hidden" name="roadname" id="roadName" value="">'+
		'									            <input type="hidden" name="banner" value="on">             <input type="hidden" name="indaum" value="off">             <input type="hidden" name="vt" value="layer">             <input type="hidden" name="am" value="on">             <input type="hidden" name="ani" value="off">             <input type="hidden" name="mode" value="transmit">             <input type="hidden" name="sd" value="on">             <input type="hidden" name="hmb" value="off">             <input type="hidden" name="heb" value="off">             <input type="hidden" name="asea" value="off">             <input type="hidden" name="smh" value="off">             <input type="hidden" name="zo" value="off">             <input type="hidden" name="theme" value="">'+
		'									            <input type="hidden" name="bit" value="">'+
		'									            <input type="hidden" name="sit" value="">'+
		'									            <input type="hidden" name="sgit" value="">'+
		'									            <input type="hidden" name="sbit" value="">'+
		'									            <input type="hidden" name="pit" value="">'+
		'									            <input type="hidden" name="mit" value="">'+
		'									            <input type="hidden" name="lcit" value="">'+
		'									            <input type="hidden" name="plrg" value="">             <input type="hidden" name="plrgt" value="1.5">             <input type="hidden" name="us" value="on">             <input type="hidden" name="msi" value="10">             <input type="hidden" name="ahs" value="off">             <input type="hidden" name="whas" value="500">             <input type="hidden" name="zn" value="Y">'+
		'									            <input type="hidden" name="sm" value="on">             <input type="hidden" name="CWinWidth" id="constWindowWidth" value="398">'+
		'									            <input type="hidden" name="sptype" id="spType" value="">             <input type="hidden" name="sporgq" id="spOrgQuery" value="">             <input type="hidden" name="fullpath" id="fullPath" value="/login/naver/callback/GDQbs6CWPjp0oppX5W">'+
		'									            <input type="hidden" name="a51" id="a51" value="off">             <button type="button" class="btn_clear" style="display: none;"><span class="img_post">취소</span></button>'+
		'									            <button type="button" class="btn_search"><span class="img_post">검색</span></button>'+
		'									            <span class="placeholder show">예) 판교역로 235, 분당 주공, 삼평동 681</span>         </div>'+
		'									    </fieldset>'+
		'									</form>'+
		'									<div id="postCodeSuggestLayer" class="suggest_search"><div class="suggestBox box_sub" style="display: none;"><div class="baseBox bg"></div></div></div>'+
		'									            <label for="focusContent" class="screen_out">의 검색 결과 입니다. 아래쪽으로 스크롤하세요.</label>'+
		'									<input type="button" class="focus_content" id="focusContent">'+
		'									        </div>'+
		'									        <div class="popup_body">                          '+
		'									 <div class="info_body">'+
		'									    <h2 class="tit_tip">tip</h2>'+
		'									    <p class="desc_tip">아래와 같은 조합으로 검색을 하시면 더욱 정확한 결과가 검색됩니다.</p>'+
		'									    <p class="desc_tip">도로명 + 건물번호</p>'+
		'									    <span class="txt_example">예) 판교역로 235,&nbsp;&nbsp;제주 첨단로 242</span>'+
		'									    <p class="desc_tip2">지역명(동/리) + 번지</p>'+
		'									    <span class="txt_example">예) 삼평동 681,&nbsp;&nbsp;제주 영평동 2181</span>'+
		'									    <p class="desc_tip2">지역명(동/리) + 건물명(아파트명)</p>'+
		'									    <span class="txt_example">예) 분당 주공,&nbsp;&nbsp;연수동 주공3차</span>'+
		'									    <p class="desc_tip2">사서함명 + 번호</p>'+
		'									    <span class="txt_example">예) 분당우체국사서함 1~100</span>'+
		'									</div>'+
		'									                           </div>'+
		'									    </div>'+
		'									</div>'+
		'									<div class="popup_foot show">     <span class="inner_footer">'+
		'									    <span class="txt_by">Powered by </span><strong class="img_post tit_kakao">kakao</strong>'+
		'									    <span class="txt_bar"></span>'+
		'									    <a href="http://postcode.map.daum.net/guide" class="link_infomation" target="_blank">우편번호 서비스 안내</a>'+
		'									</span></div>'+
		'									<script type="text/javascript" src="//t1.daumcdn.net/postcode/cssjs/lib/jquery-1.11.0.js"></script>'+
		'									        <script type="text/javascript" src="//t1.daumcdn.net/postcode/cssjs/service/1567501403279/service.v2.min.js"></script>'+
		'									 <script type="text/javascript">'+
		'									            $(function(){'+
		'									        var url = "http://postcode.map.daum.net/guide';""+
		'									        postcodeV2.setEnvironmentVariables("false", "PROD");'+
		'									        postcodeV2.viewInit(url);});'+
		'									</script>'+
		'									</body>'+
		'									</html>'+
		'							</iframe>'+
		'						</body>'+
		'					</html>'+
		'				</iframe>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+*/
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
//		'                        <button class="account-send-btn" type="submit" tabindex="0">확인</button>'+
		'                    </div>'+
		'                </div>'+
		'            </form>'+
		'        </div>'+
		'    </div>'
	},
	auth_mgmt : ()=>{
		return '<div><br>'+
		'        <h1 style="text-align : center">인증관리</h1><br>'+
		'        <div class="themoin-info-preview" style="margin: 0 auto">'+
		'            <div class="head">신분증 관리</div>'+
		'            <ol>'+
		'                <li>'+
		'                    <p>분류</p>'+
		'                    <p class="fs-block">한국인/개인사업자</p>'+
		'                </li>'+
		'                <li>'+
		'                    <p>인증상태</p>'+
		'                    <p class="fs-block">인증완료</p>'+
		'                </li>'+
		'                <li class="control">'+
		'                    <button disabled="">인증됨</button>'+
		'                </li>'+
		'            </ol>'+
		'            <div class="head">계좌인증관리</div>'+
		'            <ol>'+
		'                <li class="sub-title">자동출금 인증</li>'+
		'                <li>'+
		'                    <p>계좌번호</p>'+
		'                    <p class="fs-block">자동출금 인증을 해주세요.</p>'+
		'                </li>'+
		'                <li>'+
		'                    <p>인증상태</p>'+
		'                    <p class="fs-block"></p>'+
		'                </li>'+
		'                <li class="control">'+
		'                    <button>인증하기</button>'+
		'                </li>'+
		'                <li class="sub-title">계좌이체 인증</li>'+
		'                <li>'+
		'                    <p>계좌번호</p>'+
		'                    <p class="fs-block">기업은행 23210816702025</p>'+
		'                </li>'+
		'                <li>'+
		'                    <p>인증상태</p>'+
		'                    <p class="fs-block">인증완료</p>'+
		'                </li>'+
		'                <li class="control">'+
		'                    <button disabled="">인증됨</button>'+
		'                </li>'+
		'            </ol>'+
		'            <div class="head">발급된 가상계좌</div>'+
		'            <ol>'+
		'                <li>'+
		'                    <p>계좌번호</p>'+
		'                    <p class="fs-block">광주은행 9427010261003 김민국_모인</p>'+
		'                </li>'+
		'                <li class="control">'+
		'                    <button class="text">가상계좌복사하기</button>'+
		'                </li>'+
		'            </ol>'+
		'        </div>'+
		'        <p class="warning" style="text-align : center">계좌이체는 계좌변경이 불가능 합니다. 인증계좌 변경 희망시 홈페이지 1:1문의하기로 연락주세요.</p><br><br>'+
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
		//'                        <button class="account-send-btn" type="submit" tabindex="0">회원탈퇴</button>'+
		'                    </div>'+
		'                </div>'+
		'            </form>'+
		'        </div>'+
		'    </div>'
	},
	exchange_test : ()=>{
		return `<div class="container">
				    <h1>Map with a legend for plotted cities and areas</h1>
				
				    <div class="mapcontainer">
				        <div class="map">
				            <span>Alternative content for the map</span>
				        </div>
				        <input type="button" value="Hide/Show all legends" id="button-all"/>
				        <input type="button" value="Hide/Show areas legend" id="button-areas"/>
				        <input type="button" value="Hide/Show plots legend" id="button-plots"/>
				        <div class="areaLegend">
				            <span>Alternative content for the legend</span>
				        </div>
				        <div class="plotLegend">
				            <span>Alternative content for the legend</span>
				        </div>
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
	}
	
}
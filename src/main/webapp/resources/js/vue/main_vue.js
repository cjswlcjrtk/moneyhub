var main_vue = main_vue || {}
main_vue ={
	main : ()=>{
		return `<div class="themoin-landing">
		<div class="head_product head_wu">
            <h1 id="headh1">
                <span>머니허브 해외송금</span> <span class="txt_detail">해외계좌송금과<br>WU빠른해외송금을<br>더 쉽고, 저렴하게</span>
            </h1>
            <ul>
                <li class="item">
                    <img alt="" height="39px" src="https://www.kakaobank.com/static/images/products/pc/abroad/type_wu.png" width="91px">
                    <span>WU빠른해외송금</span>
                </li>
                <li class="item divider"></li>
                <li class="item">
                    <img alt="" height="39px" src="https://www.kakaobank.com/static/images/products/pc/abroad/type_bank.png" width="39px">
                    <span>해외계좌송금</span>
                </li>
            </ul>
        </div>`+
		'	<div class="themoin-remit-component">'+
		'		<div id="moin-event-amount" class="moin-event-amount">'+
		'		<h1>지금 바로 WU 송금을 이용해보세요</span>'+
		'			<p class="color-deepgrey"></p>'+
		'		</div>'+
		'		<div class="moin-amount">'+
		'			<div id="remit_box" class="form-calculator main">'+
		'				<div class="amount-row">'+
		'					<div class="">'+
		'						<p>송금 금액</p>'+
		'						<input class="send-amount" id="send_amount"  type="text" tabindex="0" placeholder="0.00">'+
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
		'			</div>'+
		'		</div>'+
		'	</div>'+
		
		'	<div class="themoin-landing-countries">'+
		'		<div>'+
		'			<h1>송금 가능 국가</h1>'+
		'			<ul>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-jp.svg">'+
		'					<span class="newmoin-text-subtitle">일본</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-cn.svg">'+
		'					<span class="newmoin-text-subtitle">중국</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-us.svg">'+
		'					<span class="newmoin-text-subtitle">미국</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-sg.svg">'+
		'					<span class="newmoin-text-subtitle">싱가포르</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-au.svg">'+
		'					<span class="newmoin-text-subtitle">호주</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-gb.svg">'+
		'					<span class="newmoin-text-subtitle">영국</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-np.svg">'+
		'					<span class="newmoin-text-subtitle">네팔</span>'+
		'					<p>계좌송금</p>'+
		'				</li></ul>'+
		'				<ul><li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-de.svg">'+
		'					<span class="newmoin-text-subtitle">독일</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-fr.svg">'+
		'					<span class="newmoin-text-subtitle">프랑스</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-it.svg">'+
		'					<span class="newmoin-text-subtitle">이탈리아</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-nl.svg">'+
		'					<span class="newmoin-text-subtitle">네덜란드</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-pt.svg">'+
		'					<span class="newmoin-text-subtitle">포르투갈</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-es.svg">'+
		'					<span class="newmoin-text-subtitle">스페인</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-be.svg">'+
		'					<span class="newmoin-text-subtitle">벨기에</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'			</ul>'+
		'		</div>'+
		'	</div>'+
		
		`<div class="intro_product wu_send_product_2">
                <div class="content_wrapper">
                    <h3>파격적인<br>해외송금 수수료</h3>
                    <p>이제는 해외계좌송금뿐만 아니라<br>웨스턴유니온(WU) 해외송금도<br>저렴한 수수료로 보낼 수 있습니다.</p>
                    <table class="table_earth">
                        <caption class="caption_g">해외계좌송금과 WU 빠른해외송금 비교 정보</caption>
                        <colgroup>
                            <col style="width:auto;background: #f4f4f4;">
                            <col style="width:222px">
                            <col style="width:222px">
                        </colgroup>
                        <thead>
                            <tr class="head_line">
                                <th class="blank_cell">
                                    <svg class="svg_slash" viewBox="0,0,169,45">
                                        <path d="M0,0 L169,45" stroke="#dddddd"></path>
                                    </svg>
                                </th>
                                <th class="col_gray01" scope="col">해외계좌송금</th>
                                <th class="col_gray02" scope="col">WU 빠른해외송금</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">가능국가</th>
                                <td>22개국</td>
                                <td>200여개국</td>
                            </tr>
                            <tr>
                                <th scope="row">소요시간</th>
                                <td><strong class="txt_blue">약 3~5일</strong></td>
                                <td><strong class="txt_blue">1분 내외</strong></td>
                            </tr>
                            <tr>
                                <th scope="row">송금통화</th>
                                <td>국가별 통화</td>
                                <td>미화 (USD)</td>
                            </tr>
                            <tr>
                                <th scope="row">수수료</th>
                                <td><strong class="txt_blue">5천원 ~ 1만원</strong></td>
                                <td><strong class="txt_blue">$6 / $12</strong></td>
                            </tr>
                            <tr>
                                <th scope="row">수취방식</th>
                                <td>해외계좌입금</td>
                                <td>WU취급점</td>
                            </tr>
                            <tr>
                                <th scope="row">환율우대</th>
                                <td>주요통화* 50%우대</td>
                                <td>우대없음</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="table_sub_guide">*주요 통화  : USD, JPY, EUR, CAD, AUD, NZD, GBP, HKD, SGD</p>
                </div>
			</div>
			<div class="intro_product intro_product_right wu_send_product_3">
                <div class="content_wrapper">
                    <div class="loopbox">
                        <span class="img_block img_loop"></span>
                        <div class="infinityloop is-active" id="infinityloop">
							<div class="dot"></div>
                        </div>
                    </div>

                    <h3>언제, 어디서든<br>이용 가능한 해외송금</h3>
                    <p>머니허브  해외송금은 24시간 365일<br>언제 어디서든 이용이 가능합니다.<br>
                        <span class="txt_desc">단, 해외송금 서비스 점검으로 인해 23시 30분부터<br>00시 10분까지 거래가 제한됩니다.<br>
                        	※ 거래외국환은행지정 신청 가능시간: 평일 9시 ~ 18시<br>(주말, 공휴일 및 근로자의날 제외)</span></p>
                </div>
                <div id="ani02_trigger"></div>
            </div>
			<div class="themoin-landing-applink">
				<h1>머니허브  앱을 다운로드 받으세요</h1>
				<div class="item-container">
					<a class="btn-android">
						<img src="https://img.themoin.com/public/img/page-1.svg">
						<div class="hd-button">안드로이드 앱 다운로드</div>
					</a>
					<a class="btn-ios">
						<img src="https://img.themoin.com/public/img/img-apple.svg">
						<div class="hd-button">iOS 앱 다운로드</div>
					</a>
				</div>
			</div>
			<div style="display:none"></div>
		</div>`
	},
	logined_main : ()=>{
		return '<div class="themoin-main">'+
		'	<div class="themoin-currency-component">'+
		'      <div class="legend">'+
		'  	      <div class="moin-avg">'+
		'   	      <div></div> '+
		'   	             모인 환율'+
		' 	       </div>'+
		' 	   </div>'+
		' 	   <div class="content">'+
		'  	          <div id="clock" class="title" style="width:320px">실시간 모인 환율</div>'+
		'  	          <div id="cntcd_exrate" class="currency"></div>'+
		'  	  </div>                  '+
		'  	  <div id="chart" style="width:100%;">                        '+
		' 	           <canvas id="canvas" style="width:70%; height:120px"></canvas>'+
		' 	   </div>'+
		'	</div>'+
		'	<div class="themoin-remit-component">'+
		'		<div id="moin-event-amount" class="moin-event-amount">'+
		'		<h1>지금 바로 WU 송금을 이용해보세요</span>'+
		'			<p class="color-deepgrey"></p>'+
		'		</div>'+
		'		<div class="moin-amount">'+
		'			<div id="remit_box" class="form-calculator main">'+
		'				<div class="amount-row">'+
		'					<div class="">'+
		'						<p>송금 금액</p>'+
		'						<input class="send-amount" id="send_amount"  type="text" tabindex="0" placeholder="0.00"  value="">'+
		'					</div>'+
		'					<div class="unit-select disabled" tabindex="0">'+
		'						<p>미 화</p>'+
		'						<h3>USD</h3>'+
		'					</div>'+
		'				</div>'+
		'				<div class="amount-row">'+
		'					<div class="">'+
		'						<p>예상 비용</p>'+
		'						<input class="receive-amount" type="text" tabindex="0" placeholder="0.00" readonly="">'+
		'					</div>'+
		'					<div class="unit-select receive" tabindex="0">'+
		'						<p>아일랜드</p>'+
		'						<h3>EUR</h3>'+
		'					</div>'+
		'				</div>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+

		'	<div class="user-remit-container">'+
		'		<div class="user-title">'+
		'			<h3>내 입금 계좌</h3>'+
		'		</div>'+
		'		<div class="user-account">'+
		'			<p class="warning">'+
		'				<span class="warning fs-block">반드시 인증받으신 기업은행 23210816702025 계좌에서 내 입금 계좌로 이체 해 주세요.</span><br>내 입금 계좌 : '+
		'				<span class="fs-block">광주은행 9427010261003 김민국_모인</span>'+
		'			</p>'+
		'		</div>'+
		'		<div class="user-title">'+
		'			<h3>송금 내역</h3>'+
		'		</div>'+
		'		<div class="user-limit">'+
		'			<p>올해 누적 송금액 :<span> 0</span> 원</p>'+
		'			<p class="divider">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</p>'+
		'			<p>올해 잔여 한도 :<span class=""> 55,000,000</span> 원</p>'+
		'		</div>'+
		'		<div class="remits empty">'+
		'			<br><h3>아직 송금 내역이 없습니다.</h3>'+
		'			<button class="start">여기를 눌러 송금을 시작하세요.</button><br><br>'+
		'			<img src="https://img.themoin.com/public/img/icon-null-illust.svg"><br><br>'+
		'		</div>'+
		'	</div>'+
		'</div>'
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
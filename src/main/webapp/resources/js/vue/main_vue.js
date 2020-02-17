var main_vue = main_vue || {}

main_vue ={
	main : ()=>{
		return `<div class="themoin-landing">
		<div class="head_product head_wu">
            <h1 id="headh1">
                <span>머니허브 외화금융서비스</span> <span class="txt_detail">WU빠른해외송금과<br>머니허브환전을<br>더 쉽고, 저렴하게</span>
            </h1>
            <ul>
                <li class="item">
                    <img alt="" height="39px" src="https://www.kakaobank.com/static/images/products/pc/abroad/type_wu.png" width="91px">
                    <span>WU빠른해외송금</span>
                </li>
                <li class="item divider"></li>
                <li class="item">
                    <img alt="" height="39px" src="https://www.kakaobank.com/static/images/products/pc/abroad/type_bank.png" width="39px">
                    <span>머니허브환전</span>
                </li>
            </ul>
        </div>
		<div class="themoin-remit-component"> 
			<div class="steps" style="max-width: 1365px; text-align: center; "> 
               <div id="idx_exchg_btn" class="threesteps">
               <img id="idx_exch_btn2" src="/web/resources/img/main/exchange.png" style="width: 300px;">
               <br><br>
               <h2 style="font-weight:bold; font-family: 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', Helvetica, Arial, sans-serif">환전</h2>
               </div>
               <div id="idx_remit_btn" class="threesteps">
               <img src="/web/resources/img/main/remit.png" style="width: 300px">
               <br><br>
               <h2 style="font-weight:bold; font-family: 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', Helvetica, Arial, sans-serif">wu 해외송금</h2>
               </div>
               <div id="idx_testexchg_btn" class="threesteps">
               <img src="/web/resources/img/main/testexchange.png" style="width: 300px">
               <br><br>
               <h2 style="font-weight:bold; font-family: 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', Helvetica, Arial, sans-serif">모의 환전</h2>
               </div>
               </div>
         </div> 
		</div> 
		<div class="themoin-landing-countries"> 
			<div> 
				<h1>송금 가능 국가</h1> 
				<ul> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-jp.svg"> 
						<span class="newmoin-text-subtitle">일본</span> 
						<p>계좌송금</p> 
					</li> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-cn.svg"> 
						<span class="newmoin-text-subtitle">중국</span> 
						<p>계좌송금</p> 
					</li> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-us.svg"> 
						<span class="newmoin-text-subtitle">미국</span> 
						<p>계좌송금</p> 
					</li> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-sg.svg"> 
						<span class="newmoin-text-subtitle">싱가포르</span> 
						<p>계좌송금</p> 
					</li> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-au.svg"> 
						<span class="newmoin-text-subtitle">호주</span> 
						<p>계좌송금</p> 
					</li> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-gb.svg"> 
						<span class="newmoin-text-subtitle">영국</span> 
						<p>계좌송금</p> 
					</li> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-vn.svg"> 
						<span class="newmoin-text-subtitle">베트남</span> 
						<p>계좌송금</p> 
					</li></ul>
					<ul><li> 
						<img src="https://img.themoin.com/public/img/circle-flag-de.svg"> 
						<span class="newmoin-text-subtitle">독일</span> 
						<p>계좌송금</p> 
					</li> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-fr.svg"> 
						<span class="newmoin-text-subtitle">프랑스</span> 
						<p>계좌송금</p> 
					</li> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-it.svg"> 
						<span class="newmoin-text-subtitle">이탈리아</span> 
						<p>계좌송금</p> 
					</li> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-nl.svg"> 
						<span class="newmoin-text-subtitle">네덜란드</span> 
						<p>계좌송금</p> 
					</li> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-pt.svg"> 
						<span class="newmoin-text-subtitle">포르투갈</span> 
						<p>계좌송금</p> 
					</li> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-es.svg"> 
						<span class="newmoin-text-subtitle">스페인</span> 
						<p>계좌송금</p> 
					</li> 
					<li> 
						<img src="https://img.themoin.com/public/img/circle-flag-be.svg"> 
						<span class="newmoin-text-subtitle">벨기에</span> 
						<p>계좌송금</p> 
					</li> 
				</ul> 
			</div> 
		</div>
			
		<div class="intro_product wu_send_product_2">
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
			<div style="display:none"></div>
		</div>`
	},
	logined_main : ()=>{
		deal = $.deal()
		cus = $.cusInfo()
		acc = $.acc()
		return `<div class="themoin-main"> 
			<div class="themoin-currency-component" style="height: 230px;"> 
		   	  	<div class="content"> 
		  	          <div id="clock" class="title" style="width:320px">실시간 머니허브 환율</div> 
		  	          <div id="cntcd_exrate" class="currency"></div> 
		  	  	</div>                   
		  	  	<div id="chart" style="width:100%;">                         
		 	      	<canvas id="canvas" style="width:70%; height: 150px; max-height: 220px"></canvas> 
				</div> 
			</div> 
				<div class="themoin-remit-component"> 
						<div class="steps" style="max-width: 1365px; text-align: center; "> 
                           <div id="exchange_btn" class="threesteps">
                           <img src="/web/resources/img/main/exchange.png" style="width: 300px;">
                           <br><br>
                           <h2 style="font-weight:bold; font-family: 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', Helvetica, Arial, sans-serif">환전</h2>
                        </div>
                        <div id="remit_btn" class="threesteps">
                           <img src="/web/resources/img/main/remit.png" style="width: 300px">
                           <br><br>
                           <h2 style="font-weight:bold; font-family: 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', Helvetica, Arial, sans-serif">WU 해외송금</h2>
                        </div>
                        <div  id="exchange_test_btn" class="threesteps">
                           <img src="/web/resources/img/main/testexchange.png" style="width: 300px">
                           <br><br>
                           <h2 style="font-weight:bold; font-family: 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', Helvetica, Arial, sans-serif">모의 환전</h2>
                        </div>
                  </div>
				</div> 
				<div class="themoin-remit-component" id="remit_slider" style="display:none;"> 
					<div id="moin-event-amount" class="moin-event-amount"> 
						<h1>지금 바로 WU 송금을 이용해보세요</span> 
						<p class="color-deepgrey"></p> 
					</div> 
					<div class="moin-amount"> 
						<div id="remit_box" class="form-calculator main"> 
							<div class="amount-row"> 
								<div class="unit-select receive" style="display:-webkit-inline-box;border-width:inherit;max-width:none;align-self: center;">
									<img id="cntimg" src="https://img.themoin.com/public/img/circle-flag-us.svg">
									<p id= "cntp" style="font-size: 19px;margin: 8px 10px 0px 20px;">미국</p><h3 id="cntcd" style="margin: 8px 0px 0px 0px;">USD</h3>
								</div>
							</div> 
							<div class="amount-row"> 
								<div class="" style="padding: 13px 13px 16px 23px;"> 
									<p>송금 금액</p> 
									<input class="send-amount" type="text" tabindex="0" placeholder="0.00"  value="" numberOnly maxlength="5" style="width: 50%;"> 
									<p id="max_amount" style="color:#d43349;font-size: 12px;"></p>
								</div> 
								<div class="unit-select disabled" tabindex="0"> 
									<p>미 화</p> 
									<h3>USD</h3> 
								</div> 
							</div> 
							<div class="amount-row"> 
								<div class=""> 
									<p>예상 비용</p> 
									<input class="receive-amount" type="text" tabindex="0" placeholder="0.00" readonly="" value="0"> 
								</div> 
								<div class="unit-select disabled" tabindex="0" > 
									<p >한 화</p><h3 id ="remit_receive_cntcd" style="color:#0077c8">KRW</h3>
								</div> 
							</div> 
						</div> 
					</div>
				</div> 
	<div class="user-remit-container" id="trade_history"> 
				<div class="user-title"> 
					<h3>내 허브 페이</h3> 
				</div> 
				<div class="user-account"> 
					<p class="warning"> 
						내 허브 페이 :  <span class="fs-block" id="cus_account">국민은행 ${acc.acctNo} ${cus.cname}</span> 
					</p>
					<a id="account_go" style="cursor: pointer;    color: cornflowerblue;"> 
						허브페이 상세 보기
					</a>
				</div> 
				<div class="user-title"> 
					<h3>거래 내역</h3> 
				</div> 
				<div class="user-limit"> 
					<p>계좌 잔액 :<span id="acc_bal"></span>${common.comma_create(acc.balance)} 원</p> 
					<p class="divider">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</p> 
					<p>올해 누적 송금액 :<span> 0</span> 원</p> 
					<p class="divider">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</p> 
					<p>올해 잔여 한도 :<span class=""> 55,000,000</span> 원</p> 
				</div> 
					<div class="remits"></div>
			</div>
		</div>`
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
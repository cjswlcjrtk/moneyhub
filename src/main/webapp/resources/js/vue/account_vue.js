var account_vue = account_vue || {}
account_vue = {
	account_page : ()=>{
			cus = $.cusInfo()
			acc = $.acc()
			accHis = $.accHis()
			return `<div><br>
				        <h1 style="text-align : center; margin:30px 0 10px 0">허브 페이</h1>
				        <div class="themoin-info-preview" style="margin: 0 auto">
				            <div class="head">발급된 허브페이(가상계좌)</div>
				            <ol>
				                <li>
				                    <p>계좌번호</p>
				                    <p class="fs-block" id="bank" style="color:black; font-weight:bold;">국민은행&nbsp;&nbsp;</p>
				                    <p class="fs-block" id="account" style="color:black; font-weight:bold;">${acc.acctNo}</p>
				                    <p class="fs-block">&nbsp;&nbsp;&nbsp;</p>
				                    <p class="fs-block" id="cname" style="color:black; font-weight:bold;">${cus.cname}</p>
				                    <p class="fs-block" style="color:black; font-weight:bold;">_머니허브</p>
				                </li>
				                <li class="control">
				                    <button class="text" id="copy_btn">가상계좌복사하기</button>
				                    <input id="clip_target" type="text" value="" style="position:absolute;top:-9999em;"/>
				                </li>
				            </ol>
				        </div>
				        <div class="themoin-info-preview" style="margin: 0 auto">
				            <div class="head">허브 머니</div>
				            <ol>
				                <li>
				                    <p>현재 잔액</p>
				                    <p class="fs-block" id="balance" style="color:black; font-weight:bold;">${common.comma_create(acc.balance)}</p>
				                    <p class="fs-block">&nbsp;</p>
				                    <p class="fs-block" style="color:black; font-weight:bold;">원</p>
				                </li>
				            </ol>
				        </div>
				        <div class="themoin-info-preview" style="margin: 0 auto">
				            <div class="head">입금하기</div>
				            <ol style=" display: -webkit-inline-box;">
				                <li class="control" style=" height: 40px;">
				                  	<input  id ="de_amount" type="text" value="" style="margin:auto;">
				                  	<p class="fs-block">&nbsp;</p>
				                    <button  id="deposit" style=" transform: inherit;height: 28px;">입금하기</button>
				                </li>
				            </ol>
				        </div>
				        
				        <div class="themoin-info-preview" style="margin: 0 auto">
				            <section>
									<h1 style="font-size: 30px;color: black;text-transform: uppercase;font-weight: 300;text-align: center;margin-bottom: 15px;">입출금 내역</h1>
									<div class="tbl-header">
										<table cellpadding="0" cellspacing="0" border="0">
											<thead>
												<tr>
													<th>거래일</th>
													<th>입금액</th>
													<th>출금액</th>
													<th>구분</th>
													<th>거래 구분</th>
													<th>잔액</th>
												</tr>
											</thead>
										</table>
									</div>
									<div class="tbl-content">
										<table cellpadding="0" cellspacing="0" border="0">
											<tbody id="account_tbody"></tbody>
										</table>
									</div>
								</section>
				        <p class="warning" style="text-align : center">계좌이체는 계좌변경이 불가능 합니다. 인증계좌 변경 희망 시 홈페이지 1:1문의하기로 연락주세요.</p><br><br>
				    </div>`
	}
}
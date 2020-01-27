var remit_vue = remit_vue || {}
remit_vue = {
	remit_first: () => {
		deal = $.deal()
		return `<div class="themoin-remit-extended-component"> 
						<h2 class="title-amount">보내는 금액을 확인해주세요.</h2> 
						<div id="moin-event-amount" class="moin-event-amount" style="text-align: center;"> 
							<p class="color-deepgrey"></p> 
						</div> 
						<div class="form-calculator"> 
							<div class="amount-row"> 
								<div class=""> 
									<p>송금 금액</p> 
									<input class="send-amount" id= "sd_amount"  type="text" tabindex="0" placeholder="0.00" value="${deal.amount}"> 
								</div> 
								<div class="unit-select disabled" tabindex="0.00"> 
									<p>미화</p><h3>USD</h3> 
								</div> 
							</div> 
							<div class="description"> 
								<i class="empty"></i> 
								<p><span id="fee_check" >$</span> USD (수수료)</p>
								<div class="spacer"></div> 
								<p>3,000$ 이상은 12$</p>
							</div> 
							<div class="description"> 
								<i class="empty"></i> 
								<p><span>541,750</span> JPY (수취 예상 금액)</p> 
								<div class="spacer"></div> 
								<p>실시간 환율로 예상한 금액</p>
							</div> 
								<div class="description last"> 
									<i><img src="https://img.themoin.com/public/img/exchange-rate.svg"></i> 
									<p><span>100</span>JPY = <span>1060.08</span>KRW (실시간 환율)</p> 
								</div> 
								<div class="amount-row"> 
									<div class=""> 
										<p>예상 비용</p> 
										<input class="receive-amount" type="text" tabindex="0" value="" readonly=""> 
									</div> 
									<div class="unit-select receive" tabindex="0"> 
										<p>일본</p><h3>JPY</h3> 
									</div> 
								</div> 
						</div> 
						<button id="first_remit_btn" class="submit">송금하기</button> 
					</div> 
					<div style="display:none"></div> 
				</div>`
	},
		
	remit_cusInfo: ()=>{
		cus = $.cusInfo()
		return `<div class="themoin-remit-step-form">
							<div class="header-progress">
								<div class="step-item current">
									<p>보내는 분 정보</p>
									<div>
										<div></div>
									</div>
								</div>
								<div class="step-line">
									<div></div>
								</div>
								<div class="step-item">
									<p>받는 분 정보</p>
									<div>
										<div></div>
									</div>
								</div>
								<div class="step-line">
									<div></div>
								</div>
								<div class="step-item">
									<p>정보 확인</p>
									<div>
										<div></div>
									</div>
								</div>
							</div>
							<h2>보내는 분</h2>
							<div class="themoin-section isOpen">
								<h2 class="section-title">보내는 분의 정보를 확인해 주세요.</h2>
								<p class="section-description">기입한 이메일로 송금 관련 알림이 발송됩니다.<br> 중요한 안내를 받지 못하는 일이 없도록 정확히 입력해주세요.</p>
								<button class="toggle open"></button>
								<div class="themoin-profile-section">
									<form action="/a/v1/member/update" method="post">
										<div class="form-row col-2">
											<div class="firstname">
												<div class="moin-input">
													<label style="color: rgb(116, 127, 155);">이름 (Name)</label>
													<input class="fs-block" type="text" tabindex="0" value="${cus.cname}" readonly="">
												</div>
												<p class="moin-error"></p>
											</div>
										</div>
										<div class="form-row col-2">
											<div class="zip">
												<div class="moin-input">
													<label style="color: rgb(116, 127, 155);">우편번호</label>
													<input class="fs-block" placeholder="12345" type="text" tabindex="0" value="">
												</div>
												<p class="moin-error"></p>
											</div>
											<div class="postcode">
												<button class="btn-zipcode" tabindex="0" type="button">우편번호 검색</button>
											</div>
										</div>
										<div class="form-row">
											<div class="address">
												<div class="moin-input">
													<label style="color: rgb(116, 127, 155);">주소</label>
													<input class="fs-block" placeholder="417, Yeongdong-daero, Gangnam-gu, Seoul, Korea" type="text" tabindex="0" value="">
												</div>
												<p class="moin-error"></p>
											</div>
										</div>
										<div class="form-row">
											<div class="subaddress">
												<div class="moin-input">
													<label style="color: rgb(116, 127, 155);">상세주소</label>
													<input class="fs-block" placeholder="B2 Floor" type="text" tabindex="0" value="">
												</div>
												<p class="moin-error"></p>
											</div>
										</div>
										<div class="form-row col-2">
											<div class="themoin-composite-input  phone2">
												<div class="extra-controls">
													<button>이메일 인증</button>
												</div>
												<div class="moin-input">
													<label style="color: rgb(116, 127, 155);">이메일 번호 </label>
													<input class="fs-block" placeholder="현재 이메일 주소를 입력해주세요." type="text" tabindex="0" maxlength="11" value="">
												</div>
												<p class="moin-error"></p>
											</div>
										</div>
										<div class="form-row"></div>
									</form>
									<div class="daum-container hidden">
										<div class="daum-layer">
											<img id="btnCloseLayer" src="https://i1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" alt="닫기 버튼" style="cursor: pointer; position: absolute; z-index: 1;">
										</div>
									</div>
								</div>
							</div>
							<div class="controls">
								<button id="prev_fs_remit_btn" class="prev">이전</button>
								<button id="sec_remit_btn" class="next">다음</button>
							</div>
							<div style="height: 80px;"></div>
						</div>
						<div style="display:none"></div>
					</div>`
	},
	remit_rcpt: ()=>{
		return `<div class="themoin-remit-step-form">
					<div class="header-progress">
						<div class="step-item active">
							<p>보내는 분 정보</p>
							<div>
								<div></div>
							</div>
						</div>
						<div class="step-line active">
							<div></div>
						</div>
						<div class="step-item current">
							<p>받는 분 정보</p>
							<div>
								<div></div>
							</div>
						</div>
						<div class="step-line">
							<div></div>
						</div>
						<div class="step-item">
							<p>정보 확인</p>
							<div>
								<div></div>
							</div>
						</div>
					</div>
					<h2>받는 분 (Recipient)</h2>
					<div class="themoin-section isOpen">
						<h2 class="section-title">받는 분의 정보를 입력해주세요.</h2>
						<button class="toggle open"></button>
						<form class="themoin-recipient-field-section">
							<div class="form-row col-2">
								<div>
									<div class="moin-input">
										<label style="color: rgb(116, 127, 155);">여권 이름 (PassPort Name)</label>
										<input class="fs-block" id="pass_fnm" placeholder="이름 (First Name)" type="text" tabindex="0" value="">
									</div>
									<p>※여권 이름과 정확히 일치해야 합니다.</>
									<p class="moin-error"></p>
								</div>
								<div>
									<div class="moin-input">
									<label style="color: rgb(116, 127, 155);"></label>
										<input class="fs-block" id="pass_lnm" placeholder="성 (Last Name)" type="text" tabindex="0" value="">
									</div>
									<p class="moin-error"></p>
								</div>
								
							</div>
							<div class="form-row">
								<div>
									<div class="moin-input">
										<label style="color: rgb(116, 127, 155);">수취 국가 (Nation)</label>
										<input class="fs-block" style="display: block;" type="text" tabindex="0" readonly="" value="미국">
									</div>
									<p class="moin-error"></p>
								</div>
							</div>
							<div class="form-row">
								<div>
									<div class="moin-input">
										<label style="color: rgb(116, 127, 155);">이메일 (E-Mail)</label>
										<input class="fs-block"  id="rcpt_email" placeholder="수취인 이메일을 입력해주세요." type="text" tabindex="0" value="" >
									</div>
									<p class="moin-error"></p>
								</div>
							</div>
						</form>
					</div>
					<div class="controls">
						<button id="prev_sec_remit_btn" class="prev">이전</button>
						<button id="third_remit_btn" class="next">다음</button>
					</div>
					<div style="height: 80px;"></div>
				</div>
				<div style="display:none"></div>
			</div>`
		},
		remit_review: ()=>{
			return `<div class="themoin-remit-step-form">
						<div class="header-progress">
							<div class="step-item active">
								<p>보내는 분 정보</p>
								<div>
									<div>
									</div>
								</div>
							</div>
							<div class="step-line active">
								<div></div>
							</div>
							<div class="step-item active">
								<p>받는 분 정보</p>
								<div>
									<div></div>
								</div>
							</div>
							<div class="step-line active">
								<div></div>
							</div>
							<div class="step-item current">
								<p>정보 확인</p>
								<div>
									<div></div>
								</div>
							</div>
						</div>
						<h2>입력하신 정보가 맞나요?</h2>
						<div class="themoin-section borderless isOpen">
							<h2 class="section-title"></h2>
							<div class="themoin-review-section">
								<div style="text-align: center;">
									<p>입력한 정보를 한 번 더 확인하시고 <br class="mobile">송금 신청을 눌러주세요.</p>
								</div>
								<div class="review-amount" style="margin-top: 25px;">
									<p>보내는 금액</p>
								<div>
									<div class="amount">
										<p >0.00 <span class="unit">KRW</span></p><p>총 수수료 : ${deal.fee} KRW</p>
									</div>
									<img src="https://img.themoin.com/public/img/ic-next-p.png" class="user-sendlist-ic">
									<div class="amount receive">
										<p >${deal.amount} <span class="unit">USD</span></p><p>적용 환율 : 1 USD = 1161.81 KRW</p>
									</div>
								</div>
							</div>
							<div class="review-receiver">
								<div class="review-icon">
									<img src="https://img.themoin.com/public/img/img-recipient-2.svg"><p>받는 사람</p>
								</div>
								<table>
									<tbody>
										<tr>
											<td style="width: 100px;">여권 이름</td>
											<td class="color-grey-1 name fs-block">
												<span lang="en">${deal.rcpsl}</span>
												<span lang="en">${deal.rcpsf}</span>
											</td>
										</tr>
										<tr>
											<td style="width: 100px;">수취 국가</td>
											<td class="color-grey-1">미국 (USA)</td>
										</tr>
										<tr>
											<td>이 메 일</td>
											<td class="color-grey-1 fs-block"></td>
										</tr>
									</tbody>
								</table>
							</div>
							<br>
						</div>
					</div>
					<div class="themoin-section borderless isOpen">
						<h2 class="section-title">송금 목적을 알려주세요.</h2>
						<div class="themoin-survey-section">
							<div class="survey-input">
								<p class="select-label">송금 목적 :</p>
								<select>
									<option value="보내는 분 기준으로 선택해주세요">보내는 분 기준으로 선택해주세요 (Select)</option>
									<option value="학비">학비 (School tuition)</option>
									<option value="생활비">생활비 (Living expense)</option>
									<option value="개인 구매 대금">개인 구매 대금 (Personal purchase payment)</option>
									<option value="사업 대금">사업 대금 (Business payment)</option>
									<option value="기타 - 직접입력">기타 - 직접입력 (Others - Please specify)</option>
								</select>
							</div>
							<div class="survey-input">
								<p class="select-label">자금 출처 :</p>
								<select>
									<option value="보내는 분 기준으로 선택해주세요">보내는 분 기준으로 선택해주세요 (Select)</option>
									<option value="근로소득">근로소득 (Earned income)</option>
									<option value="사업소득">사업소득 (Business income)</option>
									<option value="부동산 임대 소득">부동산 임대 소득 (Real estate rental income)</option>
									<option value="연금소득">연금소득 (Annuity income)</option>
									<option value="기타 - 직접입력">기타 - 직접입력 (Others - Please specify)</option>
								</select>
							</div>
							<div class="survey-input">
								<p class="select-label">직업 정보 :</p>
								<select>
									<option value="보내는 분 기준으로 선택해주세요">보내는 분 기준으로 선택해주세요 (Select)</option>
									<option value="학생">학생 (Student)</option>
									<option value="직장인">직장인 (Office worker)</option>
									<option value="사업자">사업자 (Entrepreneur)</option>
									<option value="주부">주부 (Housewife)</option>
									<option value="기타 - 직접입력">기타 - 직접입력 (Others - Please specify)</option>
								</select>
							</div>
						</div>
					</div>
					<p class="warning-text">입금 후 취소가 불가능합니다. 신중하게 송금 신청해주세요!</p>
					<div class="submit-controls">
						<button id="complete_remit_btn">송금신청하기</button>
					</div>
					<div style="height: 80px;"></div>
				</div>
				<div style="display:none"></div>
			</div>`
		},
		remit_complete:()=>{
			return `<div class="themoin-remit-success">
						<div>
							<img src="https://img.themoin.com/public/img/img-success.svg">
							<h1>입금기한 58:31</h1>
							<div class="intro">머니허브 해외송금을 이용해주셔서 감사합니다.<br>
								<p><span>2019년 12월 30일 오후 3:38까지</span> 계좌로 입금해주세요.</p>
								<p class="fs-block">반드시, <span>신한은행 110341213905 이은지 계좌</span>에서 출금해주셔야 합니다.</p>
								진행 상황은 메인화면의 송금 내역에서 확인하실 수 있습니다.<br>
							</div>
							<div class="box">
								<div class="remit_info">
									<div>
										<p class="info_desc">입금할 금액</p>
										<p class="copy_text">5,500,000 KRW</p>
									</div>
									<button>금액 복사하기</button>
								</div>
								<div class="remit_info">
									<div>
										<p class="info_desc">입금할 가상 계좌</p>
										<p class="copy_text">광주은행 9427010256943 이은지_머니허브</p>
									</div>
									<button>계좌 복사하기</button>
								</div>
								<p class="warning">반드시 ‘인증받은 계좌’로 한번에 금액을 입금해주세요. 여러번 송금할 시에도 각각 따로 보내주셔야 합니다.</p>
							</div>
							<a id="main_user_btn">확인</a>
						</div>
					</div>`
	}
}
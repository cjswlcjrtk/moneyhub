var cmm_vue = cmm_vue || {}
cmm_vue = {
	head : ()=>{

		return `<head> 
		<!-- Google Tag Manager --> 
		<!--	<script type="text/javascript" async="" src="//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"></script>  
			<script type="text/javascript" async="" src="https://cdn.channel.io/plugin/ch-plugin-web.js" charset="UTF-8"></script> 
			<script async="" crossorigin="anonymous" src="https://edge.fullstory.com/s/fs.js"></script> 
			<script type="text/javascript" async="" src="//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"></script> 
			<script src="https://connect.facebook.net/signals/config/990202451106612?v=2.9.13&amp;r=stable" async=""></script> 
			<script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script> 
			<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script> 
		 
		<!-- End Google Tag Manager --> 

			<!-- Bootstrap core CSS --> 
		<style>
		canvas{
			-moz-user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
		}
		</style>
		</head>`
	},
	footer : ()=>{
		return `<div class="themoin-footer"> 
			<div> 
				<div class="section top"> 
					<div class="contact"> 
						<h3><b><a id="compo" class="">회사 소개</a></b></h3> 
					</div> 
					<div class="spacer"></div> 
					<div class="social"> 
						<h3><b><a id="faq" class="">F A Q</a></b></h3> 
					</div> 
					<div class="spacer"></div> 
					<div class="links"> 
		        		<h3><b><a id="event" class="">이벤트 페이지</a></b></h3> 
					</div> 
					<div class="spacer"></div>
					<div class="social">
						<h3><b><a id="guide" class="">WU 수취 가이드</a></b></h3>
					</div>
				</div> 
				<div class="section bottom"> 
					<div class="company"> 
						<img src="/web/resources/img/logo/gray_logo.png"> 
						<p> 
									(주)머니허브 | 대표이사 : 양현미 | 사업자등록번호 : 123-45-67890 
									<br> 
									소액해외송금업 등록번호 : 2019-12 
									<br> 
									주소 : 서울시 마포구 백범로 23 구프라자 3층 
									<br> 
									© 2019 MONEYHUB, Inc. All Rights Reserved. 
								</p> 
					</div> 
					<div class="spacer"></div> 
				</div> 
			</div> 
		</div>`
	}
}
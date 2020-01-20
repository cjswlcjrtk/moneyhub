var faq_vue = faq_vue || {}
faq_vue ={
	faq : ()=>{
		return `<div class="themoin-faq">
				    <div>
				        <h1 class="title">안녕하세요, 무엇을 도와드릴까요?</h1>
				        <form onsubmit="return false">
				            <div class="search">
				                <img id="search_img" src="https://img.themoin.com/public/img/search-new.svg" class="btn-search" type="button">
				                <div class="moin-input">
				                    <input id="search_input" class="fs-block" placeholder="검색어를 입력해주세요." type="text" tabindex="0" value="">
				                </div>
				                <p class="moin-error"></p>
				            </div>
				        </form>
				        
				        <div class="content">
			               
				        </div>
				        
				        <div class="wrap_paging">
	                        <div class="bundle_paging">
	                           
	                            
	                        </div>
	                    </div>
	                    
				    </div>
				</div>`
	}
}
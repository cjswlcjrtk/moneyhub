function fn_setAddr(){
	var width = 500; //팝업의 너비
	var height = 600; //팝업의 높이
	daum.postcode.load(function(){
		new daum.Postcode({
			oncomplete: function(data){
				//팝업에서 검색 결과 항목을 클릭했을 때 실행할 코드
				$('#zip').val(data.zonecode)
				$('#addr').val(data.address)
				$('#daddr').val(data.buildingName)
			}
		})
		.open()
	})
}
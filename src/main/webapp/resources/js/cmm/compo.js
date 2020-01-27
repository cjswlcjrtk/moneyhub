"use strict"
var compo = compo || {}
compo =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, img, compo_vue_js, main_class
	
	let init =x=>{
		_ = $.ctx()
		js = $.js()
		img = $.img()
		compo_vue_js = js + '/vue/compo_vue.js'
		main_class = x
	}
	let onCreate =x=>{
		init(x)
		$.when(
			$.getScript(compo_vue_js)
		)
		.done(()=>{
			setContentView(x)
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =x=>{
		$('.' + main_class)
		.html(compo_vue.compo(img))
		$('html').scrollTop(0)
		
		var mapContainer = document.getElementById('map'), // 지도를 표시할 div
	    mapOption = { 
	        center: new kakao.maps.LatLng(37.5523419,126.9377159), // 지도의 중심좌표
	        level: 3 // 지도의 확대 레벨
	    };

		var map = new kakao.maps.Map(mapContainer, mapOption); //지도 생성 및 객체 리턴
	
		// 마커가 표시될 위치입니다
		var markerPosition  = new kakao.maps.LatLng(37.5523419,126.9377159); 
	
		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
		    position: markerPosition
		});
	
		// 마커가 지도 위에 표시되도록 설정합니다
		marker.setMap(map);
	
		var iwContent = '<div style="padding:5px;">MONEYHUB<br><a href="https://map.kakao.com/link/map/MONEYHUB,37.5523419,126.9377159" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/MONEYHUB,37.5523419,126.9377159" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에
		    iwPosition = new kakao.maps.LatLng(37.5523419,126.9377159); // 인포윈도우 표시 위치입니다
	
		// 인포윈도우를 생성합니다
		var infowindow = new kakao.maps.InfoWindow({
		    position : iwPosition, 
		    content : iwContent 
		});
		  
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
		infowindow.open(map, marker); 
		}
	
	return { onCreate }
})()
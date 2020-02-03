$(document).ready(function(){
	let config = {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: '머니허브 환율',
				backgroundColor: '#2DCCD6',		//window.chartColors.blue,
				borderColor: '#2DCCD6',
				lineTension : 0,
				data: [],
				fill: false,	
			}]
		},
		options: {
			responsive: true,
			legend : {
				display : false
			},
			title: {
				display: true,
				text: '',
				fontSize : 18
			},
			tooltips: {
				displayColors : false,
				backgroundColor : '#2DCCD6',
				titleFontColor : '#fff',
				titleAlign : 'center',
				titleFontStyle : 'bold',
				callbacks : {
					title : function(tooltipItem, data){
						return `머니허브 환율`
					},
					label : function(tooltipItem, data){
						return config.data.datasets[0].data[tooltipItem['index']]
					}
				},
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					display: true,
					gridLines : {
						display : false
					},
					scaleLabel: {
						display: false,
						labelString: 'Month'
					}
				}],
				yAxes: [{
					display: false,
					gridLines : {
						display : false
					},
					scaleLabel: {
						display: true,
						labelString: 'Value'
					}
				}]
			}
		}
	};
	alert('그래프')
	let ctx = document.getElementById('canvas2').getContext('2d');
	
	let cntcd = $('#remit_box .amount-row .receive h3').text()
	$.getJSON( '/web/exrate/search/' + cntcd, d=>{	
		$.each(d.exlist.reverse(), (i, j)=>{
			config.data.labels.push(j.bdate.substr(-2))
			config.data.datasets[0].data.push(parseFloat(j.exrate))
		})
		config.options.title.text = `선택한 통화 환율 추이   1 ${cntcd} = ${config.data.datasets[0].data[config.data.datasets[0].data.length -1]} KRW`

		//		수수료 1.5%
		receive_value_calc()
		$('#remit_box .amount-row input.send-amount').keyup(()=>{
			receive_value_calc()
		})
		
		window.myLine = new Chart(ctx, config);
	})
	
	let receive_value_calc =()=>{
		let receive_value = $('#remit_box .amount-row input.send-amount').val().replace(/,/gi, '') 
							/ config.data.datasets[0].data[config.data.datasets[0].data.length -1] * 0.985 + ""
		//alert(`${receive_value.substring(0, receive_value.indexOf('.') + 3)}`)
		$('#remit_box .amount-row input.receive-amount').val(numberFormat(receive_value.substring(0, receive_value.indexOf('.') + 3)))

	}
	
	let numberFormat =x=>{
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
})
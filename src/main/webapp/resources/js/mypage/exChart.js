$(document).ready(function(){
	let config = {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: '머니허브 환율',
				backgroundColor: 'rgba(45, 204, 214, 0.2)',		//window.chartColors.blue,
				borderColor: '#2DCCD6',
				data: [],
				fill: true	
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
						return common.comma_create(config.data.datasets[0].data[tooltipItem['index']])
					}
				},
				intersect: false
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					display: true,
					gridLines : {
						display : true
					},
					scaleLabel: {
						display: false,
						labelString: 'Month'
					}
				}],
				yAxes: [{
					display: true,
					gridLines : {
						display : true
					},
					scaleLabel: {
						display: false,
						labelString: 'Value'
					},
					ticks: {
		                beginAtZero: false,
		                callback: function(value, index, values) {
		                	return common.comma_create(value)
					        
					    }
		            }
				}]
			}
		}
	}
	let ctx = document.getElementById('canvas1').getContext('2d');
	
	let cntcd = $('#receive_exch h3').text()
	$.getJSON( '/web/exrate/search/cntcd/' + cntcd, d=>{
		$.each(d.exlist.reverse(), (i, j)=>{
			config.data.labels.push(j.bdate.substr(-2))
			config.data.datasets[0].data.push(parseFloat(j.exrate))
		})
		config.options.title.text = `머니허브환율 1 ${cntcd} = ${config.data.datasets[0].data[config.data.datasets[0].data.length -1]} KRW`

		receive_value_calc()
		$('.form-calculator .amount-row input.send-amount').keyup(()=>{
			receive_value_calc()
		})
		
		window.myLine = new Chart(ctx, config)
	})
	
	let receive_value_calc =()=>{
		let send_value = common.comma_remove($('.form-calculator .amount-row input.send-amount').val())
		let receive_value = common.comma_remove($('.form-calculator .amount-row input.receive-amount').val())
		receive_value = send_value / config.data.datasets[0].data[config.data.datasets[0].data.length -1]
		$('.form-calculator .amount-row input.receive-amount').val(common.comma_create(receive_value.toFixed(2)))
	}
	
	let comma_create =x=>{
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
})
//		window.onload = function() {//
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
	
	let ctx = document.getElementById('canvas').getContext('2d');
	
	let cntcd = 'EUR'
	$.getJSON( '/web/exrate/search/' + cntcd, d=>{	
		$.each(d.exlist.reverse(), (i, j)=>{
//				lineChartData.datasets[0].data[i] = j.exrate 
			config.data.labels.push(j.bdate.substr(-2))
			config.data.datasets[0].data.push(parseFloat(j.exrate))
		})
		config.options.title.text = `1 ${cntcd} = ${config.data.datasets[0].data[9]} KRW`
//		$('#cntcd_exrate')
//		.text(`1 ${cntcd} = ${config.data.datasets[0].data[9]} KRW`)

		window.myLine = new Chart(ctx, config);
	})
})
		
			
		

/*		document.getElementById('randomizeData').addEventListener('click', function() {
			config.data.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return randomScalingFactor();
				});

			});

			window.myLine.update();
		});

		var colorNames = Object.keys(window.chartColors);
		document.getElementById('addDataset').addEventListener('click', function() {
			var colorName = colorNames[config.data.datasets.length % colorNames.length];
			var newColor = window.chartColors[colorName];
			var newDataset = {
				label: 'Dataset ' + config.data.datasets.length,
				backgroundColor: newColor,
				borderColor: newColor,
				data: [],
				fill: false
			};

			for (var index = 0; index < config.data.labels.length; ++index) {
				newDataset.data.push(randomScalingFactor());
			}

			config.data.datasets.push(newDataset);
			window.myLine.update();
		});

		document.getElementById('addData').addEventListener('click', function() {
			if (config.data.datasets.length > 0) {
				var month = MONTHS[config.data.labels.length % MONTHS.length];
				config.data.labels.push(month);

				config.data.datasets.forEach(function(dataset) {
					dataset.data.push(randomScalingFactor());
				});

				window.myLine.update();
			}
		});

		document.getElementById('removeDataset').addEventListener('click', function() {
			config.data.datasets.splice(0, 1);
			window.myLine.update();
		});

		document.getElementById('removeData').addEventListener('click', function() {
			config.data.labels.splice(-1, 1); // remove the label first

			config.data.datasets.forEach(function(dataset) {
				dataset.data.pop();
			});

			window.myLine.update();
		});*/
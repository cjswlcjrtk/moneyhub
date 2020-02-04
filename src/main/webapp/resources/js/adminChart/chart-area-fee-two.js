$(function(){
	function createChart(){
		let ctx = document.getElementById("areaChartFeeTwo");
		feeDBChart = new Chart(ctx, {
			type: 'line',
			data : feeDBChartData,
			options: {
			    maintainAspectRatio: false,
			    layout: {
			      padding: {
			        left: 10,
			        right: 25,
			        top: 25,
			        bottom: 0
			      }
			    },
			    scales: {
			      xAxes: [{
			        time: {
			          unit: 'date'
			        },
			        gridLines: {
			          display: false,
			          drawBorder: false
			        },
			        ticks: {
			          maxTicksLimit: 7
			        }
			      }],
			      yAxes: [{
			        ticks: {
			          maxTicksLimit: 5,
			          padding: 10
			        },
			        gridLines: {
			          color: "rgb(234, 236, 244)",
			          zeroLineColor: "rgb(234, 236, 244)",
			          drawBorder: false,
			          borderDash: [2],
			          zeroLineBorderDash: [2]
			        }
			      }],
			    },
			    legend: {
			      display: false
			    },
			    tooltips: {
			      backgroundColor: "rgb(255,255,255)",
			      bodyFontColor: "#858796",
			      titleMarginBottom: 10,
			      titleFontColor: '#6e707e',
			      titleFontSize: 14,
			      borderColor: '#dddfeb',
			      borderWidth: 1,
			      xPadding: 15,
			      yPadding: 15,
			      displayColors: false,
			      intersect: false,
			      mode: 'index',
			      caretPadding: 10
			    }
			  }			
		})		
	}
	
	let chartLabels = []
	let chartData = []
	$.getJSON('/web/adminChart/feeChartsTwo',d=>{
		$.each(d.feeDBChart,(i,j)=>{
			chartLabels.push(j+"월")
		})
		$.each(d.feeChartTwoAMNT,(i,j)=>{
//			console.log(d.feeDBChartAMNT)
			chartData.push(j)
		})
		feeDBChartData = {
			labels: chartLabels,
			datasets: [{
			      label: "수수료수익",
			      lineTension: 0.3,
			      backgroundColor: "rgba(204, 051, 051, 0.05)",
			      borderColor: "rgba(204, 051, 051, 1)",
			      pointRadius: 3,
			      pointBackgroundColor: "rgba(204, 051, 051, 1)",
			      pointBorderColor: "rgba(204, 051, 051, 1)",
			      pointHoverRadius: 3,
			      pointHoverBackgroundColor: "rgba(204, 051, 051, 1)",
			      pointHoverBorderColor: "rgba(204, 051, 051, 1)",
			      pointHitRadius: 10,
			      pointBorderWidth: 2,
			      data: chartData
			}],
		}
		createChart()
	})
})
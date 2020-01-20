// Set new default font family and font color to mimic Bootstrap's default styling
//Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
//Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
//var ctx = document.getElementById("memberPieChart");
//var memberPieChart = new Chart(ctx, {
//  type: 'doughnut',
//  data: {
//    labels: ["Direct", "Referral", "Social"], 
//    datasets: [{
//      data: [55, 30, 15],
//      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
//      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
//      hoverBorderColor: "rgba(234, 236, 244, 1)",
//    }],
//  },
//  options: {
//    maintainAspectRatio: false,
//    tooltips: {
//      backgroundColor: "rgb(255,255,255)",
//      bodyFontColor: "#858796",
//      borderColor: '#dddfeb',
//      borderWidth: 1,
//      xPadding: 15,
//      yPadding: 15,
//      displayColors: false,
//      caretPadding: 10,
//    },
//    legend: {
//      display: false
//    },
//    cutoutPercentage: 80,
//  },
//});

$(function(){	
	function createChart(){
		let ctx = document.getElementById("memberPieChart");
		memberPieChart = new Chart(ctx, {
			  type: 'doughnut',
			  data : memberPieChartData,
			  options: {
			    maintainAspectRatio: false,
			    tooltips: {
			      backgroundColor: "rgb(255,255,255)",
			      bodyFontColor: "#858796",
			      borderColor: '#dddfeb',
			      borderWidth: 1,
			      xPadding: 15,
			      yPadding: 15,
			      displayColors: false,
			      caretPadding: 10,
			    },
			    legend: {
			      display: false
			    },
			    cutoutPercentage: 80,
			  },
		})
	}
	
//	let chartLabels = ["Direct", "Referral", "Social"]
	let chartLabels = []
//	let chartData = [55, 30, 15]	
	let chartData = []	
	$.getJSON('/web/admin/memberPieChart',d=>{
		$.each(d.adminChart,(i,j)=>{	
			chartLabels.push(j+"대")
		})
		$.each(d.test,(i,j)=>{	
			chartData.push(j)
		})
			
		memberPieChartData = {
			labels: chartLabels,
		    datasets: [{
		      data: chartData,
		      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
		      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
		      hoverBorderColor: "rgba(234, 236, 244, 1)"
		    }],
		}
		createChart()
	})
})

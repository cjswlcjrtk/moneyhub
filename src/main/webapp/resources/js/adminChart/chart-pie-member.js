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
	
	let chartLabels = []
	let chartData = []	
	$.getJSON('/web/adminChart/memberPieChart',d=>{
		$.each(d.adminChart,(i,j)=>{	
			chartLabels.push(j+"대")
		})
		$.each(d.adminChartCount,(i,j)=>{	
			chartData.push(j)
		})			 
		memberPieChartData = {
			labels: chartLabels,
		    datasets: [{
		      data: chartData,
		      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b', '#858796'],
		      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
		      hoverBorderColor: "rgba(234, 236, 244, 1)"
		    }],
		}
		createChart()
	})
})

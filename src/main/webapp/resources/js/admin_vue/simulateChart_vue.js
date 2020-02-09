"use strict"
var simulateChart_vue = simulateChart_vue || {}
simulateChart_vue ={
		simulateChart_head : ()=>{
		return '<head>'+
		' <meta charset="utf-8">'+
		'  <meta http-equiv="X-UA-Compatible" content="IE=edge">'+
		'  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'  <meta name="description" content="">'+
		'  <meta name="author" content="">'+
		' <title>SB Admin 2 - Charts</title>'+
		' <!-- Custom fonts for this template-->'+
		'  <link href="/web/resources/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">'+
		'  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">'+
		' <!-- Custom styles for this template-->'+
		'  <link href="/web/resources/css/sb-admin-2.min.css" rel="stylesheet">'+
		'</head>'
	},
	simulateChart_body : ()=>{
		return '<body id="page-top">'+
		' <!-- Page Wrapper -->'+
		'  <div id="wrapper">'+
		'   <!-- Content Wrapper -->'+
		'    <div id="content-wrapper" class="d-flex flex-column">'+
		'     <!-- Main Content -->'+
		'      <div id="content">'+
		'       <!-- Begin Page Content -->'+
		'        <div class="container-fluid">'+
		'         <!-- Page Heading -->'+
		'          <h1 class="h3 mb-2 text-gray-800">모의수익률 분석차트</h1>'+
		'         <!-- Content Row -->'+
		'          <div class="row">'+
		'           <div class="col-xl-8 col-lg-7">'+
		'             <!-- Area Chart -->'+
		'              <div class="card shadow mb-4">'+
		'                <div class="card-header py-3">'+
		'                  <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>'+
		'                </div>'+
		'                <div class="card-body">'+
		'                  <div class="chart-area">'+
		'                    <canvas id="myAreaChart"></canvas>'+
		'                  </div>'+
		'                  <hr>'+
		'                  Styling for the area chart can be found in the <code>/js/adminChart/chart-area-demo.js</code> file.'+
		'                </div>'+
		'              </div>'+
		'             <!-- Bar Chart -->'+
		'              <div class="card shadow mb-4">'+
		'                <div class="card-header py-3">'+
		'                  <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>'+
		'                </div>'+
		'                <div class="card-body">'+
		'                  <div class="chart-bar">'+
		'                    <canvas id="myBarChart"></canvas>'+
		'                  </div>'+
		'                  <hr>'+
		'                  Styling for the bar chart can be found in the <code>/js/adminChart/chart-bar-demo.js</code> file.'+
		'                </div>'+
		'              </div>'+
		'           </div>'+
		'           <!-- 입력Area -->'+
		'            <div class="col-xl-4 col-lg-5">'+
		'           <!-- 기간설정 -->'+
		'              <div class="card shadow mb-4">'+
		'                <!-- Card Header - Dropdown -->'+
		'                <div class="card-header py-3">'+
		'                  <h6 class="m-0 font-weight-bold text-primary">기간설정</h6>'+
		'                </div>'+
		'                <div class="form-group row">'+		
		'                  <div class="col-sm-6">'+
		'                    <input type="text" id="feeOneReadOnly" class="form-control form-control-user" readonly="true">'+
		'                  </div>'+		
		'                  <div class="col-sm-6">'+
		'                    <input type="text" class="form-control form-control-user" id="feeOneUpdateValue" placeholder="수수료 변경 금액 입력">'+
		'                  </div>'+
		'				 </div>'+
		'                <a href="#" id="feeOneUpdate" class="btn btn-facebook btn-user btn-block">'+
		'                  기간 변경 하기'+
		'                </a>'+
		'              </div>'+
		'           <!-- 금액설정 -->'+
		'              <div class="card shadow mb-4">'+
		'                <!-- Card Header - Dropdown -->'+
		'                <div class="card-header py-3">'+
		'                  <h6 class="m-0 font-weight-bold text-primary">금액설정</h6>'+
		'                </div>'+
		'                <div class="form-group row">'+		
		'                  <div class="col-sm-6">'+
		'                    <input type="text" id="feeOneReadOnly" class="form-control form-control-user" readonly="true">'+
		'                  </div>'+		
		'                  <div class="col-sm-6">'+
		'                    <input type="text" class="form-control form-control-user" id="feeOneUpdateValue" placeholder="수수료 변경 금액 입력">'+
		'                  </div>'+
		'				 </div>'+
		'                <a href="#" id="feeOneUpdate" class="btn btn-facebook btn-user btn-block">'+
		'                  수수료 정보 변경 하기'+
		'                </a>'+
		'              </div>'+
		'           <!-- 국가설정 -->'+
		'              <div class="card shadow mb-4">'+
		'                <!-- Card Header - Dropdown -->'+
		'                <div class="card-header py-3">'+
		'                  <h6 class="m-0 font-weight-bold text-primary">국가설정</h6>'+
		'                </div>'+
		'                <div class="form-group row">'+		
		'                  <div class="col-sm-6">'+
		'                    <input type="text" id="feeOneReadOnly" class="form-control form-control-user" readonly="true">'+
		'                  </div>'+		
		'                  <div class="col-sm-6">'+
		'                    <input type="text" class="form-control form-control-user" id="feeOneUpdateValue" placeholder="수수료 변경 금액 입력">'+
		'                  </div>'+
		'				 </div>'+
		'                <a href="#" id="feeOneUpdate" class="btn btn-facebook btn-user btn-block">'+
		'                  수수료 정보 변경 하기'+
		'                </a>'+
		'              </div>'+
		'            </div>'+
		'          </div>'+
		'       </div>'+
		'        <!-- /.container-fluid -->'+
		'     </div>'+
		'      <!-- End of Main Content -->'+
		'   </div>'+
		'    <!-- End of Content Wrapper -->'+
		' </div>'+
		'  <!-- End of Page Wrapper -->'+
		' <!-- Scroll to Top Button-->'+
		'  <a class="scroll-to-top rounded" href="#page-top">'+
		'    <i class="fas fa-angle-up"></i>'+
		'  </a>'+
		' <!-- Logout Modal-->'+
		'  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
		'    <div class="modal-dialog" role="document">'+
		'      <div class="modal-content">'+
		'        <div class="modal-header">'+
		'          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>'+
		'          <button class="close" type="button" data-dismiss="modal" aria-label="Close">'+
		'            <span aria-hidden="true">×</span>'+
		'          </button>'+
		'        </div>'+
		'        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>'+
		'        <div class="modal-footer">'+
		'          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>'+
		'          <a class="btn btn-primary" href="login.html">Logout</a>'+
		'        </div>'+
		'      </div>'+
		'    </div>'+
		'  </div>'+
		' <!-- Page level plugins -->'+
		'  <script src="/web/resources/vendor/chart.js/Chart.min.js"></script>'+
		' <!-- Page level custom scripts -->'+
		'  <script src="/web/resources/js/adminChart/chart-area-feedb.js"></script>'+
		'  <script src="/web/resources/js/adminChart/chart-pie-member.js"></script>'+
		'  <script src="/web/resources/js/adminChart/chart-bar-demo.js"></script>'+
		'</body>'
	}
}
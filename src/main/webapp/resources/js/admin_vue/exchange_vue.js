"use strict"
var exchange_vue = exchange_vue || {}
exchange_vue ={
	exchange_head : ()=>{
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
	exchange_body : () =>{
		return '<body id="page-top">'+
		' <!-- Page Wrapper -->'+
		'  <div id="wrapper">'+
		'   <!-- Content Wrapper -->'+
		'    <div id="content-wrapper" class="d-flex flex-column">'+
		'     <!-- Main Content -->'+
		'      <div id="content">'+
		'       <!-- Begin Page Content -->'+
		'        <div class="container-fluid">'+
		'         <!-- Content Row -->'+
		'          <div class="row">'+
		'           <div class="col-xl-8 col-lg-7">'+
		'             <!-- Area Chart -->'+
		'              <div class="card shadow mb-4">'+
		'                <div class="card-header py-3">'+
		'                  <h6 class="m-0 font-weight-bold text-primary">환전시 발생하는 수익(단위 1만달러)</h6>'+
		'                </div>'+
		'                <div class="card-body">'+
		'                  <div class="chart-area">'+
		'                    <canvas id="areaChartExchagne"></canvas>'+
		'                  </div>'+
		'                </div>'+
		'              </div>'+
		'           </div>'+
		'            <div class="col-xl-4 col-lg-5">'+
		'           <!-- 3천달러 미만 수수료 조정 -->'+
		'              <div class="card shadow mb-4">'+
		'                <!-- Card Header - Dropdown -->'+
		'                <div class="card-header py-3">'+
		'                  <h6 class="m-0 font-weight-bold text-primary">환전시 수수료율 조정</h6>'+
		'                </div>'+
		'                <div class="form-group row">'+		
		'                  <div class="col-sm-6">'+
		'                    <input type="text" id="exchangeReadOnly" class="form-control form-control-user" readonly="true">'+
		'                  </div>'+		
		'                  <div class="col-sm-6">'+
		'                    <input type="text" class="form-control form-control-user" id="exchangeUpdateValue" placeholder="수수료 변경 금액 입력">'+
		'                  </div>'+
		'				 </div>'+
		'                <a href="#" id="exchangeUpdate" class="btn btn-facebook btn-user btn-block">'+
		'                  수수료 정보 변경 하기'+
		'                </a>'+
		'              </div>'+
		'            </div>'+
		'          </div>'+
		'       </div>'+
		'        <!-- /.container-fluid -->'+
		'     </div>'+
		'      <!-- End of Main Content -->'+
		'     <!-- Footer -->'+
		'      <footer class="sticky-footer bg-white">'+
		'        <div class="container my-auto">'+
		'          <div class="copyright text-center my-auto">'+
		'            <span>Copyright &copy; Your Website 2019</span>'+
		'          </div>'+
		'        </div>'+
		'      </footer>'+
		'      <!-- End of Footer -->'+
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
		'  <script src="/web/resources/js/adminChart/chart-area-exchange.js"></script>'+
		'</body>'
	}
}
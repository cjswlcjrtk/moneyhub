"use strict"
var memberUpdate_vue = memberUpdate_vue || {}
memberUpdate_vue ={
		memberUpdateHead : ()=>{
		return '<head>'+
		' <meta charset="utf-8">'+
		'  <meta http-equiv="X-UA-Compatible" content="IE=edge">'+
		'  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'  <meta name="description" content="">'+
		'  <meta name="author" content="">'+
		' <!-- Custom fonts for this template-->'+
		'  <link href="/web/resources/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">'+
		'  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">'+
		' <!-- Custom styles for this template-->'+
		'  <link href="/web/resources/css/sb-admin-2.min.css" rel="stylesheet">'+
		'</head>'
		},
		memberUpdateBody:x=>{
			return '<body class="bg-gradient-primary">'+
			' <div class="container">'+
			'   <div class="card o-hidden border-0 shadow-lg my-5">'+
			'      <div class="card-body p-0">'+
			'        <!-- Nested Row within Card Body -->'+
			'        <div class="row">'+
			'          <div class="col-lg-7">'+
			'            <div class="p-5">'+
			'              <div class="text-center">'+
			'                <h1 class="h4 text-gray-900 mb-4">고객 정보 수정</h1>'+
			'              </div>'+
			'              <form class="user">'+
			'                <div class="form-group row">'+
			'                  <div class="col-sm-6">'+
			'                    <input type="text" class="form-control form-control-user" value="'+x.CEMAIL+'" readonly="true" placeholder="현재 이메일 아이디">'+
			'                  </div>'+			
			'                  <div class="col-sm-6">'+
			'                    <input type="text" class="form-control form-control-user" id="updateCEMAIL" placeholder="변경할 이메일 아이디">'+
			'                  </div>'+
			'                  <div class="col-sm-6">'+
			'                    <input type="text" class="form-control form-control-user" value="'+x.CNAME+'" readonly="true" placeholder="현재 이름">'+
			'                  </div>'+
			'                  <div class="col-sm-6">'+
			'                    <input type="text" class="form-control form-control-user" id="updateCNAME" placeholder="변경할 이름">'+
			'                  </div>'+
			'                  <div class="col-sm-6">'+
			'                    <input type="text" class="form-control form-control-user" value="'+x.CPWD+'" readonly="true" placeholder="현재 비밀번호">'+
			'                  </div>'+
			'                  <div class="col-sm-6">'+
			'                    <input type="text" class="form-control form-control-user" id="updateCPWD" placeholder="변경할 비밀번호">'+
			'                  </div>'+
			'                  <div class="col-sm-6">'+
			'                    <input type="text" class="form-control form-control-user" value="'+x.CSTCD+'" readonly="true" placeholder="현재 고객 상태 코드">'+
			'                  </div>'+
			'                  <div class="col-sm-6">'+
			'                    <input type="text" class="form-control form-control-user" id="updateCSTCD" placeholder="변경할 고객 상태 코드">'+
			'                  </div>'+
			'                </div>'+
			'                <hr>'+
			'                <a href="#" id="updateComplete" class="btn btn-google btn-user btn-block">'+
			'                  고객 정보 변경 하기'+
			'                </a>'+
			'                <a href="#" id="updateCancel" class="btn btn-facebook btn-user btn-block">'+
			'                  고객 정보 변경 취소 하기'+
			'                </a>'+
			'              </form>'+
			'            </div>'+
			'          </div>'+
			'        </div>'+
			'      </div>'+
			'    </div>'+
			' </div>'+
//			' <!-- Bootstrap core JavaScript-->'+
//			'  <script src="/web/resources/vendor/jquery/jquery.min.js"></script>'+
//			'  <script src="/web/resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>'+
//			' <!-- Core plugin JavaScript-->'+
//			'  <script src="/web/resources/vendor/jquery-easing/jquery.easing.min.js"></script>'+
//			' <!-- Custom scripts for all pages-->'+
//			'  <script src="/web/resources/js/sb-admin-2.min.js"></script>'+
			'</body>'
		}
		
	}
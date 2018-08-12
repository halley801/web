import { Component} from '@angular/core';
import {} from '../services/toathuoc.service'
@Component({
    selector: 'app-toathuoc',
    template: `
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<div class="container">
	<div class="row">
		<div class="col-md-3 ">
		     <div class="list-group ">
              <a routerLink="/" class="list-group-item list-group-item-action active">Về trang chủ</a>
            </div> 
		</div>
		<div class="col-md-9">
		    <div class="card">
		        <div class="card-body">
		            <div class="row">
		                <div class="col-md-12">
		                    <h4>Toa thuốc bệnh nhân</h4>
		                    <hr>
		                </div>
		            </div>
		            <div class="row">
		                <div class="col-md-12">
		                    <form>
                              <div class="form-group row">
                                <label for="username" class="col-4 col-form-label">Họ và tên*</label> 
                                <div class="col-8">
                                  <input id="username" name="username" placeholder="Họ và tên" class="form-control here" required="required" type="text">
                                </div>
                              </div>
                              <div class="form-group row">
                                <label for="dateofbirth" class="col-4 col-form-label">Ngày tháng năm sinh*</label> 
                                <div class="col-8">
                                  <input id="dateofbirth" name="dateofbirth" placeholder="Ngày tháng năm sinh" required="required" class="form-control here" type="date">
                                </div>
                              </div>
                              <div class="form-group row">
                                <label for="idBn" class="col-4 col-form-label">Mã bệnh nhân*</label> 
                                <div class="col-8">
                                  <input id="idBn" name="idBn" placeholder="Mã bệnh nhân" class="form-control here" required="required" type="number">
                                </div>
                              </div>
                                <label for="prescription" class="col-4 col-form-label">Đơn thuốc</label> 
                                <div class="col-8">
                                  <textarea id="prescription" name="prescription" cols="50" rows="15" class="form-control"></textarea>
                                </div>
                              </div>
                              <div class="form-group row">
                                <div class="offset-4 col-8">
                                  <button name="submit" type="submit" class="btn btn-primary">Cập nhật bệnh án</button>
                                </div>
                              </div>
                            </form>
		                </div>
		            </div>
		            
		        </div>
		    </div>
		</div>
	</div>
    `
})

export class ToaThuocComponent{
  
}
let User1 = [];

function Add() {

     
    //lấy gtri của id
    var user = document.getElementById("user").value;
 
    var pass = document.getElementById("pass").value;
    var re_pass = document.getElementById("re_pass").value;
    var email = document.getElementById("email").value;
    var status = document.getElementById("status").value;

    //kiểm tra form
    //kiểm tra user
    if(user.length == 0 ){
        document.getElementById("check1").innerHTML = "Vui lòng nhập user";
        return false;
    }
    else{
        document.getElementById("check1").innerHTML = " ";
    }

    //kiểm tra pass
    if(pass.length == 0){
        document.getElementById("check2").innerHTML = "Vui lòng nhập mật khẩu";
        return false;
    }
    else{
        document.getElementById("check2").innerHTML = " ";
    }
    //giới hạn kí tự là 8
    if(pass.length < 8){
        document.getElementById("check2").innerHTML = "Vui lòng nhập 8 kí tự";
        return false;
    }
   
    //kiểm tra re-pass
    if(re_pass.length == 0){
        document.getElementById("check3").innerHTML = "Vui lòng nhập lại mật khẩu";
        return false;
    }
    else{
        document.getElementById("check3").innerHTML = " ";
    }

     //pass và re-pass phải trùng nhau thì dùng if
    if(pass != re_pass){
        document.getElementById("check3").innerHTML = "Mật khẩu không trùng nhau";
    }

    //kiểm tra email
    if(email.length == 0){
        document.getElementById("check4").innerHTML = "Vui lòng nhập lại email";
        return false;
    }
    else{
        document.getElementById("check4").innerHTML = " ";
    }
    
    //kiểm tra status
    if(status.length == 0){
        document.getElementById("check5").innerHTML = "Vui lòng chọn tình trạng";
        return false;
    }
    else{
        document.getElementById("check5").innerHTML = " ";
    }
    //tạo ra đối tượng thongTin
    var thongTin = {
        ten : user,
        mkhau : pass,
        mail: email,
        tinhTrang : status
    }
    User1.push(thongTin);

    luuThongTin();
    User1.forEach(function(user,index){
        console.log(user.mail);
        console.log(index);
    })
}
function luuThongTin(){
    var table = document.getElementById("table");
    var list = 
    `<tr>
    <td>Username</td>
    <td>Password</td>
    <td>Email</td>
    <td>Tình trạng</td>
    </tr>`
    
    User1.forEach((Infor) => {
        
        var gtri = parseInt(Infor.tinhTrang) === 1 ? "Hoạt động" : "Không hoạt động"
  
        list +=
    `<tr>
    <td>${Infor.ten}</td>
    <td>${Infor.mkhau}</td>
    <td>${Infor.mail}</td>
    <td>${gtri}</td>
    </tr>` 
    
    
    }); table.innerHTML = list;
}


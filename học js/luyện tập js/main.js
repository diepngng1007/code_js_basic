function changePass(){
    var user = document.getElementById("user").value;
    var pass_old = document.getElementById("pass_old").value;
    var pass_new = document.getElementById("pass_new").value;
    var re_pass = document.getElementById("re_pass").value;
    var matKhauCu = "123@abc123";
    var kiTu = /^(?=.*[A-za-z])(?=.*\d)[A-za-z\d]{1,}$/;

    //check user
    if(user.length == 0){
        document.getElementById("check1").innerHTML = "Vui lòng nhập tên người dùng";
        return false;
    }
    else{
        document.getElementById("check1").innerHTML = " ";
    }

    //check mk cũ
    if(pass_old.length == 0){
        document.getElementById("check2").innerHTML = "Vui lòng nhập mật khẩu cũ";
        return false;
    }
    else{
        document.getElementById("check2").innerHTML = " ";
    }

    //check mk mới
    if(pass_new.length == 0){
        document.getElementById("check3").innerHTML = "Vui lòng nhập mật khẩu cũ";
        return false;
    }
    else{
        document.getElementById("check3").innerHTML = " ";
    }
    
    //check nhập lại mk mới
    if(re_pass.length == 0){
        document.getElementById("check4").innerHTML = "Vui lòng nhập lại mật khẩu";
        return false;
    }
    else{
        document.getElementById("check4").innerHTML = " ";
    }

    //mk cũ phải khớp với "123@abc123"
    if(pass_old != matKhauCu){
        document.getElementById("check2").innerHTML = "Mật khẩu cũ không đúng";
    }
    else{
        document.getElementById("check2").innerHTML = " ";
    }

    //mk mới phải có ít nhất 1 kí tự số
    if(pass_new != kiTu){
        document.getElementById("check3").innerHTML = "Mật khẩu gồm có chữ và số";
    }
    if(kiTu.test(pass_new)){
        document.getElementById("check3").innerHTML = " ";
    }
    
    //mk mới phải trùng với mk nhập lại
    if(pass_new != re_pass){
        document.getElementById("check4").innerHTML = "Mật khẩu không trùng nhau";
    }
    else{
        document.getElementById("check4").innerHTML = " ";
    }

}
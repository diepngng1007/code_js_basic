function Order(){
    var khach = document.getElementById("khach").value;
    var loai = document.getElementById("loai").value;
    var gia = document.getElementById("gia").value;
    var luong = document.getElementById("luong").value;
    var tien = document.getElementById("tien").value;

    //check khách hàng
    if(khach.length == 0){
        document.getElementById("check1").innerHTML = "Vui lòng nhập tên khách hàng";
        return false;
    }
    else{
        document.getElementById("check1").innerHTML = " ";
    }

    //check loại hàng
    if(loai.length == 0){
        document.getElementById("check2").innerHTML = "Vui lòng chọn loại hàng";
        return false;
    }
    else{
        document.getElementById("check2").innerHTML = " ";
    }

    //check đơn giá
    if(gia.length == 0){
        document.getElementById("check3").innerHTML = "Vui lòng nhập đơn giá";
        return false;
    }
    else{
        document.getElementById("check3").innerHTML = " ";
    }

    if(luong.length == 0){
        document.getElementById("check4").innerHTML = "Vui lòng nhập số lượng";
        return false;
    }
    else{
        document.getElementById("check4").innerHTML = " ";
    }

    if(tien.length == 0){
        document.getElementById("check5").innerHTML = "Vui lòng nhập thành tiền";
        return false;
    }
    else{
        document.getElementById("check5").innerHTML = " ";
    }
}

function sanPham(){
    var loai = document.getElementById("loai").value;
    var gia = document.getElementById("gia");
    if(loai == 0){
        gia.value = 0;
    }
    if(loai == 1){
        gia.value = 500000;
    }
    if(loai == 2){
        gia.value = 300000;
    }
    if(loai == 3){
        gia.value = 100000;
    }

}

function soLuong(){
    var luong = document.getElementById("luong").value;
    var tien = document.getElementById("tien");
    var gia = document.getElementById("gia").value;
    var loai = document.getElementById("loai").value;

    if(loai == 1){
        gia.value = 500000;
    }
    if(loai == 2){
        gia.value = 300000;
    }
    if(loai == 3){
        gia.value = 100000;
    }

    tien.value = gia * luong;
}
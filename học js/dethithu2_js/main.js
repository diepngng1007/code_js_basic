function Add(){
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

    //check giá cả
    if(gia.length == 0){
        document.getElementById("check3").innerHTML = "Vui lòng nhập giá";
        return false;
    }
    else{
        document.getElementById("check3").innerHTML = " ";
    }

    //check số lượng
    if(luong.length == 0){
        document.getElementById("check4").innerHTML = "Vui lòng chọn số lượng";
        return false;
    }
    else{
        document.getElementById("check4").innerHTML = " ";
    }

    //check số tiền
    if(tien.length == 0){
        document.getElementById("check5").innerHTML = "Vui lòng nhập số tiền";
        return false;
    }
    else{
        document.getElementById("check5").innerHTML = " ";
    }

    
    //tạo hàm sanpham để lấy giá loại hàng (đê hỏi khi chọn...thì...dùng onchange)
    //khi chọn loại 1 thì giá = 500k, loại 2 thì giá = 300k, loại 3 thì giá = 100k
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

    //tạo hàm số lượng để tính giá tiền ( đề hỏi khi chọn ...thì... dùng onchange)
    //khi nhập số lượng thì tính thành tiền = số lượng * giá
function soLuong(){
    var tien = document.getElementById("tien");
    var luong = document.getElementById("luong").value;
    var loai = document.getElementById("loai").value;
    var gia = document.getElementById("gia").value;
    if(loai == 1){
        gia = 500000;
    }
    if(loai == 2){
        gia = 300000;
    }
    if(loai == 3){
        gia = 100000;
    }
    tien.value = luong * gia ;
}
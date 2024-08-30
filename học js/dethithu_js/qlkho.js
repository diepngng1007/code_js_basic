var nhapKho = [];
function Add(){
    var tensp = document.getElementById("tensp").value;
    var masp = document.getElementById("masp").value;
    var nha = document.getElementById("nha").value;
    var soluong = document.getElementById("soluong").value;
    var gia = document.getElementById("gia").value;
    var status = document.getElementById("status").value;

    //check ten sp
    if(tensp.length == 0) {
        document.getElementById("check1").innerHTML = "Vui lòng nhập tên sản phẩm";
        return false;
    }
    else{
        document.getElementById("check1").innerHTML = " ";
    }
    
    //tensp tối thiểu 5 kí tự
    if(tensp.length < 5){
        document.getElementById("check1").innerHTML = "Tên sản phẩm phải đủ 5 kí tự";
        return false;
    }
    
    //check masp
    if(masp.length == 0) {
        document.getElementById("check2").innerHTML = "Vui lòng nhập mã sản phẩm";
        return false;
    }
    else{
        document.getElementById("check2").innerHTML = " ";
    }

    //check nhà cung cấp
    if(nha.length == 0) {
        document.getElementById("check3").innerHTML = "Vui lòng chọn nhà cung cấp";
        return false;
    }
    else{
        document.getElementById("check3").innerHTML = " ";
    }

    //check soluong
    if(soluong.length == 0) {
        document.getElementById("check4").innerHTML = "Vui lòng chọn số lượng";
        return false;
    }
    else{
        document.getElementById("check4").innerHTML = " ";
    }

    //check giá tiền
    if(gia.length == 0) {
        document.getElementById("check5").innerHTML = "Vui lòng nhập giá tiền";
        return false;
    }
    else{
        document.getElementById("check5").innerHTML = " ";
    }

    //check status

    if(status.length == 0) {
        document.getElementById("check6").innerHTML = "Vui lòng chọn tình trạng";
        return false;
    }
    else{
        document.getElementById("check6").innerHTML = " ";
    }

    //giá sp phải là số dương
    if(gia < 0){
        document.getElementById("check5").innerHTML = "Giá sản phẩm phải là số dương";
        return false;
    }
    else{
        document.getElementById("check5").innerHTML = " ";
    }

    //số lượng phải là số dương
    if(soluong < 0) {
        document.getElementById("check4").innerHTML = "Số lượng phải là số dương";
        return false;
    }
    else{
        document.getElementById("check4").innerHTML = " ";
    }


    //tạo đối tượng thông tin
    var thongTin = {
        ten : tensp,
        ma : masp,
        home : nha,
        quatify : soluong,
        price : gia,
        tinh : status,
    }
    nhapKho.push(thongTin);
    console.log(nhapKho);
    luuThongTin();

}

function luuThongTin(){
    var table = document.getElementById("table");
    var list = `
    <tr>
    <td>Tên sản phẩm</td>
    <td>Mã sản phẩm</td>
    <td>Nhà cung cấp</td>
    <td>Số lượng</td>
    <td>Giá tiền</td>
    <td>Status</td>
    </tr>`

    nhapKho.forEach((Infor,index) => {
        var XuatThongTin = index;
        var giaTri1 = parseInt(Infor.home) === 1 ? "Nhà cung cấp 1" : "Nhà cung cấp 2";
        var giaTri2 = parseInt(Infor.tinh) === 1 ? "Còn hàng" : "Hết hàng";
        index++;
        list += 
        `
        <tr>
        <td>${Infor.ten}</td>
        <td>${Infor.ma}</td>
        <td>${giaTri1}</td>
        <td>${Infor.quatify}</td>
        <td>${Infor.price}</td>
        <td>${giaTri2}</td>
        </tr>`

    }); table.innerHTML = list;
}
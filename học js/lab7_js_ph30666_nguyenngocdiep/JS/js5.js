function hien_thi(visible) {
    var phi_vc = document.getElementById("phi_vc");
    phi_vc.style.display = visible ? "" : "none";
}
function kiem_tra() {
    var sp = document.getElementById("san_pham");
    if (sp.value.length == 0) {
        alert("Vui lòng nhập tên sản phẩm!")
        return false;
    }
    //Kiểm tra số dương
    var gia = document.getElementById("don_gia");
    if (isNaN(gia.value)) {
        alert("Vui lòng nhập số!");
        return false;
    } else if (parseFloat(gia.value) <= 0) {
        alert("Vui lòng nhập số dương!");
        return false;
    }
    //Kiểm tra chọn select-box
    var loai = document.getElementById("loai");
    if (loai.value.length == 0) {
        alert("Vui lòng chọn loại sản phẩm!");
        return false;
    }
    //Kiểm tra chọn radio
    var radios = document.getElementsByName("dia_chi");
    if (!radios[0].checked && !radios[1].checked) {
        alert("Vui lòng chọn nơi nhận hàng!");
        return false;
    }
    alert("Chúc mừng bạn đã nhập đúng");
    return true;
}
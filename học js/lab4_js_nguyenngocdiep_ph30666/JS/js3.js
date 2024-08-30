function dongHo(){
    var today = new Date(); //lấy ngày h hiện tại
    var gio = today.getHours(); //lấy giờ hiện tại
    var phut = today.getMinutes(); //lấy phút hiện tại
    var giay = today.getSeconds();
    // cập nhật tgian sau 1 giây
    setTimeout("dongHo()", 1000); // cứ sau 1 giây ta gọi hàm đồng hồ
    var thongTin = gio + ":" + phut + ":" + giay;
    //đưa thông tin này lên web
    //truy cập vào id time, dẫn text
    document.getElementById('time').innerHTML = thongTin; 

}
dongHo(); // gọi hàm
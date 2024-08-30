function them(button){
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0];
    btnXoa.innerText = "Xóa";
    btnXoa.setAttribute('onclick', 'xoa(this)'); //setAttribute thêm gtri
    document.getElementById("cart").appendChild(row);
    
    tinhtong();
}
function xoa(button){
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row);
    tinhtong(); //removeChild xóa
}

function tinhtong(){
    var cart = document.getElementById("cart"); 
    var rows = cart.getElementsByTagName("tr"); 
    var tong = 0;
    for (let i = 0; i < rows.length; i++){ 
      var cells = rows[i].getElementsByTagName("td");
      var price = cells[1].innerText.substring(1);
      tong += Number(price) ;
    
   }
   document.getElementById("tong").innerText = tong;
   
      
}
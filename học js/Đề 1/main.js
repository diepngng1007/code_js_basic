var user = [];
var tbody = document.querySelector('tbody');

function showUsers(){
    tbody.innerHTML = user.map(function (item) {
        return `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.usercode}</td>
                    <td>${item.supplier? "Nhà cung cấp 1":"Nhà cung cấp 2"}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
                    <td>${item.status? "Còn hàng":"Hết hàng"}</td>
                </tr>
            `
    }).join("");
}

showUsers();

var names = document.querySelector("#ten");
var usercodes = document.querySelector("#ma");
var suppliers = document.querySelector("#nha");
var quantitys = document.querySelector("#so");
var prices = document.querySelector("#gia");
var statuss = document.querySelector("#tinh");
var subbit = document.querySelector("#btn");

function addUser(Trinh){
    Trinh.preventDefault();

    if(ten.value.trim() == ""){
        alert("Tên sản phẩm không được để trống");
        return false;
    }else if(ten.value.length < 5){
        alert("Tên sản phẩm phải dài hơn 5 kí tự");
        return false;
    }
    if(ma.value.trim() == ""){
        alert("Mã sản phẩm không được để trống");
        return false;
    }
    if(so.value.trim() == ""){
        alert("Số lượng sản phẩm không được để trống");
        return false;
    }else if(so.value < 0){
        alert("Số lượng sản phẩm phải là số dương");
        return false;
    }
    if(gia.value.trim() == ""){
        alert("Giá sản phẩm không được để trống");
        return false;
    }else if(so.value < 0){
        alert("Giá sản phẩm phải là số dương");
        return false;
    }
    
    var newUser = {
        id: user.length+1,
        name: ten.value,
        usercode: ma.value,
        supplier: nha.value == 0 ? true : false,
        quantity: so.value,
        price: gia.value,
        status: tinh.value == 0 ? true : false,
    }

    user.push(newUser);
    showUsers();

}
subbit.addEventListener('click', addUser)
var user = []
var tbody = document.querySelector('tbody')

function showUser(){
    tbody.innerHTML = user.map(function(item){
        return `
            <tr>
                <td>${item.name}</td>
                <td>${item.code}</td>
                <td>${item.unit? "Đơn vị 1":"Đơn vị 2"}</td>
                <td>${item.gender? "Nam":"Nữ"}</td>
                <td>${item.people}</td>
                <button onclick="removeUser(${item.id})">Xoá</button>
            </tr>
        `
    }).join("")
}
showUser()

function removeUser(id){
    for(var item of user){
        if(user.id == id){
            var itemIndex = user.indexOf(item)
        }
        user.splice(itemIndex,1)
    }
    showUser()
}

var nameQr = document.querySelector("#nametour")
var codeQr = document.querySelector("#codetour")
var unitQr = document.querySelector("#int")
var sexQr = document.querySelector("#sex")
var userQr = document.querySelector("#user")
var subbit = document.querySelector("#btn")

function addUser(Trinh){
    Trinh.preventDefault()

    if(nameQr.value.trim() == ""){
        alert("Tên tour không được để trống!")
        return false;
    }else if(nameQr.length < 10){
        alert("Tên tour tối thiểu 10 ký tự!")
        return false;
    }
    if(codeQr.value.trim() == ""){
        alert("Mã tour không được để trống!")
        return false;
    }else if(codeQr.length < 5){
        alert("Mã tour tối thiểu 5 ký tự!")
        return false;
    }
    if(userQr.value.trim() == ""){
        alert("Số người đi cùng không được để trống!")
        return false;
    }

    var newUser = {
        id: user.length+1,
        name: nameQr.value,
        code: codeQr.value,
        unit: unitQr.value == 0 ? true : false,
        gender: sexQr.value == 0 ? true : false,
        people: userQr.value,
    }
    user.push(newUser);
    showUser()
}
btn.addEventListener('click', addUser)
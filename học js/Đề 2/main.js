var user = [];
var tbody = document.querySelector('tbody');

function showUser() {
    tbody.innerHTML = user.map(function (item) {
        return `
            <tr>
                <td>${item.name}</td>
                <td>${item.password}</td>
                <td>${item.email}</td>
                <td>${item.status ? "Độc thân" : "Có chủ"}</td>
                <td>
                <button onclick="removeUser(${item.id})">Xoá</button>
                </td>
            </tr>
        `
    }).join("")
}
showUser()

function removeUser(id) {
    if (confirm("Bạn có muốn xoá không?")) {
        for (var item of user) {
            if (user.id == id) {
                var itemIndex = user.indexOf(item);
            }
            user.splice(itemIndex, 1);
        }
    } else{
        alert("Không muốn xoá ah :)");
    }
    showUser()
}

var userQr = document.querySelector("#User")
var passQr = document.querySelector("#Pass")
var repassQr = document.querySelector("#Re-pass")
var emailQr = document.querySelector("#Email")
var statusQr = document.querySelector("#Status")
var btnQr = document.querySelector("#btn")

function addUser(Trinh) {
    Trinh.preventDefault()
    if (userQr.value.trim() == "") {
        document.querySelector(".Product").innerHTML = "User không được để trống!";
        return false;
    } else {
        document.querySelector(".Product").innerHTML = "";
    }

    if (passQr.value.trim() == "") {
        document.querySelector(".Product1").innerHTML = "Password không được để trống!"
        return false;
    } else if (passQr.value.length < 8) {
        document.querySelector(".Product1").innerHTML = "Password phải tối thiểu 8 kí tự";
        return false;
    } else {
        document.querySelector(".Product1").innerHTML = "";
    }

    if (repassQr.value.trim() == "") {
        document.querySelector(".Product2").innerHTML = "Re-Password không được để trống!"
        return false;
    } else if (repassQr.value != passQr.value) {
        document.querySelector(".Product2").innerHTML = "Re-Password phải trùng với Password!"
        return false;
    } else {
        document.querySelector(".Product2").innerHTML = "";
    }

    if (emailQr.value.trim() == "") {
        document.querySelector(".Product3").innerHTML = ("Email không được để trống")
        return false;
    } else {
        document.querySelector(".Product3").innerHTML = "";
    }

    var newUser = {
        id: user.length + 1,
        name: userQr.value,
        password: passQr.value,
        repassword: repassQr.value,
        email: emailQr.value,
        status: statusQr.value == 0 ? true : false
    }
    user.push(newUser)
    showUser()
}
btnQr.addEventListener('click', addUser)


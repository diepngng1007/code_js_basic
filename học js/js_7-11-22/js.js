//1.Sự khác nhau giữa var và let
//Khai báo với var
// var bienvar1 = "Đây là biến var ngoài khối";
// if(true){
//     var bienvar2 = "Đây là biến var trong khối";
//     document.write(bienvar2 + "<br>");
// }
// document.write(bienvar1 + "<br>");
// document.write("<br>");
// //khai báo với let
// let bienlet = "Đây là biến let ngoài khối";
// if(true){
//     let bienlet = "Đây là biến let trong khối";
//     document.write(bienlet + "<br>");
// }
// document.write(bienlet + "<br>");

//2.khai báo hằng số
// const soPI = 3.14;
// soPI = 5;
// document.write(soPI);

// //3.khai báo chuỗi
// var chuoi1 = "Đây là \"chuỗi\"1";
// var chuoi2 = 'Đây là \nchuỗi 2';
// var chuoi3 = `Đây là chuỗi 3`;
// document.write(chuoi1 + "</br>");
// document.write(chuoi2 + "</br>");
// document.write(chuoi3 + "</br>");
// console.log(chuoi2);
// alert(chuoi2);

//4.Thuộc tính và phương thức chuỗi
// var chuoi4 = "Đây là chuỗi 4";
// //Thuộc tính length
// document.write(chuoi4.length + "<br>");
// //phương thức cắt chuỗi
// document.write(chuoi4.substring(0,14) + "<br>");
// //phương thức nối chuỗi
// var chuoi5 = "Xin chào!";
// document.write(chuoi5.concat(" ", chuoi4) + "<br>");
// //phương thức viết hoa tất cả
// document.write(chuoi4.toLocaleUpperCase()+"<br>");

//5. Khai báo xác định kiểu dữ liệu
// var so1 = 10;
// var chuoi1 = "10";
// var chuoi2 = "số 10";
// //sử dụng isNaN
// document.write("Kết quả isNaN 1: "+isNaN(so1)+"<br>");
// document.write("Kết quả isNaN 2: "+isNaN(chuoi1)+"<br>");
// document.write("Kết quả isNaN 3: "+isNaN(chuoi2)+"<br>");
// document.write("<br>");
// //sử dụng isInterger
// document.write("Kết quả isInterger 1: "+Number.isInteger(so1)+"<br>");
// document.write("Kết quả isInterger 2: "+Number.isInteger(chuoi1)+"<br>");
// document.write("Kết quả isInterger 3: "+Number.isInteger(chuoi2)+"<br>");

// 6. Chuyển kiểu số thành chuỗi
// var so2 = 5.6780;
// document.write(so2.toFixed()+"<br>");
// document.write(so2.toFixed(2)+"<br>");
// document.write(so2.toFixed(6)+"<br>");
// document.write("kết quả isNaN: "+isNaN(so2.toFixed())+"<br>");
// document.write("<br>");
// //làm tròn số tính cả phần trước thập phân
// document.write(so2.toPrecision()+"<br>");
// document.write(so2.toPrecision(2)+"<br>");
// document.write(so2.toPrecision(6)+"<br>");

//7. Kiểu dữ liệu Boolean
// var bool1 = prompt("Mời bạn nhập điểm trung bình:");
// if(diemTB >=5){
//     alert("Chúc mừng bạn đã qua môn!");
// }
// else{
//     alert("Mời bạn xuống phòng đào tạo uống nước!");
// }

//8. kiểu dữ liệu Undefined và Null
// var bienundef = undefined; // undefined là gtri k xđ == var=bienTG
// var biennull = null;
// var bienTG;
// document.write("So sánh tuyệt đối: ",bienTG === bienundef)
// document.write("<br>");
// document.write("So sánh tương đối: ",bienTG == bienundef)
// document.write("<br>");
// document.write("<br>");
// document.write("So sánh tuyệt đối: ",biennull === bienundef)
// document.write("<br>");
// document.write("So sánh tương đối: ",biennull == bienundef)
// document.write("<br>");
// document.write("<br>");
// //So sánh tuyệt đối và tương đối
// var so3 = 10;
// var so4 = "10";
// document.write("So sánh tuyệt đối số 10 - chuỗi 10: ", so3 === so4);
// document.write("<br>");
// document.write("So sánh tương đối số 10 - chuỗi 10:",so3 == so4);
// document.write("<br>");

//9. Mảng trong Javascript
// //cách 1:
// arr1 = new Array("phần tử 1", "phần tử 2", "phần tử 3", "phần tử 4");
// //cách 2:
// arr2 = ["PHẦN TỬ 1", "PHẦN TỬ 2", "PHẦN TỬ 3","PHẦN TỬ 4"];
// // document.write(arr1);
// //Truy xuất phần tử trong mảng
// console.log(arr1[0]);
// console.log(arr1[2]);
// //kiểm tra độ dài của mảng
// console.log(arr1.length)
// //ghi đè giá trị của mảng
// arr1[0] = "giá trị mới";
// //thêm phần tử đầu tiên
// arr1.unshift("giá trị đầu tiên");
// //thêm phần tử cuối cùng
// arr1.push("giá trị cuối cùng",);
// //xóa phần tử đầu tiên
// arr1.shift();
// //xóa phần tử cuối cùng 
// arr1.pop();
// //xóa x phần tử ở vị trí n giống b4 lab 2
// arr1.splice(2,0,"thêm mới");
// //nối mảng
// var arr3 = arr1.concat(arr2);
// //xác định vị trí phần tử
// console.log(arr1.indexOf("phần tử 3"));
// console.log(arr1.lastIndexOf("phần tử 3"));
// console.log(arr3);
// console.log(arr1);
// // console.log(arr2);

//10.Ép kiểu
// //Chuyển số thành chuỗi
// var so5 = 10;
// console.log(typeof(so5));
// var chuoi5 = String(so5);
// console.log(typeof(chuoi5));
// //Chuyển chuỗi thành số 
// var chuoi6 = "10";
// console.log(typeof(chuoi6));
// var so6 = Number(chuoi6);
// console.log(typeof(so6));
// //Tự ép kiểu
// var so7 = 100;
// var chuoi7 = "10";
// var so8 = so7 + chuoi7;
// var so9 = so7 + Number(chuoi7);
// console.log(so8);
// console.log(so9);

// // Ép chuỗi thành mảng
// var str1 = "Lập - trình - Javacript";
// var arr4 = str1.split("-");
// console.log(arr4);
// // Ép mảng thành chuỗi
// var arr5 = ["Lập","Trình","Javascript"];
// var str5 = arr5.join(" ");
// // console.log(str5);

// var diemTongKet = prompt("Nhập điểm tổng kết của bạn:");
// if(diemTongKet >= 8){
//     alert("Học sinh giỏi");
// }
// else if(diemTongKet >= 5 && diemTongKet < 8){
//     alert("Học sinh tiên tiến");
// }
// else{
//     alert("Học sinh yếu");
// }

// var so10 = 10;
// var so11 = 10++;
// var so12 = 10;
// var so13 = ++so12;
// document.write("Số 10: " + so10 +"<br>");
// document.write("Số 11: " + so11 +"<br>");
// document.write("Số 12: " + so12 +"<br>");
// document.write("Số 13: " + so13 +"<br>")

// 11.Đối tượng Math 
// tìm giá trị lớn nhất
document.write("Giá trị lớn nhất: " + Math.max(1,2,3,4,5,66,74,23) + "<br>");
// tìm giá trị nhỏ nhất
document.write("Giá trị nhỏ nhất: " + Math.min(1,2,3,4,5,66,74,23) + "<br>")
//lũy thừa, số mũ
document.write(Math.pow(2,2) + "<br>");
// căn bậc 2
document.write(Math.sqrt(64));
// làm tròn số
var so14 = 6.78;
var so15 = 5.43;
document.write("Làm tròn dùng round:" + Math.round(so14) + "<br>");
document.write("Làm tròn dùng round:" + Math.round(so15) + "<br>");
document.write("Làm tròn dùng ceil:" + Math.ceil(so14) + "<br>");
document.write("Làm tròn dùng ceil:" + Math.ceil(so15) + "<br>");
document.write("Làm tròn dùng floor:" + Math.floor(so14) + "<br>");
document.write("Làm tròn dùng floor:" + Math.floor(so15) + "<br>");
document.write("Làm tròn dùng trunc:" + Math.trunc(so14) + "<br>");
document.write("Làm tròn dùng trunc:" + Math.trunc(so15) + "<br>");

//tạo số ngẫu nhiên 
var so16 = Math.random();
var so17 = Math.floor(so16*100);
document.write(so17);
//1. Câu lệnh rẽ nhánh if else
//if
// var sotunhien = 7;
// if(sotunhien%2==0){
//     document.write("Đây là số chẵn");
// }
// else{
//     document.write("Đây là số lẻ");
// }

// if else if

// var diemTB = 8;
// var tongket;
// if(diemTB>=8){
//     tongket="Học sinh giỏi";
// }
// else if(diemTB<8&&diemTB>=5){
//     tongket="Học sinh khá";
// }
// else{
//     tongket="Học sinh yếu";
// }
// document.write(tongket);

//Toán tử 3 ngôi
// var diemTB = 4;
// if(diemTB >= 5){
//     var tongket ="Pass";
// }
// else{
//     var tongket ="Fail";
// }
// var tongket = diemTB >= 5 ? "Pass":"Fail";
// document.write(tongket);

// //Switch - Case
// var dapan = prompt("Mời bạn nhập đáp án:");
// switch(dapan){
//     case "a":
//         document.write("Bạn vừa gõ phím a");
//         break;
//     case "b":
//         document.write("Bạn vừa gõ phím b");
//         break;
//     case "c":
//         document.write("Bạn vừa gõ phím c");
//         break;
//     default:
//         document.write("Bạn chọn sai định dạng");
// }

// Vòng lặp while
// var i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
//Vòng lặp do while
// do{
//     console.log(i);
//     i++;
// }while(i<0)

//Vòng lặp for
// for(var i = 0; i < 10; i++){
//     console.log(i);
// }

// Mảng
// arr1 = ["phần tử 1","phần tử 2","phần tử 3","phần tử 4","phần tử 5"];
// var dodaimang = arr1.length;
// for(var i=0;i<5;i++){
//     console.log(arr1[i]);
// }

// for(phantu of arr1){
//     console.log(phantu);
// }

//Break và Continue
// for(var i = 0; i < 10; i++){
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }

// for(var i = 0; i < 10; i++){
//         if(i==5){
//             continue;
//         }
//         console.log(i);
//     }

//Hàm tự định nghĩa 
// Hàm nhập và hiển thị tên
// function hienthiten(){
//     var x = prompt("Mời bạn nhập họ tên:");
//     document.write(x);
// }
// // hienthiten();

// //Hàm tính tổng 2 số
// function tinhcong2so(a,b){
//     var tong = a+b;
//     document.write(tong);
// }
// // tinhcong2so(3,5);

// //Hàm trả về giá trị
// function tinhcong2so(a,b){
//     var hieu = a-b;
//     document.write(hieu);
// }
// // tinhcong2so(3,6);

// function tinhhieu2so(a,b){
//     var hieu = a-b;
//     return hieu;
// }
// document.write(tinhhieu2so(6,3));

// // Hàm confirm
// var xacnhan = confirm("Bạn có muốn xóa file không?");
// if(xacnhan==true){
//     document.write("Đã xóa thành công");
// }else{
//     document.write("File của bạn vẫn tồn tại");
// }

//Biến local và biến global
// //Biến local(Biến cục bộ)
// function bienglobal(){
//     var bienlocal1 = "Đây là biến local";
//     console.log(bienlocal1);
// }
// // console.log(bienlocal1);
// bienlocal1();

//Biến global
// var bienglobal = "Đây là biến global";
// function hamglobal(){
//     console.log(bienglobal);
// }
// console.log(bienglobal);
// hamglobal();
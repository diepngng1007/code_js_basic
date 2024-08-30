// // 1. Khai báo Object
 
// //Cách 1:
// var dog1 = {};
// dog1.ten = "Tên chó 1";
// dog1.cannang = 2.5;
// dog1.mausac = "Màu đen";
// dog1.tuoi = 3;
// dog1.sua = function (){
//     return "Gâu Gâu";
// };
// //Cách 2:
// var dog2 = {
//     ten : "Tên chó 2",
//     cannang : 3.5,
//     mausac : "Màu vàng",
//     tuoi : 4,
//     sua : function (){
//         return "Gâu Gâu";
//     },
//     lamtoan: function (x,y){
//         return x+y;
//     }
// };
// //Hiện thị giá trị Object (Đối tượng)
// //Cách 1:
// document.write("Tên chó 1: " + dog1.ten + "<br>");
// document.write("Màu chó 1: " + dog1.mausac + "<br>");
// document.write("Chó sủa 1: " + dog1.sua() + "<br>");
// //Cách 2:
// document.write("Cân nặng chó 2: " + dog2["cannang"] + "<br>");
// document.write("Tuổi chó 2: " + dog2["tuoi"] + "<br>");
// document.write("Chó 2 làm toán: 1 + 2 = " + dog2.lamtoan(1,2) + "<br>");

// // Thay đổi giá trị của Object
// dog2.mausac = "Màu trắng";
// document.write("Màu chó 2: " + dog2.mausac + "<br>");


// Khai báo Class
//Cách 1:
// dog2.mausac = "Màu trắng";
// document.write("Màu chó 2: " + dog2.mausac + "<br>");

// 2. Class
//Khởi tạo Class
// function Dog(ten1,tuoi1,mausac,cannang,thucan){
//     this.ten = ten1;
//     this.tuoi = tuoi1;
//     this.mausac = mausac;
//     this.cannang = cannang;
//     this.thucan = thucan;
//     this.sua = function(){
//         return "Gâu gâu";
//     };
//     this.lamtoan = function(x,y){
//         return x + y;
//     }
// }
// //Khởi tạo Object
// //Cách 1:
// var dog10 = new Dog("con chó 10",2,"Màu đen",2.5,["Thịt","Xương","Cá"]);
// //Cách 2:
// Dog[11] = new Dog("Con chó 11",3,"Màu vàng",3.5,["Thịt","Xương","Cá"]);
// Dog["Chó 12"] = new Dog("Con chó 12",3.5,"Màu xám",4.5,["Thịt","Xương","Cá"]);
// //Hiển thị:
// document.write("Tên chó 10:" + dog10.ten + "<br>");
// document.write("Màu chó: " + Dog[11].mausac + "<br>");
// document.write("Chó 12 sủa: " + Dog["Chó 12"].sua() + "<br>");
// document.write("Thức ăn của chó 12: " + Dog["Chó 12"].thucan[1] + "<br>");

// //Vòng lặp hiển thị các thuộc tính của Object
// for(key in Dog){
//     console.log(Dog[key].ten);
//     console.log(Dog[key].tuoi);
// }


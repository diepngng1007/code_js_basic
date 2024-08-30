var weight = prompt("Mời bạn nhập cân nặng:");
var height = prompt("Mời bạn nhập chiều cao:");
var BMI = (weight)/((height*height))
document.write(BMI);
if(BMI < 18.5){
    alert("Thiếu cân");
}
else if(BMI >= 18.5 && BMI < 25 ){
    alert("Bình thường");
}
else if(BMI >= 25 && BMI < 30 ){
    alert("Thừa cân");
}
else{
    alert("Béo phì");
}

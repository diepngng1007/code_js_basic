var out = new Image();
out.src = "./img/0.webp";
var over = new Image();
over.src = "./img/1.webp";
function hieuung(){
    var anh = document.getElementById("anh");
    anh.src = over.src;
}
function xoaHieuUng(){
    var anh = document.getElementById("anh");
    anh.src = out.src;
}
var image = [];
for(let i = 0; i < 4; i++){
    image[i] = new Image();
    image[i].src = "./img/" + i + ".webp";
}
var index = 0;
function first(){
    index = 0;
    var anh = document.getElementById("anh");
    anh.src = image[index].src;
}
function last(){
    index = image.length - 1;
    var anh = document.getElementById("anh");
    anh.src = image[index].src;
   
}
function next(){
    index++;
    if(index >= image.length){
        index = 0;
    }
    var anh = document.getElementById("anh");
    anh.src = image[index].src;
}
function prev(){
    index--;
    if(index < 0){
        index = image.length - 1;
    }
    var anh = document.getElementById("anh");
    anh.src = image[index].src;
}

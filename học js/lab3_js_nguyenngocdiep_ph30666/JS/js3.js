var a , b, o;
function lam_lai(){
    a = null;
    b = null;
    o = null;
}
function toan_tu(d){
    o = d;
}
function toan_hang(num){
    if(o){
        a = num;
    }else{
        b = num;
    }
}
function thuc_hien(){
    switch(o){

        case '+':
        var c = a + b;
        alert("Tổng=  " + c);
        break;

        case '-':
        var c = a - b;
        alert("Hiệu=  " + c);
        break;

        case 'x':
        var c = a * b;
        alert("Nhân=  "  + c);
        break;

        case '/':
        var c = a / b;
        alert("Chia=  " + c);
        break;

        default:
            alert(o + 'không phải toán tử');
    }
    lam_lai();
}



var a = parseInt(prompt("Toán hạng a: "));
var b = parseInt(prompt("Toán hạng b: "));
var o = prompt("Toán tử: ");
switch(o){
    case '+':
        var kq = a + b;
        alert("Tổng là: " + kq);
        break;
    case '-':
        var kq = a - b;
        alert("Hiệu là: " + kq);
        break;
    case '*':
        var kq = a * b;
        alert("Nhân là: " + kq);
        break;
    case '/':
        var kq = a / b;
        alert("Chia là: " + kq);
        break;
    default:
        alert(o + "Không phải là toán tử");
        break;
}
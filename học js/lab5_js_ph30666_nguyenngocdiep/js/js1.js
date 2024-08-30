function display(){
    const priceLbl = document.getElementById('pro');
    const gia = document.getElementById('gia');
    const qtyInput = document.getElementById('qty');

    const price = priceLbl.getAttribute('data-price'); //get.. là nhận gtri của pro
    
    const qty = qtyInput.value; //lấy gtri của qty 

    const nameSpan = document.getElementById('name');
    const amountSpan = document.getElementById('amount');

    gia.innerText = price;
    nameSpan.innerText = 'Iphone 9';
    amountSpan.innerText = '$' + price * qty;
}
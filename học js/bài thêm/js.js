const output = document.querySelector('.output');

function opt(button){
    const Yes = document.createElement('button');
    const No = document.createElement('button');
    const game = {
        timer : 0,
        start: null,
    };
    Yes.classList.add('yes1'); 
    No.classList.add('no1');

    No.setAttribute('onclick','No(this)');

    output.append(Yes);
    output.append(No);

    Yes.textContent = 'Yes';
    No.textContent = 'No';

    function Crush(){
        Yes.style.left = random(450) + 'px';
        Yes.style.top = random(450) + 'px';
    }
    Yes.addEventListener('mouseover', function(){
        Yes.timer = setTimeout(Crush,random(100));
        
    });
    
}opt();
function random(max){
    return Math.floor(Math.random() * max);
}
function No(){
    var anhDiv = document.getElementById('anh');
    var anhDiv1 = document.getElementById('anh1');

    anhDiv.innerHTML = "<img src = 'meo1.jpg'>";
    anhDiv1.innerHTML = "<img src = 'meo2.jpg'>";
    
    window.location = "https://www.facebook.com/profile.php?id=100070261354948";
    alert("Mình cũng thích cậu lắm =))");
    
}



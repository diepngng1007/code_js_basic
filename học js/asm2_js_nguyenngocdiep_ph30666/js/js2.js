
var btn = document.querySelectorAll('button');

        btn.forEach(function(button,index){
            button.addEventListener('click',function(event){
                var btnitem = event.target
                var product = btnitem.parentElement
                var productimg = product.querySelector('img').src
                var productname= product.querySelector('h1').innerText
                var productprice = product.querySelector('span').innerText
                console.log(productname)
                console.log(productimg)
                console.log(productprice)
                addCard(productname,productimg,productprice)
               

            })
        })
        function addCard(productname,productimg,productprice){
            
            var add = document.createElement('tr')
            var carditem = document.querySelectorAll('tbody tr')
            
            for (var i = 0; i<carditem.length;i++){
                 var productT = document.querySelectorAll(".title")
                 if(productT[i].innerHTML == productname){
                    alert('san pham cua ban da co')
                    return
                 }
            }
            
            var tr = `<tr>
                        <td><img style="display: flex;"align-items: center; width="100px" height="100px"  src="${productimg}" alt=""><span class="title">${productname}</span></td>
                        <td><input type="number" value="1" min="0"></td>
                        <td><span class='ten'>${productprice}</span><sup>vnd</sup></td>
                        <td><button class="delete">Xóa</button></td>
                       </tr>`
                       add.innerHTML = tr
            var card = document.querySelector('tbody')
            // console.log(card)
            card.append(add)
            money()
            xoa()
           
        }
       
        
        function money(){
            var carditem = document.querySelectorAll('tbody tr')
            
            var moneyc = 0
            for (var i = 0; i<carditem.length;i++){
                var input = carditem[i].querySelector('input').value
                console.log(input)
                var price = carditem[i].querySelector('.ten').innerHTML
                
                console.log(price)
                
              var  moneya = input * price*1000
                
                moneyc = moneyc + moneya
                console.log(moneyc)
                
            }
            var tinhtien = document.querySelector('.tinhtien span')
            tinhtien.innerHTML = String(moneyc.toLocaleString('de-DE'))
            inputsl()
        }
function xoa(){
    var carditem = document.querySelectorAll('tbody tr') 
        
            for (var i = 0; i<carditem.length;i++){
                var productT = document.querySelectorAll(".delete")
                console.log(productT)
                productT[i].addEventListener('click',function(event){
                   var carddl = event.target
                   var cardi = carddl.parentElement.parentElement
                   cardi.remove()
                   money()
                }
                   
                )}
        }
        
        
    
              
        
    
           
        
        function inputsl(){
            var carditem = document.querySelectorAll('tbody tr')
            for (var i = 0; i<carditem.length;i++){
                 var inputT = carditem[i].querySelector("input")
                 console.log(inputT)
                 inputT.addEventListener('change',function(){
                    money();
                 })
                    
                
                 }
                  
            }
            
            const cartbtn = document.querySelector('.dong')
             document.querySelector('.cart')
            console.log(cartbtn)
            const cartshow = document.querySelector(".giohang")
            console.log(cartshow)
            cartshow.addEventListener('click',function(){
               document.querySelector('.card').style.right = '0'
            })  
            cartbtn.addEventListener('click',function(){
                document.querySelector('.card').style.right = '-100%'
            })    
            
            var countDownDate = new Date("Dec 5, 2022 15:59:59").getTime();


            var x = setInterval(function() {
            
              
              var now = new Date().getTime();
            
              
              var distance = countDownDate - now;
            
              
              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
              
              document.getElementById("demo").innerHTML = 'Khuyến Mãi Kết Thúc Sau: ' + days + 'Ngày ' + hours + "Giờ "
              + minutes + "Phút " + seconds + "Giây ";
              
            
              
              if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "Het Khuyen Mai";
              }
            }, 1000);
            
            
            // function gogo(){
            //     var goo = document.getElementById('body')
            //     for(var i = 0; i< goo.length; i++){
            //         if(goo[i].length <= 0){
            //             alert('gio hang trong')
            //             console.log(i)
            //         }
            //     }
                
            // }
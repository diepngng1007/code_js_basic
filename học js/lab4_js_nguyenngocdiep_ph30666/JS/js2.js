var sv = new Object();
        var hocLuc;
        var hienThi;
        
         
        sv.HoTen = prompt('nhap ho va ten');
        sv.dtb = prompt('nhap diem trung binh')
        sv.hienThi = function(){
            if(this.dtb >= 5){
            this.hocLuc = 'thằng này khá , lên lớp'
           }
           else{
            this.hocLuc = 'học ngu quá ở lại'
           }
           document.write('<h3>Họ và tên: '+this.HoTen+'</h3>'); 
           document.write('<h3>Điểm TB: '+this.dtb+'</h3>'); 
           document.write('<h3>Học lực: '+this.hocLuc+'</h3>');
        }
        
    


    
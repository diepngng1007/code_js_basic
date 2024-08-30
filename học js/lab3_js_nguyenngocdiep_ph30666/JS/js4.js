var chon;
var c;
var may = ['keo','bua','bao'];
chon = may[Math.floor(Math.random() * 3)];
document.write(chon);
function getValue(x){
   c = x;
   if(x == 0){
    if(chon == 'keo'){
        document.write("Hòa");
    }
    else if(chon == 'bua'){
        document.write("Máy Thắng");
    }
    else if(chon == 'bao'){
        document.write("Bạn Thắng");
    } 
   }
   if(x == 1){
    if(chon == 'bua'){
        document.write("Hòa");
    }
    else if(chon == 'keo'){
        document.write("Bạn Thắng");
    }
    else if(chon == 'bao'){
        document.write("Máy Thắng");
    }
   }
   if(x == 2){
    if(chon == 'bao'){
        document.write("Hòa");
    }
    else if(chon == 'keo'){
        document.write("Máy Thắng");
    }
    else if(chon == 'bua'){
        document.write("Bạn Thắng");
    }
   }
}

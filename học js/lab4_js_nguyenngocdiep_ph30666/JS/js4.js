var wd;
function mo(){
    //mở trang ap trong tab mới
    // user agent 
    wd = window.open("https://dantri.com.vn/");
}
function dong(){
    if(wd.closed == false){ //nếu trang web chưa đóng
        wd.close(); //đóng trang web
    }
}
function kiemtra(){
    if(wd.closed == false){
        alert("chua dong trang web");
    }
    else{
        alert("da dong trang web"); 
    }
}
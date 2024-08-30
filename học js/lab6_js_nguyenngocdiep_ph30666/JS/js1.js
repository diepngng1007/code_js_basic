const menus = document.getElementsByClassName("title");

for(var i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", function (){
        this.classList.toggle("active");
        var el = this.nextElementSibling;
        if(el.style.display === "block"){
            el.style.display = "none";
        }else{
            el.style.display = "block";
        }
    });
}
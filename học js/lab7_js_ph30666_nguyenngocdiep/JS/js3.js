function valForm(){
    var p = event.target.children;
    if(p.firstName.value == ""){
        message("Need a first name!!");
        return false;
    }
    if(p.lastName.value == ""){
        message("Need a last name!!");
        return false;
    }
    if(p.age.value == ""){
        message("Need an age!!");
        return false;
    }
    return true;
}
function message(m){
    document.getElementById("wrapper").innerHTML = m;

}
let q = window.location.search;
let params = new URLSearchParams(q);
for (let p of params){
    console.log(p);
    alert(p);
}
console.log(name);

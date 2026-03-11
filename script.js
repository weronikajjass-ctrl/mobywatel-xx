function login(){

let pin = document.getElementById("pin").value;

if(pin==="1234"){

document.getElementById("login").classList.add("hidden");
document.getElementById("app").classList.remove("hidden");

}else{

alert("Zły PIN");

}

}

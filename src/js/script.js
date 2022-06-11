function captcha(){
    var oneZ = "0123456789abcdefghijklmnopqrstuvwxyz";
    var userPassword = "";
    
    for(var i = 0 ; i < 15 ; i++){
    userPassword +=oneZ.charAt(Math.random() * 36);
    //userPassword = userPassword + oneZ.charAt(Math.random() * 36);
    }
    document.getElementById("userPassword").innerHTML = userPassword
}

let $ = document;
let userName = $.getElementById("userName");
let userPassword = $.getElementById("userPassword");
let userNameError = $.getElementById("userNameError");
let userPasswordError = $.getElementById("userPasswordError");

function userNameFunc() {
    if(userName.value.length < 8){
        userNameError.innerHTML = "Your Username must be at least 8 characters long"
    }
    else{
        userNameError.innerHTML = " "
    }
}

function userPasswordFunc() {
    if(userPassword.value.length < 8){
        userPasswordError.innerHTML = "Your Password must be at least 8 characters long"
    }
    else{
        userPasswordError.innerHTML = " "
    }
}
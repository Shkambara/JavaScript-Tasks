function validateEmail(){
    var email = document.getElementById("Email").value;
    var testStr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(testStr.test(email)){
        document.getElementById("validEmail").innerHTML = "Email is valid";
        return true;
    }else{
        document.getElementById("validEmail").innerHTML = "Email is invalid";
        return false;
    }
}

function validateAge(){
    var x = document.getElementById("Age").value;
    if(x > 18){
        document.getElementById("validAge").innerHTML = "Age is okay";
        return true;
    }else{
        document.getElementById("validAge").innerHTML = "You are underaged";
        return false;
    }
}
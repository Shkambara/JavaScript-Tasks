function toCelcium(){
    var x = document.getElementById("Num").value;
    var celc = (x - 32) * 5/9;
    document.getElementById("result").innerHTML = "Value " + celc + "C";
    return celc;
}

function toFerenheit() {
    var x = document.getElementById("Num").value;
    var fer = (x * (9/5)) + 32;
    document.getElementById("result").innerHTML = "Value " + fer + "F";
    return fer;
}
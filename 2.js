function addParagraph() {
    var par = document.createElement("p");
    var txtNode = document.createTextNode("This is a new paragraph");
    par.appendChild(txtNode);

    var element = document.getElementById("div1");
    element.appendChild(par);
    
}
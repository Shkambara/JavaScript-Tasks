function addRow() {
    var txt = document.getElementById("txtArea").value;
    if (!(txt === "")) {
        var x = document.getElementById("myTable");
        var row = x.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = txt;
    }
}
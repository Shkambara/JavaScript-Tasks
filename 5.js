class Student {
    constructor(imie, nazwisko, nrIndeks, oceny = []) {
        this.imie = imie,
            this.nazwisko = nazwisko,
            this.nrIndeks = nrIndeks,
            this.oceny = oceny,
            this.dodajOcene = function () {
                if (document.getElementById("ocenaInput").value != null || document.getElementById("ocenaInput").value == "") {
                    var ocena = document.getElementById("ocenaInput").value;
                    if (ocena < 2 || ocena > 5 || ocena == null || ocena == "") {
                        alert("forbidden symbol");
                    } else {
                        oceny.push(ocena);
                    }
                    info();
                }
            }
    }
}

var students = [];

function info() {
    var sum = 0;
    for (var i = 0; i < students[0].oceny.length; i++) {
        sum += students[0].oceny[i] * 1;
    }
    sum = sum / students[0].oceny.length;
    if (document.getElementById("infoSTR") == null) {
        var par = document.createElement("p");
        par.id = "infoSTR";
        var txtNode = document.createTextNode(students[0].imie + " " + students[0].nazwisko + " " + students[0].nrIndeks + " Oceny: " + students[0].oceny + ". Średnia ocena - " + sum);
        par.appendChild(txtNode);
        var element = document.getElementById("info");
        element.appendChild(par);
    } else {
        document.getElementById("infoSTR").innerHTML = students[0].imie + " " + students[0].nazwisko + " " + students[0].nrIndeks + " Oceny: " + students[0].oceny + ". Średnia ocena - " + sum;

    }

}


function showAdd() {

    var par = document.createElement("p");
    var txtNode = document.createTextNode("Adding Student");
    par.appendChild(txtNode);

    var lab = document.createElement("label");
    var txtLab = document.createTextNode("Imie");
    lab.appendChild(txtLab);
    var inp = document.createElement("input");
    inp.id = "name";

    var par2 = document.createElement("p");
    var txtNode2 = document.createTextNode("");
    par2.appendChild(txtNode2);

    var lab2 = document.createElement("label");
    var txtLab2 = document.createTextNode("Nazwisko");
    lab2.appendChild(txtLab2);
    var inp2 = document.createElement("input");
    inp2.id = "surname";

    var par3 = document.createElement("p");
    var txtNode3 = document.createTextNode("");
    par3.appendChild(txtNode3);

    var lab3 = document.createElement("label");
    var txtLab3 = document.createTextNode("ID");
    lab3.appendChild(txtLab3);
    var inp3 = document.createElement("input");
    inp3.id = "id";

    var par4 = document.createElement("p");
    var txtNode4 = document.createTextNode("");
    par4.appendChild(txtNode4);

    var button = document.createElement('button');
    button.innerHTML = 'Add Student';
    button.onclick = function add() {
        var imie = document.getElementById("name").value;
        var nazwisko = document.getElementById("surname").value;
        var id = document.getElementById("id").value;
        console.log(inp3.value.length);
        console.log(1);
        if (imie == null || imie.length <= 0, nazwisko == null || nazwisko.length <= 0, id == null || id.length <= 0) {
            alert("please enter all fields");
        } else {
            var student = new Student(imie, nazwisko, id);
            students.push(student);
            info();

            var elem = document.getElementById('addInfo');
            elem.parentNode.removeChild(elem);

            var edit = document.createElement("div")
            edit.id = "edit";
            var editButton = document.createElement("button");
            editButton.id = "editButton";
            editButton.onclick = editStudent();
            var ocena = document.createElement("div");
            ocena.id = "ocena";
            var addOcenaButton = document.createElement("button");
            addOcenaButton.id = "addOcenaButton";
            var ocenaInput = document.createElement("input");
            ocenaInput.id = "ocenaInput";
            addOcenaButton.innerHTML = "dodaj Ocene";
            var parOcena = document.createElement("p");
            var txtNodeOcena = document.createTextNode("");
            parOcena.appendChild(txtNodeOcena);
            ocena.appendChild(ocenaInput);
            ocena.appendChild(parOcena);
            ocena.appendChild(addOcenaButton);
            var body = document.getElementById("body");
            addOcenaButton.onclick = student.dodajOcene;
            body.appendChild(edit);
            body.appendChild(ocena);

            return student;
        }
    };





    var element2 = document.getElementById("addInfo");
    element2.appendChild(par);
    element2.appendChild(lab);
    element2.appendChild(inp);
    element2.appendChild(par2);
    element2.appendChild(lab2);
    element2.appendChild(inp2);
    element2.appendChild(par3);
    element2.appendChild(lab3);
    element2.appendChild(inp3);
    element2.appendChild(par4);
    element2.appendChild(button);

    var elem = document.getElementById('add');
    elem.parentNode.removeChild(elem);
}
function editStudent() {
    var par = document.createElement("p");
    var txtNode = document.createTextNode("Editing Student");
    par.appendChild(txtNode);

    var lab = document.createElement("label");
    var txtLab = document.createTextNode("Imie");
    lab.appendChild(txtLab);
    var inp = document.createElement("input");
    inp.id = "name";

    var par2 = document.createElement("p");
    var txtNode2 = document.createTextNode("");
    par2.appendChild(txtNode2);

    var lab2 = document.createElement("label");
    var txtLab2 = document.createTextNode("Nazwisko");
    lab2.appendChild(txtLab2);
    var inp2 = document.createElement("input");
    inp2.id = "surname";

    var par3 = document.createElement("p");
    var txtNode3 = document.createTextNode("");
    par3.appendChild(txtNode3);

    var lab3 = document.createElement("label");
    var txtLab3 = document.createTextNode("ID");
    lab3.appendChild(txtLab3);
    var inp3 = document.createElement("input");
    inp3.id = "id";

    var par4 = document.createElement("p");
    var txtNode4 = document.createTextNode("");
    par4.appendChild(txtNode4);

    var button = document.createElement('button');
    button.innerHTML = 'Edit';
    button.onclick = function add() {
        var imie = document.getElementById('name').value;
        var nazwisko = document.getElementById('surname').value;
        var id = document.getElementById('id').value;

        if (!(imie == null || imie == "")) students[0].imie = imie;
        if (!(nazwisko == null || nazwisko == "")) students[0].nazwisko = nazwisko;
        if (!(id == null || id == "")) students[0].nrIndeks = id;
        info(students[0]);


        return students[0];
    };


    var element2 = document.getElementById("editInfo");
    if (element2 != null) {
        element2.appendChild(par);
        element2.appendChild(lab);
        element2.appendChild(inp);
        element2.appendChild(par2);
        element2.appendChild(lab2);
        element2.appendChild(inp2);
        element2.appendChild(par3);
        element2.appendChild(lab3);
        element2.appendChild(inp3);
        element2.appendChild(par4);
        element2.appendChild(button);
    }

    return 1;
}

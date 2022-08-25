var url = "http://www.menuscolastico.it/mandamenu.php"
var utente = {
    nome: 'Andrea',
    cognome: 'Rossi',
    classe: '3',
    sezione: 'A',
    restrizioni: ['vegetariano', 'celiaco']
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function chiediMenu(D) { // D is date
    var datiStringa = httpGet(url + "?date=" + D.format("YYYYMMDD"));
    var dati = JSON.parse(datiStringa);
    var menuRistretto = restringiMenu(utente.restrizioni, dati.menu);
    mostraMenu(menuRistretto);
}

function restringiMenu(restrizioni, menu) {
    for (var i in menu) { // first course,...
        var categoria = menu[i];
        for (var j = 0; j < categoria.length; j++) {
            var ricetta = categoria[j];
            for (var k = 0; k < ricetta.ingredienti.length; k++) {
                var ingrediente = ricetta.ingredienti[k];
                for (var l = 0; l < restrizioni.length; l++) {
                    var restrizione = restrizioni[l];
                    if (!puoMangiare(restrizione, ingrediente)) {
                        remove(categoria, j);
                    }
                }
            }
        }
    }
    return menu;
}

function mostraMenu(menu) {
    var html = "";
    for (var i in menu) { // first course,...
        html += "<div class='menu'><h2>" + i + "</h2><select>";
        for (var j = 0; j < menu[i].length; j++) {
            html += "<option>" + menu[i][j].nome;
            html += "(" + menu[i][j].ingrediente.join() + ")"; // join creates and returns a new string by concatenating all of the elements in an array
            html += "</option>";
        }
        html += "</select>";
    }
    html += "</div><button onclick='spedisciMenu()'>Spedisci</button>";
    document.getElementById("formMenu").innerHTML = html; // editing DOM
}

function spedisciMenu() {
    var formData = $("#formMenu").getAllData(); // not implemented - described
    $.ajax({
        url: "http://www.menuscolastico.it/mandamenu",
        method: "POST",
        data: formData,
        success: function (datiStringa, status, richiesta) {
            alert("Indicazioni ricevute correttamente")
        },
        error: function (err) {
            alert("C'e' stato un errore. Per cortesia riprova")
        }
    })
}
function populateVinyls(vinyls) {
    var res = document.getElementById("results");
    for (var i = 0; i < vinyls.length; i++) {
        results += `<article>
        <img src="${vinyls[i].img}">
        <p>Titolo: ${vinyls[i].title}</p>
        <p>Autore: ${vinyls[i].author}</p>
        <p>Year: ${vinyls[i].year}</p>
        <p>Copies: ${vinyls[i].copies}</p>
        <button type="submit">Aggiungi al carrello</button>
        </article>`;
    }
}

function getWorks(work) {
    fetch(
        `https://discofreak.com/work=${work}`,
        { method: "GET" }
    )
        .then((response) => {
            if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
            return response.json()
        })
        .then((json) => {
            populateWorks(json);
        })
        .error((error) => {
            throw new Error(error);
        })
}

function buyRecord(vinyl) {
    fetch(
        `https://discofreak.com/vinyl=${vinyl}`,
        { method: "POST" }
    )

        .then((response) => {
            if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
            return response.json();
        })
        .then((json) => {
            alert("Vinile acquistato con successo!");
        })
        .catch((error) => {
            throw new Error(error);
        })
}
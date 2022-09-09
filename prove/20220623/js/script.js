function populateShows(shows) {
    for (let i = 0; i < shows.length; ++i)
        document.getElementById("show").innerHTML +=
            `<article>
    Artista: <span id="artist${i}">${shows[i].artist}</span><br />
    Spettacolo: <span id="name${i}">${shows[i].name}</span><br />
    Cast: <span id="cast${i}">${shows[i].cast}</span><br />
    </article>`;
}

function populateEvents(events) {
    for (var i = 0; i < events.length; ++i) {
        document.getElementById("event") +=
            `<article>
            Data: <span id="date${i}">${events[i].date}</span><br />
            Luogo: <span id="location${events[i].location}"</span><br>           
            </article>`;
    }
}

function populateSeats(seats) {
    var body = document.getElementById('seats');
    var tbl = document.createElement('table');
    var tbdy = document.createElement('tbody');
    // head
    var tr = document.createElement('tr');
    for (var cell of Object.keys(val[0])) {
        var td = document.createElement('th');
        td.appendChild(document.createTextNode(cell))
        tr.appendChild(td)
    }
    tbdy.appendChild(tr);
    // body
    for (var row of val) {
        var tr = document.createElement('tr');
        for (var cell of Object.values(row)) {
            var td = document.createElement('td');
            td.innerhtml = `<button id="seat-${i}-${j}">${cell}</button>`;
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
}

// GETS

function getShows(from, to) {
    fetch(
        `https://www.site.com/listing?from=${from}&to=${to}`,
        { method: "GET" }
    )
        .then((response) => {
            if (!response.ok) throw new Error(`Errore HTTP ${response.status}.`);
            return response.json();
        })
        .then((json) => {
            populateShows(json);
        })
        .catch((error) => {
            throw new Error(error);
        });
}

function getEvents(show) {
    fetch(
        `https://www.site.com/show?id=${show}`,
        { method: "GET" }
    )
        .then((response) => {
            if (!response.ok) throw new Error(`Errore HTTP ${response.status}`);
            return response.json();
        })
        .then((json) => {
            populateEvents(json);
        })
        .catch((error) => {
            throw new Error(error);
        })
}

// POSTS

function singleBuy(seat) {
    fetch(
        `https://www.site.com/buy?place=${seat}`,
        { method: "GET" }
    )

        .then((response) => {
            if (!response.ok) throw new Error(`Errore HTTP ${response.status}`);
            return response.json();
        })
        .then((json) => {
            alert("Biglietto acquistato con successo!");
        })
        .catch((error) => {
            throw new Error(error);
        })
}

function multipleBuy(seats) {
    fetch(
        `www.site.com/multipleBuy?places=${seats}`,
        { method: "POST" }
    )
        .then((response) => {
            if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
            return response.json();
        })
        .then((json) => {
            alert("Biglietti acquistati con successo!")
        })
        .catch((error) => {
            throw new Error(error);
        })
}
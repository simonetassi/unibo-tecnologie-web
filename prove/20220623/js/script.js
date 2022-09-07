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

}
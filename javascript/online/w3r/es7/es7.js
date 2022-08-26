function createTable() {
    var row, col, t, r, c;
    row = window.prompt("Insert rows number: ", "0");
    col = window.prompt("Insert columns number: ", "0");
    t = document.getElementById("myTable")
    for (var i = 0; i < row; i++) {
        r = t.insertRow(i);
        for (var j = 0; j < col; j++) {
            c = r.insertCell(j)
            c.innerHTML = "row-" + i + ", col-" + j;
        }
    }
}
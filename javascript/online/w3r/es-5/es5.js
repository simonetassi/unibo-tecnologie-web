function insert_Row() {
    var x = document.getElementById('sampleTable').insertRow(0);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML = "New Cell 1"
    z.innerHTML = "New Cell 2"
}
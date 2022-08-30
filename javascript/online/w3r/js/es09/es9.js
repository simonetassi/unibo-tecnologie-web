function getOptions() {
    var x = document.getElementById("mySelect");
    var l = x.length;
    var txt = "The number of possible selections is " + l + "\n";
    for (var i = 0; i < l; i++) {
        txt = txt + "\n" + x.options[i].text;
    }
    alert(txt);

}
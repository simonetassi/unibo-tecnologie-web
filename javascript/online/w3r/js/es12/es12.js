var bolds;
window.onload = getBolds();

function getBolds() {
    bolds = document.getElementsByTagName("b");
}

function highlight() {
    for (var i = 0; i < bolds.length; i++) {
        bolds[i].style.color = "green";
    }
}

function return_normal() {
    for (var i = 0; i < bolds.length; i++) {
        bolds[i].style.color = "black";
    }
}
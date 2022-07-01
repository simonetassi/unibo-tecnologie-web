function onclick_fn() {
    var inner_html = document.getElementsByTagName("head")[0].innerHTML; // [0] selecting the first <head></head> tag of the document
    var para1 = document.getElementById("para1");
    para1.textContent = inner_html;
}

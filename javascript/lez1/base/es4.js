var get_request = (path) => { // creating path and var request using PROMISE
    return new Promise((success, error) => { // 2 possible outcomes: success or error (of the request)
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status == 200) { // request OK
                    success(JSON.parse(xhr.responseText));
                } else { // request FAILED
                    error(xhr);
                }
            }
        };
    });
};

function tableCreate(val) { // creating table
    var body = document.getElementsByTagName('body')[0]; // get body from DOM
    var tbl = document.createElement('table'); // create table element in DOM
    // setting table
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');

    //head
    var tr = document.createElement('tr');
    for (var cell of Object.keys(val[0])) {
        var td = document.createElement('th');
        td.appendChild(document.createTextNode(cell));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);

    for (var row of val) {
        var tr = document.createElement('tr');
        for (var cell of Object.values(row)) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(cell))
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
}

var onclick_fn = () => {
    const promise = get_request('http://localhost:8080/es4.json')
    promise.then (val =>{
        console.log("asynchronous logging has val:", val);
        tableCreate(val);
    });
};


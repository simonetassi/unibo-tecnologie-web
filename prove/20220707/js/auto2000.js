var myObj = {
    "car": {
        "id": 1,
        "last": false,
        "name": "Fiat X",
        "price": 37.5,
        "photo": "img/500x_1.jpg",
        "optionals": {
            "Allestimento": {
                "type": "radio",
                "items": {
                    "young": {
                        "price": 0
                    },
                    "business": {
                        "price": 28.53,
                        "note": "cerchi in lega, etc."
                    },
                    "cross-country": {
                        "price": 35.88,
                        "note": "fendinebbia, etc."
                    }
                }
            },
            "Navigatore": {
                "type": "radio",
                "items": {
                    "nessuno": {
                        "price": 0
                    },
                    "Garmin mappe Italia": {
                        "price": 18.47
                    },
                    "TomTom mappe Europa": {
                        "price": 23.63
                    }
                }
            },
            "Altro": {
                "type": "checkbox",
                "items": {
                    "Catene da neve": {
                        "price": 9.50,
                        "note": "obbligatorie in inverno"
                    },
                    "Portasci": 12.75,
                    "Portabici": 22.50
                }
            },
            "Seggiolini per bambini": {
                "type": "select",
                "max": 3,
                "price": 26.5,
                "label": "26.50 a seggiolino"
            }
        }
    }
}

function getRental(n) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "www.auto2000.com/cgi-bin/getRentable.php?id=[" + n + "]", false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function isLast(n) {
    var car = getRental(n);
    return car.last;
}

function getPreviousRental() {
    if (n == 1) {
        alert("ERROR - this is the first car");
    } else {
        getRental(n - 1)
    }
}

function getNextRental() {
    if (isLast) {
        alert("ERROR - this is the last car");
    } else {
        getRental(n + 1);
    }

}

function reserve() { }
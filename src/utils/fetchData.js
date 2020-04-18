let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((rosole, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = function(event) {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    callback(null, JSON.parse(xhttp.responseText));
                } else {
                    const erro = new Error(`Error ${url_api}`);
                    return callback(erro, null);
                }
            }
        }
        xhttp.send();
    });
}
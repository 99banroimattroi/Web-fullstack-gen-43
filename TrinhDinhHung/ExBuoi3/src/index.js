const http = require('http');
const fs = require('fs');
const url = require('url');



function onRequest(req, res) {
    const path = url.parse(req.url).pathname;
    if(path == '/') {
        fs.readFile('./home.html', (err, data) => {
            if (err) {
                res.write('Not Found!');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if(path == '/home') {
        fs.readFile('./home.html', (err, data) => {
            if (err) {
                res.write('Not Found!');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if(path == '/header') {
        fs.readFile('./header.html', (err, data) => {
            if (err) {
                res.write('Not Found!');
            } else {
                res.write(data);
            }
            res.end();
        });
    
    } else if(path == '/footer') {
        fs.readFile('./footer.html', (err, data) => {
            if (err) {
                res.write('Not Found!');
            } else {
                res.write(data);
            }
            res.end();
        });

    } else if(path == '/navigator') {
        fs.readFile('./navigator.html', (err, data) => {
            if (err) {
                res.write('Not Found!');
            } else {
                res.write(data);
            }
            res.end();
        });

    } else if(path == '/content') {
        fs.readFile('./content.html', (err, data) => {
            if (err) {
                res.write('Not Found!');
            } else {
                res.write(data);
            }
            res.end();
        });

    }

}
    
http.createServer(onRequest).listen(3000);

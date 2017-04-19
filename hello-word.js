const express = require('express');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 8000;
const app = express();


var cache = fs.readFileSync( __dirname + '/index.html');

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send( cache );
});

app.listen(port, () => {
    console.log(`
        Server is running at http://${hostname}:${port}/ 
        Server hostname ${hostname} is listening on port ${port}!
    `);
});

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('res');
    }
    if(req.url === '/about') {
        res.end('about');
    }
    res.end('<h1>ERROR</h1>')
});

server.listen(5000);
console.log('server started');
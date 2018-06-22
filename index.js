var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {

    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('index.html', (err, data) => {
            response.write(data);
            return response.end();
        });
    } else {
        fs.readFile('404errorpage.jpg', function(err, data) {
            response.write(data);
            return response.end();
        });
    }
});
server.listen(8080);

const http = require('http');


http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Your application is working!! Learn more about Docker at <a href="https://docs.docker.com/">docs</a></h1>'
    + '<img src="https://media2.giphy.com/media/mGK1g88HZRa2FlKGbz/giphy.gif" alt="Chandler and Joey">');
    response.end();
}).listen(8080);

console.log('Server running at http://localhost:8080/');
const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const app = require('./app')

const server = http.createServer(app);

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})
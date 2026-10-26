const http = require("http");

const PORT = 3000;

// Create HTTP server using Node.js built-in http module
const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.end("Hello");
});

server.listen(PORT, () => {
    console.log(`HTTP Server running at http://localhost:${PORT}/`);
});

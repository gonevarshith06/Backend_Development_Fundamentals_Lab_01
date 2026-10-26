const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
});

// 1. GET / - Welcome text
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Lab 1: Node.js and Express Server!");
});

// 2. GET /about - JSON with name, registration number, and section
app.get("/about", (req, res) => {
    res.status(200).json({
        name: "Varshith Gone",
        registrationNumber: "252U1R9167",
        section: "S 26 Gen Ai 2C"
    });
});

// 3. GET /time - Current date and time using new Date()
app.get("/time", (req, res) => {
    const now = new Date();
    res.status(200).json({
        currentTime: now.toString(),
        isoString: now.toISOString()
    });
});

// 4. Catch-all route handler for unknown paths (404)
app.use((req, res) => {
    res.status(404).json({
        status: 404,
        error: "Not Found",
        message: `The requested route '${req.originalUrl}' was not found on this server.`
    });
});

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Express server is running at http://localhost:${PORT}`);
});

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Enable CORS for all origins
app.use(cors());

// GET API: api/greet?name=saif
app.get("/api/greet", (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).json({ error: "Name is required!" });
    }

    res.json({ message: `Hello, ${name}!` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

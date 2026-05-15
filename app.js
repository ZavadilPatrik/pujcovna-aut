const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Autopůjčovna funguje");
});

app.listen(PORT, () => {
    console.log(`Server běží na adrese http://localhost:${PORT}`);
});
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
res.send("Express API is working...");
});

app.get("/about", (req, res) => {
res.send("This is the About page!");
});

app.post("/contact", (req, res) => {
res.send("Contact form submitted!");
});

app.listen(5000, () => {
console.log("Server running on port 5000");
});
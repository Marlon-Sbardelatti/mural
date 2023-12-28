const PORT = 8080;
const express = require('express');
const path = require('path')
const apiRoute = require('./routes/api.js');

const app = express();

app.use("/api", apiRoute)
app.use("/", express.static(path.join(__dirname, "public")))

app.listen(PORT, (req, res) => {
    console.log(`Server running on Port: ${PORT}`)
})


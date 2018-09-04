const express = require("express");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.send(200));

app.listen(port, () => console.log(`Example app listening on port ${port}`));

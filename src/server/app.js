const express = require("express");
const path = require("path");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../../public")));

app.use("/api", router);

router.route("/quotes").get((req, res) => {
  // actually grab data from file and send forward
  res.json({
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    name: "Francis of Assisi"
  });
});

app.get("/", (req, res) => res.send(200));

app.listen(port, () => console.log(`Example app listening on port ${port}`));

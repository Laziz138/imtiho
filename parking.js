const express = require("express");
const router = require("./routes/royxat.route.js");
let app = express();
app.use(express.json());
app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set("views", "./public/views");
app.use("/cars", router);
app.listen(5000);

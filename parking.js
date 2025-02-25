const express = require("express");
const router = require("./routes/royxat.route.js");
let app = express();
app.use(express.json());
app.use("/cars", router);
app.listen(5000);

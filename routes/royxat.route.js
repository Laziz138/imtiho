const express = require("express");
const controller = require("../controller/parking.controller.js");
let router = express.Router();
router.get("/", controller.royxatlar);
router.post("/", controller.addMoshin);
router.put("/:id", controller.updateMoshin);
router.delete("/:id", controller.deleteMoshin);

module.exports = router;

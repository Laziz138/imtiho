const fs = require("fs");
const parkingService = require("../service/parking.server");
let royxatlar = (req, res, next) => {
  parkng = parkingService.parking();
  res.status(200).json({ title: "Moshinlar  ROYXATI", parkng });
};

let addMoshin = (req, res, next) => {
  let body = req.body;
  let park = parkingService.addMoshin(body);
  res.status(200).json({ title: "qoshildi", park });
};
let updateMoshin = (req, res, next) => {
  let moshin = parkingService.parking();

  moshin = moshin.map((item) => {
    if (item.id == +req.params.id) {
      Object.assign(item, req.body);
    }
    return item;
  });
  res.json(moshin);
  fs.writeFileSync("./config/parking.json", JSON.stringify(moshin), "utf-8");
};
let deleteMoshin = (req, res, next) => {
  let park = parkingService.parking();
  const royxat = park.filter((u) => u.id !== +req.params.id);

  fs.writeFileSync("./config/parking.json", JSON.stringify(royxat), "utf8");
};
module.exports = { royxatlar, addMoshin, updateMoshin, deleteMoshin };

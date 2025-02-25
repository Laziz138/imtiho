const fs = require("fs");
let parking = () => {
  park = JSON.parse(fs.readFileSync("./config/parking.json", "utf8"));
  return park;
};
let addMoshin = (body) => {
  let user = parking();
  park.push(body);
  fs.writeFileSync("./config/parking.json", JSON.stringify(park), "utf8");
  return park;
};
module.exports = { parking, addMoshin };

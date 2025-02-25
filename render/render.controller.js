let courseService = require("../service/parking.server");
let renderIndex = (req, res, next) => {
  let data = courseService.parking();

  res.render("index", {
    data: data,
    title: "o'quv kurslari bog'chasi",
    join: "Bizga qo'shiling",
  });
};
module.exports = { renderIndex };

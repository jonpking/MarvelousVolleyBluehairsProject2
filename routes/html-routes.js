const path = require("path");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/wishlist", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/wishlist.html"));
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  

  app.get("/data", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/data.html"));
  });

  app.get("/form", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/form.html"));
  });
};

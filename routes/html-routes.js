const path = require("path");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/wishlist", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/wishlist.html"));
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/inventory", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/inventory.html"));
  });
};
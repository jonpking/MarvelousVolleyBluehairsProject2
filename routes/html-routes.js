const path = require("path");

module.exports = function (app) {

<<<<<<< HEAD
  // index route loads login.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // form route loads form.html
  app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form.html"));
  });

  // wishlist route loads wishlist.html
  app.get("/wishlist", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/wishlist.html"));
=======
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/wishlist", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/wishlist.html"));
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
>>>>>>> test
  });
  

<<<<<<< HEAD
    // If no matching route is found default to home
    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/login.html"));
=======
  app.get("/data", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/data.html"));
>>>>>>> test
  });

  app.get("/form", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/form.html"));
  });
};

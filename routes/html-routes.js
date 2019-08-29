// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

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
  });
  

    // If no matching route is found default to home
    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/login.html"));
  });

};
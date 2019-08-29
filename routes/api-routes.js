<<<<<<< HEAD
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies 
// =============================================================

// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: query,
      include: [db.Author]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Author]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
=======
const db = require("../models");

module.exports = function (app) {
  // get all games owned by a single user
  app.get("/api/games", function (req, res) {
    db.Games.findAll({
      where: {
        // user id = person who is logged in ?
      },
      include: [db.Users]
    }).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  // get all games on wishlist of a single user
  app.get("/api/games/wishlist", function (req, res) {
    db.Games.findAll({
      where: {
        wishlisted: true
        // user id = person who is logged in ?
      },
      include: [db.Users]
    }).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  // get a single game owned by a single user (search functionality)
  app.get("/api/games/:id", function (req, res) {
    db.Games.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Users]
    }).then(function (dbGames) {
      res.json(dbGames);
    });
  });
  // not sure if this will work properly or not

  // app.get("/api/games/:page", function (req, res) {
  //   if (req.params.page === wishlist) {
  //     db.Games.findAll({
  //       where: {
  //         wishlisted: true
  //         // user id = person who is logged in ?
  //       },
  //       include: [db.Users]
  //     }).then(function (dbGames) {
  //       res.json(dbGames);
  //     });
  //   }
  //   if (req.params.page === home) {
  //     db.Games.findAll({
  //       where: {
  //         // user id = person who is logged in ?
  //       },
  //       include: [db.Users]
  //     }).then(function (dbGames) {
  //       res.json(dbGames);
  //     });
  //   }
  // });

  app.post("/api/games", function (req, res) {
    db.Games.create(req.body).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  app.delete("/api/games/:id", function (req, res) {
    db.Games.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbGames) {
      res.json(dbGames);
    });
  });
};
>>>>>>> test

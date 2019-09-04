const db = require("../models");

module.exports = function (app) {
  // get all games owned by a single user
  app.get("/api/games", function (req, res) {
    db.Games.findAll({
      where: {
        id: req.user.id
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
        wishlisted: true,
        id: req.user.id
      },
      include: [db.Users]
    }).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  // get a single game owned by a single user (search functionality)
  // app.get("/api/games/:game", function (req, res) {
  //   db.Games.findOne({
  //     where: {
  //       game: req.params.game,
  //       id: req.user.id
  //     },
  //     include: [db.Users]
  //   }).then(function (dbGames) {
  //     res.json(dbGames);
  //   });
  // });

  // not sure if this will work properly or not

  // app.get("/api/games/:page", function (req, res) {
  //   if (req.params.page === "wishlist") {
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
  //   if (req.params.page === "home") {
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
    db.Game.create({
      title: req.body[1],
      image_URL: req.body[0],
      player_min: req.body[3],
      player_max: req.body[4],
      playtime_min: req.body[5],
      playtime_max: req.body[6],
      description: req.body[2],
      on_wishlist: false
    }).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  app.post("/api/games/wishlist", function (req, res) {
    db.Game.create({
      title: req.body[1],
      image_URL: req.body[0],
      player_min: req.body[3],
      player_max: req.body[4],
      playtime_min: req.body[5],
      playtime_max: req.body[6],
      description: req.body[2],
      on_wishlist: true
    }).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  app.delete("/api/games/:game", function (req, res) {
    db.Games.destroy({
      where: {
        game: req.params.game,
        id: req.user.id
      }
    }).then(function (dbGames) {
      res.json(dbGames);
    });
  });
};

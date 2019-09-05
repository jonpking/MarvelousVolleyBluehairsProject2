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

  // post new game to inventory
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

  // post new game to wishlist
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

  // delete specific game from inventory
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

  // delete specific game from wishlist
  app.delete("/api/games/wishlist/:game", function (req, res) {
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

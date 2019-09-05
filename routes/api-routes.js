const db = require("../models");

module.exports = function (app) {

    // get all
    app.get("/", function (req, res) {
      db.Game.findAll({}).then(function(data) {
        const obj = {
          games: data
        };
      console.log(obj)
      res.render("index", obj);
      });
    });

    // get all games 
    app.get("/inventory", function (req, res) {
      db.Game.findAll({}).then(function(data) {
        const obj = {
          games: data
        };
      console.log(obj)
      res.render("inventory", obj);
      });
    });

  // get all games owned by a single user
  app.get("/api/games", function (req, res) {
    db.Game.findAll({
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
    db.Game.findAll({
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


  app.put("/api/games/:id", function(req, res) {
    db.Game.update({
      on_wishlist: req.body.on_wishlist,
    }, {
      where: {
          id: req.params.id
      }
    }).then(function(result){
      console.log(result);
      res.json(result);
    });
  });


  // delete specific game from inventory
  app.delete("/api/games/:id", function (req, res) {
    db.Game.destroy({
      where: {
        // game: req.params.game,
        id: req.params.id
      }
    }).then(function (dbGames) {
      console.log(dbGames);
      res.json(dbGames);
    });
  });

  // delete specific game from wishlist
  app.delete("/api/games/wishlist/:game", function (req, res) {
    db.Game.destroy({
      where: {
        game: req.params.game,
        id: req.user.id
      }
    }).then(function (dbGames) {
      res.json(dbGames);
    });
  });
};

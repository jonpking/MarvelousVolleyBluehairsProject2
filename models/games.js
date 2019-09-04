module.exports = function (sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        image_URL: {
            type: DataTypes.STRING
        },
        player_min: {
            type: DataTypes.INTEGER
        },
        player_max: {
            type: DataTypes.INTEGER
        },
        playtime_min: {
            type: DataTypes.INTEGER
        },
        playtime_max: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        on_wishlist: {
            type: DataTypes.BOOLEAN,
            allowNull: false
            
        }
    });

    Game.associate = function (models) {
        Game.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Game;
};
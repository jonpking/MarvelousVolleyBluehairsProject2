module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        session_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Game, {
            onDelete: "cascade"
        });
    };

    return User;
};

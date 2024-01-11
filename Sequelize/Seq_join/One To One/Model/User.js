module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("users", {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            defaultvalue: "Defult@defult.com"
        },
        gender: DataTypes.STRING
    });
    return User;
};
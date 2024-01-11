module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("users", {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            defaultvalue: "Home@gamil.com"
        },
        gender: DataTypes.STRING
    });
    return User;
}
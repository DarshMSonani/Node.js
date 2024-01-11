module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        name: DataTypes.STRING,
        email: {
            type : DataTypes.STRING,
            defaultvalue : "Home@gmail.com"
        },
        gender : DataTypes.STRING
    });
};
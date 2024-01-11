module.exports = (sequlize, DataTypes) => {

 const User = sequlize.define("users", {
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        defaultvalue: "Defult@defult.com"
    },
    gender: DataTypes.STRING
 });
 return User;
}
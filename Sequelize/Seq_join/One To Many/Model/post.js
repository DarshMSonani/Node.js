module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("posts", {
        name: DataTypes.STRING,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        user_id: DataTypes.STRING
    });
    return Post;
};
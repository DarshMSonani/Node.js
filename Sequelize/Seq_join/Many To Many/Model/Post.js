module.exports = (sequelize, Sequelize) => {

    const Post = sequelize.define("posts", {
        name: Sequelize.STRING,
        title: Sequelize.STRING,
        content: Sequelize.STRING,
        user_id: Sequelize.STRING
    });
    return Post;
};
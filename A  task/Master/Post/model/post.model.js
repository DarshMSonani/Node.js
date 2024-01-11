module.exports = (sequelize, DataTypes) => {

    let Post = sequelize.define("post", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: DataTypes.STRING,
        title: DataTypes.STRING,
        des: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });
    return Post;
}
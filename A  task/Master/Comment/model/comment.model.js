module.exports = (sequelize, DataTypes) => {

    let Comment = sequelize.define("comment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        parent_id: {
            type: DataTypes.INTEGER,
            default: null
        },
        post_id: DataTypes.STRING,
        user_id: DataTypes.STRING,
        comment: DataTypes.STRING
    }, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });
    return Comment
}
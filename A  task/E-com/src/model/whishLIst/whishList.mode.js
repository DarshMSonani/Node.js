export default (sequelize, Sequelize) => {
    const whishList = sequelize.define("whishlists", {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        productId: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
    }, {
        createdAt: "created_at",
        updatedAt: "updated_at"
    })
    return whishList
}
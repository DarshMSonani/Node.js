export default (sequelize, Sequelize) => {
    const cart = sequelize.define("carts", {
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
        quantity: {
            type: Sequelize.BIGINT,
            allowNull: false
        }
    }, {
        createdAt: "created_at",
        updatedAt: "updated_at"
    })
    return cart
}
export default (sequelize, Sequelize) => {
    const order = sequelize.define("order", {
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
        deliveryAddress: {
            type: Sequelize.STRING,
            allowNull: false
        },
        totalAmount: {
            type: Sequelize.DECIMAL,
            allowNull: false
        }
    }, {
        createdAt: "created_at",
        updatedAt: "updated_at"
    })
    return order
}
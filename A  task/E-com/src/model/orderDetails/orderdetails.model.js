export default (sequelize, Sequelize) => {
    const orderDetails = sequelize.define("orderdetails", {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        userId:{
            type: Sequelize.BIGINT,
            allowNull: false
        },
        orderId: {
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
        },
        amount: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        createdAt: "created_at",
        updatedAt: "updated_at"
    });
    return orderDetails
} 
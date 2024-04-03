export default (sequelize, Sequelize) => {
    const sellerProduct = sequelize.define("products", {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        sellerId: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT('long'),
            allowNull: false
        },
        price: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
        discount: {
            type: Sequelize.DECIMAL,
            allowNull: false
        }
    }, {
        createdAt: "created_at",
        updatedAt: "updated_at"
    })
    return sellerProduct
}
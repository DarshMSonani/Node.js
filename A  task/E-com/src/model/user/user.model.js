
export default (sequelize, Sequelize) => {
    const user = sequelize.define("users", {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.ENUM('admin', 'seller', 'user'),
            allowNull: false
        },
        stripeId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdBy: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        createdAt: "created_at",
        updatedAt: "updated_at"
    })
    return user
}
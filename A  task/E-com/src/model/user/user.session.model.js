import { INTEGER } from "sequelize";

export default (sequelize, Sequelize) => {
    const userSession = sequelize.define("userSessions", {
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
        token: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        createdAt: "created_at",
        updatedAt: "updated_at"
    });
    return userSession
}
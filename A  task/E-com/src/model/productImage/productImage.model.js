import config from "../../config/config.js";

export default (sequelize, Sequelize) => {
    const productImage = sequelize.define("productImages", {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        productId: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
            get() {
                const value = this.getDataValue('image');
                return value.startsWith('http://') || value.startsWith('https://') ? value : config.app_base_url + `/productImage/${value}`;
            }
        },
    }, {
        createdAt: "created_at",
        updatedAt: "updated_at"
    });
    return productImage;
}
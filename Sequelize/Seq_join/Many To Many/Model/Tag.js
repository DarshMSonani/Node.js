module.exports = (sequelize, Sequelize) => {
    const Tag = sequelize.define("tags", {
        name: Sequelize.STRING
    },
        {
            createdAt: 'create_at',
            updatedAt: "modified_at",
        }
    );
    return Tag;
};
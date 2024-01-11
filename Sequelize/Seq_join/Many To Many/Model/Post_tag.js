module.exports = (sequelize, Sequelize) => {
    const Post_tag = sequelize.define("post_tags", {
        postId: Sequelize.INTEGER,
        tagId: Sequelize.INTEGER
    },
        {
            timestamps: false
        }
    );
    return Post_tag;
};


// ALTER TABLE posts
// ADD CONSTRAINT fk_posts_user_id
// FOREIGN KEY(user_id)
// REFERENCES users(id);


const PostCategory = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory',{
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false
  });

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'post_id',
      as: 'categories',
      through: PostCategoryTable,
      otherKey: 'category_id',
    })
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'category_id',
      as: 'posts',
      through: PostCategoryTable,
      otherKey: 'post_id',
    })
  }
  return PostCategoryTable;
};

module.exports = PostCategory;
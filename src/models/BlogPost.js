const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: {
      type: DataTypes.DATE,
    },
    updated: {
      type: DataTypes.DATE,
    }
    }, {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false
    })
   
    BlogPostTable.associate = (models) => {
      BlogPostTable.belongsTo(models.User, {
        foreignKey: 'user_id', as: 'user'
      })
    }

    return BlogPostTable;
  };
   
module.exports = BlogPostSchema;
const User = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }, 
    displayName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
  }, {
    tableName: 'users',
    underscored: true,
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, {
      foreignKey: 'user_id', as: 'posts',
    });
  }

  return UserTable;
}

module.exports = User;
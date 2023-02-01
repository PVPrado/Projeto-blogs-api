const Category = (sequelize,DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
    },
    name: {
      type: DataTypes.STRING, 
    }
  });

  return CategoryTable;
};

module.exports = Category;
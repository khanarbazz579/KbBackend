'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

//   var todo = sequelize.define("User", {
//     name: {
//         type: DataTypes.STRING(191),
//         allowNull: false
//     },
//     email : {
//       type: DataTypes.STRING(191),
//       allowNull : true
//     },
//     password :{
//       type: DataTypes.STRING(191),
//       allowNull : true
//     },
//     phone :{
//       type: DataTypes.STRING(191),
//       allowNull : true
//     },
//     password :{
//       type: DataTypes.DATE,
//       allowNull : true
//     },
//     created_at: {
//         type: DataTypes.DATE
//     },
//     updated_at:{
//       type: DataTypes.DATE      
//     }
// },{underscored: true});




  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    created_at:DataTypes.DATE,
    updated_at:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
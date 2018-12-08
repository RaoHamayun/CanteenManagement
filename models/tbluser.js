'use strict';
module.exports = (sequelize, DataTypes) => {
  const TblUser = sequelize.define('TblUser', {
    UserName: DataTypes.STRING,
    Password: DataTypes.STRING,
    IsActive: DataTypes.BOOLEAN,
    RoleId: DataTypes.INTEGER,
    CreateDate: DataTypes.DATEONLY
  }, {});
  TblUser.associate = function(models) {
    // associations can be defined here
  };
  return TblUser;
};
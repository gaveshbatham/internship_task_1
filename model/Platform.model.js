import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Platform = sequelize.define(
    'platforms',
    {
      p_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      no_of_groups: { type: DataTypes.INTEGER, allowNull: false },
    },
    { timestamps: false } 
  );
  
  export default Platform;
  
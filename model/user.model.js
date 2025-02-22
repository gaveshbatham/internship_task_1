import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const User = sequelize.define('users', {
    email: { type: DataTypes.STRING, primaryKey: true },
    password: { type: DataTypes.TEXT, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    mobile_number: { type: DataTypes.STRING(10), allowNull: false },
    campaign_ids: { type: DataTypes.ARRAY(DataTypes.INTEGER) }
}, {
    timestamps: false  
});

export default User;

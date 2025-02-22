import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Niche = sequelize.define('niches', {
    n_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    niche_name: { type: DataTypes.STRING(255), allowNull: false }
}, {
    timestamps: false // Disable timestamps if they are not in your SQL schema
});


export default Niche;

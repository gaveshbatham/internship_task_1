import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Campaign = sequelize.define(
  'campaigns',
  {
    c_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    objective: { type: DataTypes.TEXT, allowNull: false },
    platforms: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
    group_niche: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
    target_by_group: { type: DataTypes.JSONB },  
    location: { type: DataTypes.ARRAY(DataTypes.TEXT) },
    content: { type: DataTypes.TEXT, allowNull: false },
    img_or_vid: { type: DataTypes.BLOB },
    schedule_start: { type: DataTypes.DATE, allowNull: false },
    schedule_end: { type: DataTypes.DATE, allowNull: false },
    members_range: { type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false },
    bid_per_group: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    total_budget: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  },
  { timestamps: false }
);

export default Campaign;

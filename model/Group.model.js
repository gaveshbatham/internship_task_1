import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../db.js";
import Platform from "./platform.model.js";

const Group = sequelize.define(
  'groups',
  {
    g_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    number_of_person: { type: DataTypes.INTEGER, allowNull: false },
    platform_id: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
    niche_ids: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
    bid: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  },
  { timestamps: false }
);
export default Group;

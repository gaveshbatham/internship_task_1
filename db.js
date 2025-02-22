import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Set up the Sequelize instance
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false, // Set to true if you want to see SQL queries
});

(async () => {
  try {
    await sequelize.authenticate();
    const [results] = await sequelize.query("SELECT current_database();");
    console.log("Connected to Database:", results[0].current_database);
    await sequelize.sync({ alter: true }); // Sync database with models
    console.log("Database synchronized.");
  } catch (error) {
    console.error("Database connection error:", error);
  }
})();

// Authenticate connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((error) => console.error("Connection error:", error));

export default sequelize;

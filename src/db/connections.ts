import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({path:'./.env'});

const database: string  = process.env.DATABASE || "test";
const dbUser: string    = process.env.USER || "postgres";
const password: string  = process.env.PASSWORD || "647855aassdd";
const host:string       = process.env.DATABASE_HOST  || 'localhost' 

const db = new Sequelize(database, dbUser, password, {
  host: host,
  dialect: "postgres",
  // logging: false
});

export default db;

import cors from "cors";
import express, { Application } from "express";
import db from "../db/connections";
import router from "../routes/index";

class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 8000;

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      // await db.sync();
      // await db.sync({ force: true });
      console.log("Database online");
      

    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api", router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

export default Server;

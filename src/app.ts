import dotenv from "dotenv";
import Server from "./models/server";

dotenv.config({path:'./.env'});

// const server = new Server();
const server = new Server()

server.listen();

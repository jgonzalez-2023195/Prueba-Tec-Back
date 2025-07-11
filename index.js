import { config } from "dotenv";
import { dbConnection } from "./configs/db.js";
import ExpressServer from "./configs/server.js";

config();
dbConnection();
const server = new ExpressServer();
server.listen();

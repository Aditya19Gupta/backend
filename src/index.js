import connectDb from "./db/index.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env file
connectDb();
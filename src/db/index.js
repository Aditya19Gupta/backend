import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

async function connectDb() {    
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MongoDB connected successfully!", connectInstance.connection);
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}


export default connectDb;



//Basic approach

// import mongoose from "mongoose";
// import express from "express";
// import dotenv from "dotenv";
// import { DB_NAME } from "./constants.js";

// dotenv.config(); // Load .env file

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("✅ MongoDB connected successfully!");

//     app.on("error", (error) => {
//       console.log("❌ Server error:", error);
//     });

//     app.listen(process.env.PORT || 5000, () => {
//       console.log(`🚀 Server started on http://localhost:${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("❌ Error connecting to MongoDB:", error);
//   }
// })();

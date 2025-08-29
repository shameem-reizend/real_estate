import serverless from "serverless-http";
import app from "../app.js"; 
import { connectDB } from "../database/connectDB.js";

// Ensure DB connection is established once
connectDB();

export const handler = serverless(app);

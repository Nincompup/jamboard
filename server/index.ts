import express from "express";
import dotenv from "dotenv";
import cors from "./src/middlewares/cors";
import router from "./src/routes";
import mongoose from "mongoose";
mongoose.set("strictQuery", false);

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const server =require("http").createServer(app);

app
  .use(cors)
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(router);


  const connect = () =>{
    mongoose.connect(process.env.MONGO_URI_DEV as string).then(() =>{
        console.log("connected to DB");
    }).catch((error) => {throw error;});
  }

  server.listen(port, () => {
    cors:true
    connect();
    console.log("connnected");
    })
// connect()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
//     });
//   })
//   .catch((error) => {
//     console.log("🚀 ~ file: index.ts:29 ~ error:", error);
//     process.exit();
//   });

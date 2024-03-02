import mongoose from "mongoose";
import shape from "../models/shape";
import dotenv from "dotenv";
dotenv.config();

const connect = async () => {
  mongoose.set("strictQuery", true);

  // let uri = (
  //   process.env.NODE_ENV === "development"
  //     ? process.env.MONGO_URI_DEV
  //     : process.env.MONGO_URI
  // ) as string;

  let res = await mongoose.connect(process.env.MONGO_URI_DEV as string);

  console.log(
    "🚀 ~ file: config.ts:17 ~ MongoDB connected ~ ",
    res.connection.host
  );
};

export default connect;

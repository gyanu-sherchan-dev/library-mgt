import mongoose from "mongoose";

export const dbconnection = () => {
  try {
    const mongo_url = process.env.MONGO_URL;
    mongoose.set("strictQuery", true);
    const conn = mongoose.connect(mongo_url);
    conn && console.log("mongodb connected");
  } catch (error) {
    console.log(error.message + "from mongodb");
  }
};

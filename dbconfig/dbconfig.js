import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    const mongoUrl = process.env.MONGO_Url;
    const connect = mongoose.connect(mongoUrl);
    connect && console.log("mongodb connected");
  } catch (error) {
    console.log(error.message);
  }
};

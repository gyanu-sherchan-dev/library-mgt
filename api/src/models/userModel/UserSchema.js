import mongoose from "mongoose";
import { INACTIVE } from "../../Constant.js";

const UserSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: INACTIVE,
    },
    fName: {
      type: String,
      required: true,
    },
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("LM_user", UserSchema);

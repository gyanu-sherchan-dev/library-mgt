import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    status: {
      type: "String",
      required: true,
      default: "inactive",
    },
    fname: {
      type: "String",
      required: true,
    },
    lname: {
      type: "String",
      required: true,
    },
    address: {
      type: "String",
      required: true,
    },
    phone: {
      type: "Number",
      required: true,
    },
    email: {
      type: "String",
      required: true,
      unique: true,
    },
    password: {
      type: "String",
      required: true,
    },
    confirmPassword: {
      type: "String",
      required: true,
    },
    role: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", UserSchema);

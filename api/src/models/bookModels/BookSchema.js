import mongoose, { Schema } from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    isbn: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },
    borrowedBy: [{ type: Schema.Types.ObjectId, ref: "users" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", BookSchema);

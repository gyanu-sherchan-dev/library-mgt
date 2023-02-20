import express from "express";
import { createUser } from "../models/userModel/UserModel.js";

const router = express.Router();

//creating user
router.post("/", async (req, res, next) => {
  try {
    const result = await createUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "succes",
          message: "user created",
        })
      : res.json({
          status: "error",
          message: "user could not created",
        });
  } catch (error) {
    next(error);
  }
});

export default router;

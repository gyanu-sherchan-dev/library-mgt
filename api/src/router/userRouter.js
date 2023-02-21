import express from "express";
import { hassPassword } from "../bcryptjs.js";
import { createUser } from "../models/userModel/UserModel.js";

const router = express.Router();

//creating user
router.post("/", async (req, res, next) => {
  try {
    const user = req.body;
    user.password = hassPassword(user.password);
    console.log(user.password);
    user.confirmPassword = undefined;
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
    if (error.message.includes("E11000 duplicate key error collection")) {
      res.json({
        status: "error",
        message: "Hey please use different user details for registration",
      });
    }
    next(error);
  }
});

export default router;

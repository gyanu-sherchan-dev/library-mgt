import express from "express";
import { ERROR, SUCCESS } from "../Constant.js";
import { createUser } from "../models/userModel/userModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await createUser(req.body);

    result?._id
      ? res.json({
          status: SUCCESS,
          message: "user successfully created, you may login now",
        })
      : res.json({
          status: ERROR,
          message: "unsuccessful to create an user",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message =
        "Duplicate user details, please try with different user details";
      error.errorCode = 200;
    } else {
      error.message;
    }
    next(error);
  }
});

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: SUCCESS,
      message: "todo get user",
    });
  } catch (error) {
    next(error);
  }
});

export default router;

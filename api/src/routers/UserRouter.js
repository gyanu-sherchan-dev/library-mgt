import express from "express";
import { ERROR, SUCCESS } from "../Constant.js";
import { createUser, getAnyUser } from "../models/userModel/userModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await createUser(req.body);

    result?._id
      ? res.json({
          status: SUCCESS,
          message: "user successfully created, you may login now",
          result,
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

//login user
router.post("/login", async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(email);
    const result = await getAnyUser({ email });
    console.log(result);
    if (result?._id) {
      result.password = undefined;
      return res.json({
        status: SUCCESS,
        message: "login successful",
        result,
      });
    } else {
      return res.json({
        status: ERROR,
        message: "Invalid login details",
      });
    }
  } catch (error) {
    next(error);
  }
});
export default router;

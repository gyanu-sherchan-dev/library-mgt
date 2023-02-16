import express from "express";
import { ERROR, SUCCESS } from "../Constant.js";
import { comparePassword, hashPassword } from "../helpers/BrcyptHelper.js";
import { createUser, getAnyUser } from "../models/userModel/userModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    // const result = await createUser(req.body);

    // result?._id
    //   ? res.json({
    //       status: SUCCESS,
    //       message: "user successfully created, you may login now",
    //       result,
    //     })
    //   : res.json({
    //       status: ERROR,
    //       message: "unsuccessful to create an user",
    //     });

    //hash password
    const hashPass = hashPassword(req.body.password);
    if (hashPass) {
      req.body.password = hashPass;

      const result = await createUser(req.body);
      if (result?._id) {
        return res.json({
          status: SUCCESS,
          message: "user has been created successfully, you may now login",
        });
      } else {
        return res.json({
          status: ERROR,
          message: "User not created, please try again later",
        });
      }
    }
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
  // try {
  //   const { email, password } = req.body;
  //   console.log(email);
  //   const result = await getAnyUser({ email });
  //   // console.log(result);
  //   if (result?._id) {
  //     if (result.password !== password) {
  //       return res.json({
  //         status: ERROR,
  //         message: "Invalid login details",
  //       });
  //     }
  //     result.password = undefined;
  //     return res.json({
  //       status: SUCCESS,
  //       message: "login successful",
  //       result,
  //     });
  //   }
  //   res.json({
  //     status: "error",
  //     message: "user not found",
  //   });
  // } catch (error) {
  //   next(error);
  // }

  //login user with hassPassword compare
  try {
    const { email } = req.body;
    const user = await getAnyUser({ email });

    if (user?._id) {
      const isPassMatch = comparePassword(req.body.password, user.password);

      if (isPassMatch) {
        user.password = undefined;
        return res.json({
          status: SUCCESS,
          message: "login successful",
          user,
        });
      }
      return res.json({
        status: ERROR,
        message: "Invalid password",
      });
    }
    return res.json({
      status: ERROR,
      message: "User not found",
    });
  } catch (error) {
    next(error);
  }
});
export default router;

import { getAnyUser } from "../models/userModel/userModel.js";

export const isAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const user = authorization
      ? await getAnyUser({ _id: authorization })
      : null;

    user?._id
      ? next()
      : res.json({
          status: "error",
          message: "Unauthorized",
        });
  } catch (error) {
    next(error);
  }
};

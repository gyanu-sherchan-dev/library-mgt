import UserSchema from "./UserSchema.js";

//creating user
export const createUser = (obj) => {
  return UserSchema(obj).save();
};

//login user
export const loginUser = (filter) => {
  return UserSchema.findOne(filter);
};

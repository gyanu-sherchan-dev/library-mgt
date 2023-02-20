import UserSchema from "./UserSchema.js";

//creating user
export const createUser = (obj) => {
  return UserSchema(obj).save();
};

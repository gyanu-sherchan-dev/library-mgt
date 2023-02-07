import UserSchema from "./UserSchema.js";

//user CRUD

//create user
export const createUser = (userData) => UserSchema(userData).save();

//get singleUser by user_id
export const getUserById = (_id) => UserSchema.findById(_id);

//get singleUser by filter, filter must be an object
export const getAnyUser = (filter) => UserSchema.findById(filter);

//update user, @ _id is string and @ updateData is an object
export const updateUserById = (_id, updateData) =>
  UserSchema.findByIdAndUpdate(_id, updateData);

//delete user by _id.
export const deleteUserById = (_id) => UserSchema.findByIdAndDelete(_id);

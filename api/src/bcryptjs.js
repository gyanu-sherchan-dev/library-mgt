import bcryptjs from "bcryptjs";

const saltRound = 10;

export const hassPassword = (plainPassword) => {
  return bcryptjs.hashSync(plainPassword, saltRound);
};

export const comparePassword = (plainPassword, hassPass) => {
  return bcryptjs.compareSync(plainPassword, hassPass);
};

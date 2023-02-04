import axios from "axios";

const baseEP = "http://localhost:8000";
const userEP = baseEP + "/api/v1/user";

//registerUser
export const registerUser = async (registerObj) => {
  try {
    const result = await axios.post(userEP, registerObj);
    return result;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//login user/ getuser
export const getUser = async (loginObj) => {
  try {
    const result = await axios.post(userEP + "/login", loginObj);
    return result;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

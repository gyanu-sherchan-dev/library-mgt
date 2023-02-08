import axios from "axios";

const baseApiUrl = "http://localhost:8000/api/v1";
const userEP = baseApiUrl + "/user";

//create user
export const axisoPostNewUser = async (userData) => {
  try {
    const resp = await axios.post(userEP, userData);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

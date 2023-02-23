import axios from "axios";

const baseUrl = "http://localhost:8000/api/v1";
const userEP = baseUrl + "/user";

//create user
export const axiosCreateUser = async (regData) => {
  try {
    const { data } = await axios.post(userEP, regData);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: "unsuccessful to create user ----axios",
    };
  }
};

//login user
export const axiosLoginUser = async (formData) => {
  try {
    const { data } = await axios.post(userEP + "/login", formData);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

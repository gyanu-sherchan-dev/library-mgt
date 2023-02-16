import axios from "axios";

const baseApiUrl =
  process.env === "production" ? "api/v1/" : process.env.REACT_APP_ROOT_URL;
const userEP = baseApiUrl + "/user";
const bookEP = baseApiUrl + "/book";

//User
const getUserId = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    return user?._id;
  }
  return;
};

//create user
export const axisoPostNewUser = async (userData) => {
  try {
    const resp = await axios.post(userEP, userData);
    const { data } = resp;

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const axiosLoginUser = async (loginData) => {
  try {
    const result = await axios.post(userEP + "/login", loginData);
    const { data } = result;
    console.log(result);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//Book
export const axiosAddBook = async (bookInfo) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Please login first",
      };
    }

    const { data } = await axios.post(bookEP, bookInfo, {
      headers: { Authorization: userId },
    });
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const axiosGetBooks = async () => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Please login first",
      };
    }

    const { data } = await axios.get(bookEP, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

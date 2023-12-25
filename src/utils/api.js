import axios from "axios";
const serverPath = process.env.NEXT_PUBLIC_SERVER_PATH;

export const RegisterUser = async (data) => {
  try {
    const res = await axios.post(`${serverPath}/api/register`, data);
    return res?.data;
  } catch (error) {
    return error.response.message;
  }
};
export const LoginUser = async (data) => {
  try {
    const res = await axios.post(`${serverPath}/api/login`, data);
    return res?.data;
  } catch (error) {
    return error.response.message;
  }
};

import axios from "axios";
import { loginSuccess, loginStart, loginFailed } from "./authSlice";

// export function loginUser(user, dispatch) {
//   const res = axios.post(`/api/login`, user);
//   console.log(res);
//   dispatch(loginSuccess(res.data));
// }

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`/api/login`, user);
    // console.log(res.data);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispatch(loginFailed());
  }
};

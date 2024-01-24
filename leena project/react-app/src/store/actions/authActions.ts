export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

type userDetails = {
  id: String;
  email: String;
  name: String;
};

export const loginSuccess = (userDetails: userDetails) => ({
  type: LOGIN_SUCCESS,
  payload: userDetails,
});

export const logout = () => ({
  type: LOGOUT,
});

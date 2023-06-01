import Auth from "@aws-amplify/auth";
export const SET_USER_ATTRIBUTES = "SET_USER_ATTRIBUTES";

const setUser = (data) => {
  return { type: SET_USER_ATTRIBUTES, data: data };
};

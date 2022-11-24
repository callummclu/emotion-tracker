import { AsyncStorage } from "react-native";

export async function login(loginParams) {
  const response = fetch(`${process.env.REACT_APP_BACKEND_URI}/auth/login`, {
    method: "POST",
    body: JSON.stringify(loginParams),
  });
  return response;
}

export async function logOut() {
  AsyncStorage.getItem("gocial_auth_token");
  return false;
}

import AsyncStorage from "@react-native-async-storage/async-storage";

export async function signup(signupParams) {
  const response = fetch(`http://192.168.0.24:3000/user`, {
    method: "POST",
    body: JSON.stringify(signupParams),
  });
  return response;
}

export async function checkAuth() {
  let token = await AsyncStorage.getItem("gocial_auth_token");
  const response = fetch(`http://192.168.0.24:3000/auth/${token}`);
  return response;
}

export function getUserDetails(username) {
  const response = fetch(`http://192.168.0.24:3000/user/${username}`);
  return response;
}

import AsyncStorage from "@react-native-async-storage/async-storage";

export async function login(loginParams) {
  const response = fetch(`http://192.168.0.24:3000/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      Username: loginParams.username,
      Password: loginParams.password,
    }),
  });
  return response;
}

export async function logOut() {
  AsyncStorage.getItem("gocial_auth_token");
  return false;
}

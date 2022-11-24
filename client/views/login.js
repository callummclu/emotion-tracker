import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loggedIn } = useAuth();

  async function formSubmitLogin(e) {
    e.preventDefault();
    let LoginParams = {
      username,
      password,
    };
    await login(LoginParams);
    setLoggedIn(loggedIn);
  }

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Login</Text>
      <TextInput
        onChangeText={(newText) => setUsername(newText)}
        placeholder="username"
      ></TextInput>
      <TextInput
        onChangeText={(newText) => setPassword(newText)}
        secureTextEntry={true}
        placeholder="password"
      ></TextInput>
      <Button onPress={formSubmitLogin} title="login"></Button>
    </View>
  );
};

import { View, Text, TextInput, Button } from "react-native";
import { useRef } from "react";
import useAuth from "../hooks/useAuth";
import { Formik } from "formik";

export const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const { login, loggedIn } = useAuth();

  async function formSubmitLogin(e) {
    e.preventDefault();
    let LoginParams = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    await login(LoginParams);

    redirectHome();
  }

  const redirectHome = () => {
    window.location.href = window.location.origin;
  };
  return (
    <View>
      <Text>Login</Text>
      <TextInput ref={usernameRef} placeholder="username"></TextInput>
      <TextInput
        ref={passwordRef}
        secureTextEntry={true}
        placeholder="password"
      ></TextInput>
      <Button onPress={formSubmitLogin} title="login"></Button>
    </View>
  );
};

import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { TextInputMM } from "../components/textInput";
import { ButtonMM } from "../components/button";

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 250, height: 75 }}
        />
        <TextInputMM
          title="Username"
          placeholder="username"
          state={[username, setUsername]}
        ></TextInputMM>
        <TextInputMM
          state={[password, setPassword]}
          title="Password"
          secureTextEntry={true}
          placeholder="password"
          bottomText="Forgotten Password"
        ></TextInputMM>
        <ButtonMM onPress={formSubmitLogin} text="login"></ButtonMM>
        <Text
          style={{
            textDecorationLine: "underline",
            paddingTop: 5,
            fontWeight: "bold",
          }}
        >
          Register today!
        </Text>
      </ImageBackground>
    </View>
  );
};

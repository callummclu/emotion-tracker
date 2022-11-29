import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";
import { TextInputMM } from "../components/textInput";
import { ButtonMM } from "../components/button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const Register = () => {
  const [state, setState] = useState();
  const navigation = useNavigation();

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
          state={[state, setState]}
          title="First name"
          placeholder="First name"
        ></TextInputMM>
        <TextInputMM
          state={[state, setState]}
          title="Surname"
          placeholder="Surname"
        ></TextInputMM>
        <TextInputMM
          state={[state, setState]}
          title="Username"
          placeholder="username"
        ></TextInputMM>
        <TextInputMM
          state={[state, setState]}
          title="Email"
          placeholder="Email"
        ></TextInputMM>
        <TextInputMM
          state={[state, setState]}
          title="Password"
          secureTextEntry={true}
          placeholder="password"
        ></TextInputMM>
        <ButtonMM
          onPress={() => navigation.navigate("Login")}
          text="Sign up"
        ></ButtonMM>
      </ImageBackground>
    </View>
  );
};

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

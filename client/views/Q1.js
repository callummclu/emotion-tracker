import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { ButtonMM } from "../components/button";
import { SpeechBubble } from "../components/speechBubble";
import { useNavigation } from "@react-navigation/native";
import { CloudButton } from "../components/cloudButton";

export const Q1 = () => {
  const navigation = useNavigation();

  const goToNextPage = () => {
    navigation.navigate("Q2");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <CloudButton
          style={{ marginLeft: -120 }}
          onPress={goToNextPage}
          text="Overwhelmed"
        ></CloudButton>
        <CloudButton
          style={{ marginLeft: 80 }}
          onPress={goToNextPage}
          text="Anxious"
        ></CloudButton>
        <CloudButton
          style={{ marginLeft: -100 }}
          onPress={goToNextPage}
          text="Sad"
        ></CloudButton>
        <SpeechBubble>How do you feel today?</SpeechBubble>
        <CloudButton
          style={{ marginLeft: 120 }}
          onPress={goToNextPage}
          text="Happy"
        ></CloudButton>
        <CloudButton
          style={{ marginLeft: -80 }}
          onPress={goToNextPage}
          text="Overjoyed"
        ></CloudButton>
        <CloudButton
          style={{ marginLeft: 100 }}
          onPress={goToNextPage}
          text="Ecstatic"
        ></CloudButton>
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

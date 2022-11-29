import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { ButtonMM } from "../components/button";
import { SpeechBubble } from "../components/speechBubble";
import { useNavigation } from "@react-navigation/native";
import { CloudButton } from "../components/cloudButton";

export const Q2 = () => {
  const navigation = useNavigation();

  const goToNextPage = () => {
    navigation.navigate("Q3");
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
          text="Restless"
        ></CloudButton>
        <CloudButton
          style={{ marginLeft: 80 }}
          onPress={goToNextPage}
          text="Too little"
        ></CloudButton>
        <CloudButton
          style={{ marginLeft: -100 }}
          onPress={goToNextPage}
          text="Overslept"
        ></CloudButton>
        <SpeechBubble>How was your sleep last night?</SpeechBubble>
        <CloudButton
          style={{ marginLeft: 120 }}
          onPress={goToNextPage}
          text="Great"
        ></CloudButton>
        <CloudButton
          style={{ marginLeft: -80 }}
          onPress={goToNextPage}
          text="Peaceful"
        ></CloudButton>
        <CloudButton
          style={{ marginLeft: 100 }}
          onPress={goToNextPage}
          text="Disturbed"
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

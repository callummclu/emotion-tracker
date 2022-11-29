import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { ButtonMM } from "../components/button";
import { SpeechBubble } from "../components/speechBubble";
import { useNavigation } from "@react-navigation/native";
import { CloudButton } from "../components/cloudButton";

export const Q3 = () => {
  const navigation = useNavigation();

  const goToNextPage = () => {
    navigation.navigate("Q4");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <SpeechBubble>What emoji represents you today?</SpeechBubble>
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

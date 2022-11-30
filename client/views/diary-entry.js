import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { ButtonMM } from "../components/button";
import { SpeechBubble } from "../components/speechBubble";

import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
export const DiaryEntry = ({ setDailyPromptComplete }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <SpeechBubble>Add to your thought diary</SpeechBubble>
        <TextInput
          placeholder="Type here ..."
          style={{
            width: 340,
            height: 300,
            backgroundColor: "white",
            margin: 20,
            borderRadius: 20,
            borderColor: "black",
            borderWidth: 2,
            padding: 20,
            paddingTop: 20,
          }}
          multiline={true}
        ></TextInput>
        <ButtonMM
          onPress={() => setDailyPromptComplete(true)}
          text="Submit"
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

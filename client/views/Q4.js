import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { ButtonMM } from "../components/button";
import { SpeechBubble } from "../components/speechBubble";

import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";
export const Q4 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <SpeechBubble>How stressed are you today?</SpeechBubble>

        <Text style={{ fontSize: 20 }}>Select on the scale</Text>
        <Rating
          style={{ paddingVertical: 10 }}
          tintColor={"#FF8E53"}
          type="custom"
          ratingColor="black"
          onFinishRating={() => navigation.navigate("DiaryEntry")}
        />
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

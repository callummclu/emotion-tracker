import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { ButtonMM } from "../components/button";
import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";
export const DailyPrompt = ({ setDailyPromptComplete }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text
          style={{
            padding: 100,
            paddingBottom: 40,
            fontSize: 36,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Time for your daily Report
        </Text>
        <Text style={{ fontSize: 24 }}>Pop the clouds & emojis </Text>
        <Text style={{ fontSize: 100, paddingBottom: 50 }}>☁️ 😎</Text>
        <Text style={{ fontSize: 20 }}>Select on the scale</Text>
        <Rating
          style={{ paddingVertical: 10 }}
          tintColor={"#FF8E53"}
          type="custom"
          ratingColor="black"
        />
        <ButtonMM
          onPress={() => navigation.navigate("Q1")}
          text="Start"
        ></ButtonMM>
        <Text
          onPress={() => setDailyPromptComplete(true)}
          style={{
            textDecorationLine: "underline",
            paddingTop: 15,
            fontWeight: "bold",
          }}
        >
          Opt out for today
        </Text>
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

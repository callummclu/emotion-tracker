import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { ButtonMM } from "../components/button";
import { SpeechBubble } from "../components/speechBubble";

import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { ReportBox } from "../components/ReportBox";
export const YourThoughtDiary = ({ setDailyPromptComplete }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          navigation.navigate("Dashboard", { screen: "DashboardMain" })
        }
      >
        <Text>X</Text>
      </Pressable>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={{ fontWeight: "bold", fontSize: 32 }}>
          Your thought diary
        </Text>

        <ReportBox
          emoji="🥵"
          answer="Overwhemled"
          question="How do you feel today?"
        />
        <ReportBox
          emoji="🤗"
          answer="Peaceful"
          question="How was your sleep last night?"
        />
        <ReportBox
          emoji="😔"
          answer="😔"
          question="What emoji represents you today?"
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

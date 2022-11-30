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
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { ReportBox } from "../components/ReportBox";
import Icon from "react-native-vector-icons/Feather";
export const TodaysReport = ({ setDailyPromptComplete }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Pressable
          style={{ marginRight: 300, marginTop: 50 }}
          onPress={() => navigation.navigate("Dashboard", { screen: "Main" })}
        >
          <Icon name={"arrow-left"} size={40} color={"black"} />
        </Pressable>
        <Text style={{ fontWeight: "bold", fontSize: 45, margin: 40 }}>
          Todays report
        </Text>
        <ScrollView>
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
        </ScrollView>
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

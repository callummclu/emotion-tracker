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
import { DiaryEntryBox } from "../components/diaryEntry";
import Icon from "react-native-vector-icons/Feather";
export const YourThoughtDiary = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Pressable
          style={{ marginRight: 300, marginTop: -100, marginBottom: 50 }}
          onPress={() => navigation.navigate("Dashboard", { screen: "Main" })}
        >
          <Icon name={"arrow-left"} size={40} color={"black"} />
        </Pressable>
        <Text style={{ fontWeight: "bold", fontSize: 32 }}>
          Your thought diary
        </Text>

        <DiaryEntryBox
          date="Tuesday 24th Nov"
          entry="Today i feel a bit sad but i feel this may be to do with my upcoming deadlines. Hopefully will be better soon"
        />
        <DiaryEntryBox
          date="Tuesday 23rd Nov"
          entry="I met up with steve for a coffee catch up which was fun!"
        />
        <DiaryEntryBox
          date="Tuesday 20th Nov"
          entry="Out for a drink  with the mates, good  to relax, feeling better. Do more often!"
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

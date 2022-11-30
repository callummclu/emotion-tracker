import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
import { Dimensions } from "react-native";
import RowItem from "../components/RowItem";
import { useNavigation } from "@react-navigation/native";

export const ViewData = () => {
  const navigation = useNavigation();

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

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Pressable
          style={{ marginRight: 300, marginTop: -240, marginBottom: -20 }}
          onPress={() => navigation.navigate("Profile", { screen: "Main" })}
        >
          <Icon name={"arrow-left"} size={40} color={"black"} />
        </Pressable>
        <Text
          style={{
            textAlign: "center",
            fontSize: 45,
            marginBottom: 40,
            fontWeight: "bold",
            marginTop: 50,
          }}
        >
          All Data
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 20,
            marginRight: 190,
            textDecorationLine: "underline",
          }}
        >
          View & Download
        </Text>
        <RowItem title="Reports" icon="file-text" colorBG="#FFD29C" />
        <RowItem title="Thought diaries" icon="book-open" colorBG="#FFD29C" />

        <RowItem title="Summaries" icon="archive" colorBG="#FFD29C" />
      </ImageBackground>
    </View>
  );
};

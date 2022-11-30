import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";
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

export const Settings = () => {
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
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 50,
          }}
        >
          Settings
        </Text>

        <Text>General</Text>
        <RowItem title="Change username" icon="edit-2" colorBG="#FFD29C" />
        <RowItem title="Notifications" icon="bell" colorBG="#FFD29C" />

        <RowItem title="Logout" icon="log-out" colorBG="#FFD29C" />

        <Text>Data</Text>
        <RowItem title="Delete all data" icon="trash" colorBG="#FFD29C" />
        <Text>Feedback</Text>
        <RowItem title="Send feedback" icon="send" colorBG="#FFD29C" />
        <RowItem title="Report bug" icon="flag" colorBG="#FFD29C" />
      </ImageBackground>
    </View>
  );
};

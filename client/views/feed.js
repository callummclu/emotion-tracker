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
import { Post } from "../components/Post";
import { ScrollView } from "react-native-gesture-handler";

export const Feed = () => {
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
        <Image
          source={require("../assets/logo.png")}
          style={{
            width: 250,
            height: 75,
            marginRight: "auto",
            marginLeft: 10,
            position: "absolute",
            left: 0,
            top: 50,
          }}
        />
        <View style={{ marginTop: 150 }}>
          <ScrollView>
            <Post name="callum" emoji="😀" timeStamp={"15:21:13"} />
            <Post name="sajan" emoji="😎" timeStamp={"15:21:13"} />
            <Post name="ben" emoji="😔" timeStamp={"15:21:13"} />
            <Post name="evie" emoji="😠" timeStamp={"15:21:13"} />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

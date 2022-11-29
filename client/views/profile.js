import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import RowItem from "../components/RowItem";

export const Profile = () => {
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
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: 300,
            alignItems: "center",
            margin: 30,
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Hey Callum!</Text>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text>Today</Text>
            <Text style={{ fontSize: 50 }}>😀</Text>
          </View>
        </View>
        <View
          style={{
            width: 320,
            height: 250,
            backgroundColor: "white",
            borderRadius: 20,
          }}
        ></View>
        <RowItem
          style={{ marginTop: 40 }}
          title="Settings"
          icon="settings"
          colorBG="#FFD29C"
        />
        <RowItem
          style={{ marginTop: 20 }}
          title="View all data"
          icon="list"
          colorBG="#FFD29C"
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

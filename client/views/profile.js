import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/native";
import { VictoryBar } from "victory-native";

import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import RowItem from "../components/RowItem";

export const Profile = () => {
  const navigation = useNavigation();

  const days = ["mon", "tues", "wed", "thur", "fri", "sat", "sun"];
  const colors = ["green", "green", "orange", "red", "orange", "gray", "gray"];
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
        >
          <Text
            style={{
              marginTop: 20,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            This week
          </Text>
          <VictoryBar
            width={320}
            height={200}
            data={[
              { x: 1, y: 3, y0: 0 },
              { x: 2, y: 3, y0: 0 },
              { x: 3, y: 3, y0: 0 },
              { x: 4, y: 3, y0: 0 },
              { x: 5, y: 3, y0: 0 },
              { x: 6, y: 3, y0: 0 },
              { x: 7, y: 3, y0: 0 },
            ]}
            barWidth={35}
            style={{
              data: {
                fill: ({ datum }) => `${colors[datum.x - 1]}`,
              },
            }}
            labels={({ datum }) => `${days[datum.x - 1]}`}
          />
          <Text
            style={{
              marginTop: -30,
              textAlign: "center",

              fontSize: 16,
              textDecorationLine: "underline",
            }}
          >
            See more...
          </Text>
        </View>
        <RowItem
          style={{ marginTop: 40 }}
          title="Settings"
          onPress={() => navigation.navigate("Profile", { screen: "Settings" })}
          icon="settings"
          colorBG="#FFD29C"
        />
        <RowItem
          style={{ marginTop: 20 }}
          title="View all data"
          onPress={() => navigation.navigate("Profile", { screen: "ViewData" })}
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

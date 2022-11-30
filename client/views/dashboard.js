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
import { VictoryLine, VictoryChart, VictoryAxis } from "victory-native";

export const Dashboard = () => {
  const navigation = useNavigation();
  const days = ["mon", "tues", "wed", "thur", "fri", "sat", "sun"];

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
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 50,
          }}
        >
          Your weekly summary
        </Text>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            marginTop: 10,
            padding: 10,
            width: 360,
            marginBottom: 20,
          }}
        >
          <VictoryChart width={370}>
            <VictoryLine
              style={{ height: 200, width: 200 }}
              data={[
                { x: 1, y: 15 },
                { x: 2, y: -2 },
                { x: 3, y: 12 },
                { x: 4, y: -15 },
                { x: 5, y: 6 },
                { x: 6, y: -8 },
              ]}
              minDomain={{ y: -15 }}
              padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
              xDomain={{ min: 0, max: 4 }}
              yDomain={{ min: -20, max: 20 }}
            />

            <VictoryAxis label={""} style={{ tickLabels: { fill: "none" } }} />
            {["", "", "", "", "", "", ""].map((d, i) => {
              return (
                <>
                  <VictoryAxis
                    label={"happiness"}
                    dependentAxis
                    key={i}
                    style={{ tickLabels: { fill: "none" } }}
                    axisValue={d}
                  />
                </>
              );
            })}
          </VictoryChart>
        </View>
        <Text
          style={{
            fontSize: 15,
            textDecorationLine: "underline",
            fontWeight: "700",
            marginBottom: 25,
          }}
        >
          View more summaries
        </Text>
        <RowItem
          title="View todays report"
          icon="file-text"
          colorBG="#FFD29C"
          onPress={() =>
            navigation.navigate("Dashboard", { screen: "TodaysReport" })
          }
        />
        <RowItem
          title="View thought diary"
          icon="book-open"
          colorBG="#FFD29C"
          onPress={() =>
            navigation.navigate("Dashboard", { screen: "ThoughtDiary" })
          }
        />
        <RowItem
          title="Access help"
          icon="compass"
          colorBG="#FFD29C"
          onPress={() =>
            navigation.navigate("Dashboard", { screen: "AccessHelp" })
          }
        />
      </ImageBackground>
    </View>
  );
};

import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
import { Dimensions } from "react-native";

export const Dashboard = () => {
  const screenWidth = Dimensions.get("window").width;

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
          style={{ width: 250, height: 75 }}
        />
        <Text>Your weekly summary</Text>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            marginTop: 20,
            padding: 10,
          }}
        >
          <Chart
            style={{ height: 200, width: 350 }}
            data={[
              { x: -2, y: 15 },
              { x: -1, y: 10 },
              { x: 0, y: 12 },
              { x: 1, y: -7 },
              { x: 2, y: 6 },
              { x: 3, y: -8 },
              { x: 4, y: 10 },
            ]}
            padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
            xDomain={{ min: 0, max: 4 }}
            yDomain={{ min: -20, max: 20 }}
          >
            <VerticalAxis
              includeOriginTick={true}
              tickCount={3}
              theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
            />
            <HorizontalAxis tickCount={5} />
            <Area
              theme={{
                gradient: {
                  from: { color: "#ffa502" },
                  to: { color: "#ffa502", opacity: 0.4 },
                },
              }}
            />
            <Line
              theme={{
                stroke: { color: "#ffa502", width: 5 },
                scatter: { default: { width: 4, height: 4, rx: 2 } },
              }}
            />
          </Chart>
        </View>
      </ImageBackground>
    </View>
  );
};

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

export const AccessHelp = () => {
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
          Access Help
        </Text>

        <Text>Helpful Websites</Text>
        <RowItem
          title="NHS Mental Health"
          icon="external-link"
          colorBG="#FFD29C"
        />
        <RowItem title="Samaritans" icon="external-link" colorBG="#FFD29C" />
        <RowItem title="Back Onside" icon="external-link" colorBG="#FFD29C" />

        <Text>Helpful Contact Numbers</Text>
        <RowItem title="Samaritans" icon="phone-outgoing" colorBG="#FFD29C" />
        <RowItem title="Back Onside" icon="phone-outgoing" colorBG="#FFD29C" />
        <RowItem title="CALM" icon="phone-outgoing" colorBG="#FFD29C" />
      </ImageBackground>
    </View>
  );
};

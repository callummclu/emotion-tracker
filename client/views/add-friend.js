import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
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

export const AddFriend = () => {
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
          style={{ marginRight: 300, marginTop: -490, marginBottom: 0 }}
          onPress={() => navigation.navigate("Friends", { screen: "Main" })}
        >
          <Icon name={"arrow-left"} size={40} color={"black"} />
        </Pressable>
        <View
          style={{ paddingTop: 40, paddingBottom: 20, alignItems: "center" }}
        >
          <TextInput
            placeholder="   Add by username"
            style={{
              backgroundColor: "#FFD29C",
              width: 300,
              height: 50,
              borderRadius: 16,
              borderColor: "black",
              borderWidth: 2,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

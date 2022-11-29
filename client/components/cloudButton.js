import { ImageBackground, Pressable, View, Text } from "react-native";

export const CloudButton = ({ onPress, text, style }) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <ImageBackground
          style={{ width: 150, height: 100 }}
          source={require("../assets/cloud.png")}
        >
          <Text style={{ textAlign: "center", paddingTop: 40, fontSize: 16 }}>
            {text}
          </Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

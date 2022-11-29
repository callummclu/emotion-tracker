import { ImageBackground, Pressable, View, Text } from "react-native";

export const SpeechBubble = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: "#FFD29C",
        borderColor: "black",
        borderWidth: 5,
        padding: 15,
        margin: 20,
        borderRadius: 30,
        borderBottomLeftRadius: 0,
      }}
    >
      <Text style={{ fontSize: 30 }}>{children}</Text>
    </View>
  );
};

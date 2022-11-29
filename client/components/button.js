import { StyleSheet, Pressable, Text } from "react-native";

export const ButtonMM = (props) => {
  let onPress = props.onPress;
  let text = props.text;

  return (
    <>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 50,
    backgroundColor: "black",
    marginTop: 20,
    borderRadius: 20,
    zIndex: 100,
  },
  text: {
    color: "#FF8E53",
    fontSize: 16,
    marginTop: 14,
    textAlign: "center",
  },
});

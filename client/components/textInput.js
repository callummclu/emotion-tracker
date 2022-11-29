import { TextInput, StyleSheet, Text, View } from "react-native";

export const TextInputMM = (props) => {
  let placeholder = props.placeholder;
  let title = props.title;
  let [state, setState] = props.state;
  let secureTextEntry = props.secureTextEntry;
  let bottomText = props.bottomText;
  return (
    <>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(newText) => setState(newText)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      ></TextInput>
      {bottomText && <Text style={styles.bottomText}>{bottomText}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingTop: 30,
    marginLeft: -140,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomText: {
    paddingTop: 10,
    marginLeft: -140,
    paddingBottom: 10,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  input: {
    width: 300,
    backgroundColor: "#FFD29C",
    height: 50,
    borderRadius: 16,
    paddingLeft: 10,
  },
});

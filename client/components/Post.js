import { useState } from "react";
import { View, Text, Modal, StyleSheet, Pressable } from "react-native";

export const Post = ({ timeStamp, emoji, name, accessGranted }) => {
  let [nameHidden, setNameHidden] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Access Requested</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{
          width: 340,
          height: accessGranted ? 235 : 205,
          backgroundColor: "white",
          borderRadius: 20,
          margin: 10,
        }}
      >
        {accessGranted && (
          <View
            style={{
              backgroundColor: "limegreen",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              You can see who posted
            </Text>
          </View>
        )}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            {nameHidden ? "Anonymous" : name}
          </Text>
          <Text>{timeStamp || ""}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 50 }}>{emoji}</Text>
            <Text style={{ width: 55, textAlign: "center" }}>Overall </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 50 }}>📁</Text>
            <Text style={{ width: 55, textAlign: "center" }}>View Report</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              onPress={() =>
                accessGranted
                  ? setNameHidden(!nameHidden)
                  : setModalVisible(true)
              }
              style={{ fontSize: 50 }}
            >
              {nameHidden ? "👁️" : "🙈"}
            </Text>
            <Text style={{ width: 55, textAlign: "center" }}>
              {nameHidden
                ? accessGranted
                  ? "Show Identity"
                  : "Request Identity"
                : "Hide Identity"}
            </Text>
          </View>
        </View>
        <Text style={{ padding: 20 }}>Add a comment</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

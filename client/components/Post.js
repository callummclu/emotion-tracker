import { useState } from "react";
import { View, Text } from "react-native";

export const Post = ({ timeStamp, emoji, name, accessGranted }) => {
  let [nameHidden, setNameHidden] = useState(true);

  return (
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
            onPress={() => accessGranted && setNameHidden(!nameHidden)}
            style={{ fontSize: 50 }}
          >
            {nameHidden ? "👁️" : "🙈"}
          </Text>
          <Text style={{ width: 55, textAlign: "center" }}>
            {nameHidden ? "Request Identity" : "Hide Identity"}
          </Text>
        </View>
      </View>
      <Text style={{ padding: 20 }}>Add a comment</Text>
    </View>
  );
};

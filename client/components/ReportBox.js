import { useState } from "react";
import { View, Text, Modal, StyleSheet, Pressable } from "react-native";

export const ReportBox = ({ question, answer, emoji }) => {
  return (
    <>
      <View
        style={{
          width: 340,
          height: 165,
          borderWidth: 1,
          backgroundColor: "white",
          borderRadius: 20,
          margin: 10,
          paddingTop: 20,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 20 }}>When asked:</Text>
        <Text style={{ textAlign: "center" }}>{question}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 40 }}>{emoji}</Text>
          <View>
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              You clicked:
            </Text>
            <Text style={{ textAlign: "center" }}>{answer}</Text>
          </View>
          <Text style={{ fontSize: 40 }}>{emoji}</Text>
        </View>
      </View>
    </>
  );
};

import { useState } from "react";
import { View, Text, Modal, StyleSheet, Pressable } from "react-native";

export const ReportBox = ({ question, answer, emoji }) => {
  return (
    <>
      <View
        style={{
          width: 340,
          height: accessGranted ? 235 : 205,
          backgroundColor: "white",
          borderRadius: 20,
          margin: 10,
        }}
      >
        <Text>When asked:</Text>
        <Text>{question}</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>{emoji}</Text>
          <View>
            <Text>You clicked:</Text>
            <Text>{answer}</Text>
          </View>
          <Text>{emoji}</Text>
        </View>
      </View>
    </>
  );
};

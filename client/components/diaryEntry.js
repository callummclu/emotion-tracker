import { useState } from "react";
import { View, Text, Modal, StyleSheet, Pressable } from "react-native";

export const DiaryEntryBox = ({ date, entry }) => {
  return (
    <>
      <View
        style={{
          width: 340,
          height: 150,
          backgroundColor: "white",
          borderRadius: 20,
          margin: 10,
          padding: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 20 }}>{date}</Text>
        <Text>{entry}</Text>
      </View>
    </>
  );
};

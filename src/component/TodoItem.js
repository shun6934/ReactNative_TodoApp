import React from "react";
import { View, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    minHeight: 50
  },
  text: {
    color: "#333"
  }
});

// SFC(Stateless Functional Component)
const TodoItem = props => {
  const { text } = props;

  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.text}>{text}</Text>
    </View>
  );
};

export default TodoItem;

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

//components
import HelloWorld from "./components/HelloWorld";
import ImgTest from "./components/ImgTest";

export default class App extends Component() {
  render() {
    return (
      <View style={{ alignItems: "center", top: 50 }}>
        <HelloWorld name="Rexxar" />
        <HelloWorld name="jenna" />
        <HelloWorld name="twist" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "blue"
  }
});

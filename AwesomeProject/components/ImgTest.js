import React from "react";
import { Image } from "react-native";

export default function Bananas() {
  let pic = {
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
  };
  return <Image source={pic} style={{ flex: 1, width: 193, height: 110 }} />;
}

import React from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import AboutComponent from "../components/AboutComponent";

function AboutScreen() {
  return (
    <ScrollView >
      <Text style={{ fontSize: 20 }}>About Screen</Text>
      <AboutComponent name='Victorien Dit Richard Teddy'></AboutComponent>
      <AboutComponent name='Pavard Raphaël'></AboutComponent>
      <AboutComponent name='Linz Pierre'></AboutComponent>
    </ScrollView >
  );
}

export default AboutScreen;

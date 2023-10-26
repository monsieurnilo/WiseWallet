import React from "react";
import { View, Text, Image, ScrollView} from "react-native";

type AboutProps = {
    name: String,
    jobs: [String]
}

const AboutComponent = (props: AboutProps) => {
  return (
      <ScrollView >
        <Image source={require('../assets/beauf.jpg')} style={{width: 200, height: 200}}/> 
        <Text>{props.name}</Text>
        <Text>Tâches effectuées</Text>
        
      </ScrollView >
  );
};

export default AboutComponent;

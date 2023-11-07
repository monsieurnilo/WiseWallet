import React from "react";
import { Button, View, Text } from "react-native";
import { Link } from "react-router-native";
import Graph from "../components/graph/Graph";
import fetchGraphData from "../components/graph/graphService";

const graphData = fetchGraphData();

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>Mon graphe</Text>
          <Link to="/budget">
            <Button title="Gérer mon budget" />
          </Link>
          <Graph graphData={graphData} />
        </View>
        <View>
          <Text>Moyenne nationale</Text>
          <Graph />
        </View>
      </View>
    );
  }
}

export default HomeScreen;

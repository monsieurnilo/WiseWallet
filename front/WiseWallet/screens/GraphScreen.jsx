import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";
import Graph from "../components/graph/Graph";
import fetchGraphData from "../components/graph/graphService";

class GraphScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: null,
    };
  }

  componentDidMount() {
    fetchGraphData().then((data) => {
      this.setState({ graphData: data });
    });
  }

  render() {
    const { graphData } = this.state;

    return (
      <View>
        <View>
          <Text>Mon graphe</Text>
          <Link to="/budget">
            <Text>Gérer mon budget</Text>
          </Link>
          {graphData && <Graph graphData={graphData} />}
        </View>
        <View>
          <Text>Moyenne nationale</Text>
          <Graph />
        </View>
      </View>
    );
  }
}

export default GraphScreen;

import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";
import Graph from "../components/budget/graph/Graph";
import fetchGraphData from "../components/budget/graph/graphService";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
        <Header></Header>
        <View>
          <Text style={{ fontSize: 20 }}>Comparaison des budgets</Text>
          <Link to="/budget">
            <Text style={{ fontSize: 15 }}>Gérer mon budget</Text>
          </Link>
          <Text style={{ fontSize: 15 }}>Mon Graphe</Text>
          {graphData && <Graph graphData={graphData} />}
        </View>
        <View>
          <Text style={{ fontSize: 15 }}>Moyenne nationale</Text>
          <Graph />
        </View>
        <Footer></Footer>
      </View>
    );
  }
}

export default GraphScreen;

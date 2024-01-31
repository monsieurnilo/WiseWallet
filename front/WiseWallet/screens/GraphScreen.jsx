import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
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
        <Header />
        <Text variant="titleLarge" style={styles.title}>
          Comparaison des budgets
        </Text>
        <Text
            variant="labelLarge"
            style={styles.hyperlien}
            onPress={() => navigate("/about")}
          >
            Gérer mon budget
          </Text>
        <ScrollView>
          
          <View>
            <Text variant="titleMedium" style={{textAlign : "center"}}>Mon Graphe</Text>
            {graphData && <Graph graphData={graphData} />}
          </View>

          <View>
            <Text variant="titleMedium" style={{textAlign : "center"}}>Moyenne nationale</Text>
            <Graph />
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
  hyperlien: {
    color: "blue",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default GraphScreen;

import natGraph from "./natGraph.json";
import fetchUserGraphData from "./graphService";
import randomColor from "randomcolor";
import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import React from "react";

//if user graph exist then we use the user personalized graph, else we use the national one
export default class Graph extends React.Component {
  userGraph: boolean;
  graphData: { data: {} };
  nameData: string[];
  numberData: string[];
  graphColors: any;

  constructor(props) {
    super(props);
    this.userGraph = props.userGraph;
    if (props.userGraph == false) {
      this.graphData = {
        data: natGraph,
      };
    } else {
      this.graphData = {
        data: fetchUserGraphData,
      };
    }

    this.nameData = Object.keys(this.graphData["data"]);
    this.numberData = Object.values(this.graphData["data"]);
    this.graphColors = randomColor({ count: this.nameData.length });
  }

  render() {
    const data = this.nameData.map((name, index) => ({
      name: name,
      number: parseInt(this.numberData[index]), // Assuming you want numbers as integers
      color: this.graphColors[index],
    }));

    const chartConfig = {
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2,
    };

    return (
      <PieChart
        data={data}
        width={Dimensions.get("window").width}
        height={400}
        chartConfig={chartConfig}
        accessor="number"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    );
  }
}

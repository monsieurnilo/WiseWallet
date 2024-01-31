import natGraph from "./natGraph.json";
import { Dimensions, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Avatar, Button, Card, Text } from "react-native-paper";
import React from "react";

const pastelColors = [
  "#FFB6C1", // Pastel Pink
  "#FFD700", // Pastel Yellow
  "#98FB98", // Pastel Green
  "#ADD8E6", // Pastel Blue
  "#FFA07A", // Light Salmon
  "#9370DB", // Medium Purple
  "#F0E68C", // Khaki
  "#20B2AA", // Light Sea Green
  "#FF6347", // Tomato
  "#C71585", // Medium Violet Red
  "#40E0D0", // Turquoise
  "#FFDAB9", // Peach Puff
];

export default class Graph extends React.Component {
  graphData = { data: {} };
  nameData = [];
  numberData = [];
  graphColors = [];

  constructor(props) {
    super(props);

    if (!props.graphData) {
      this.graphData = {
        data: natGraph,
      };
    } else if (props.graphData !== "null" && props.graphData !== "undefined") {
      this.graphData = {
        data: props.graphData,
      };
    }

    this.nameData = Object.keys(this.graphData.data);
    this.numberData = Object.values(this.graphData.data);
    this.graphColors = pastelColors.slice(0, this.nameData.length);

    // Sort data and colors based on the order of national values
    const nationalOrder = Object.keys(natGraph);
    this.nameData.sort(
      (a, b) => nationalOrder.indexOf(a) - nationalOrder.indexOf(b)
    );
    this.graphColors = this.nameData.map(
      (name) => this.graphColors[nationalOrder.indexOf(name)]
    );
  }

  render() {
    let data = this.nameData.map((name, index) => ({
      name: name,
      number: parseInt(this.numberData[index]),
      color: this.graphColors[index],
    }));

    const chartConfig = {
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2,
    };

    const screenWidth = Dimensions.get("window").width;

    const total = data.reduce((sum, item) => sum + item.number, 0);

    return (
      <Card style={{ marginHorizontal: 25, marginVertical : 10 }}>
        <Card.Content>
        <View style={{ alignItems: 'center' }}>
          <PieChart
            data={data}
            width={300}
            height={200}
            chartConfig={chartConfig}
            accessor="number"
            backgroundColor="transparent"
            paddingLeft="70"
            hasLegend={false}
          />
          </View>
        <View>
          {data.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: item.color,
                  borderRadius: 5,
                  marginRight: 5,
                }}
              />
              <Text>
                {((item.number / total) * 100).toFixed(2)}% {item.name}
              </Text>
            </View>
          ))}
        </View>
        </Card.Content>
      </Card>
    );
  }
}

import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Budget from "../components/budget/Budget";
import fetchGraphData from "../components/budget/graph/graphService";

class BudgetScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgetData: null,
    };
  }

  componentDidMount() {
    fetchGraphData().then((data) => {
      this.setState({ budgetData: data });
    });
  }

  render() {
    const { budgetData } = this.state;
    if (budgetData) {
      return (
        <View>
          <Header></Header>
          <Text style={{ fontSize: 20 }}>Budget Screen</Text>
          {budgetData && <Budget budgetData={budgetData}></Budget>}

          <Link to="/graph">
            <Text>Comparer mon budget</Text>
          </Link>
          <Footer></Footer>
        </View>
      );
    } else {
      return (
        <View>
          <Header></Header>
          <View>
            <Text>Loading ..</Text>
          </View>
          <Footer></Footer>
        </View>
      );
    }
  }
}

export default BudgetScreen;

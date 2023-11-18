import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { DataTable } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import budgetStyle from "./budgetStyleet";
import categoryList from "./catList";
import budgetService from "./budgetService";

export default class Budget extends React.Component {
  state = {
    nameData: [],
    numberData: [],
    selectedCategory: "",
    value: "",
    budgetData: { data: {} },
  };

  constructor(props) {
    super(props);

    if (props.budgetData) {
      this.setState({
        budgetData: {
          data: props.budgetData,
        },
      });
      this.setState({
        nameData: Object.keys(this.state.budgetData["data"]),
        numberData: Object.values(this.state.budgetData["data"]),
      });
    } else {
      this.setState({
        nameData: [],
        numberData: [],
      });
    }
  }

  setValue = (value) => {
    this.setState({ value });
  };

  setCategory = (selectedCategory) => {
    this.setState({ selectedCategory });
  };

  updateClientData = async () => {
    let { selectedCategory, value, budgetData } = this.state;
    if (selectedCategory == null || selectedCategory === "") {
      selectedCategory = "Produits alimentaires et boissons non alcoolisées";
    }
    if (value == null || value === "") {
      value = "0";
    }

    // Will update the budget
    const newData = await budgetService(budgetData, selectedCategory, value);

    // Use the callback form of setState to ensure you're using the latest state
    this.setState(() => {
      return {
        budgetData: {
          data: newData,
        },
        nameData: Object.keys(newData),
        numberData: Object.values(newData),
      };
    });
  };

  async componentDidMount() {
    try {
      await this.updateClientData();
    } catch (error) {
      console.error("Error updating client data:", error);
    }
  }

  render() {
    const styles = budgetStyle;

    if (
      !this.state.nameData ||
      !this.state.numberData ||
      this.state.nameData.length === 0 ||
      this.state.numberData.length === 0
    ) {
      return (
        <View style={styles.container}>
          <Text>Loading ....</Text>
        </View>
      );
    } else {
      return (
        <View id="test" style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
            Budget Table
          </Text>

          <View style={styles.section}>
            <DataTable style={{ marginBottom: 20 }}>
              <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title>Catégorie</DataTable.Title>
                <DataTable.Title>Valeur</DataTable.Title>
              </DataTable.Header>

              {this.state.nameData.map((name, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{name}</DataTable.Cell>
                  <DataTable.Cell>
                    {this.state.numberData[index]}
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Rajouter des flux monétaire</Text>

            <Picker
              selectedValue={this.state.selectedCategory}
              onValueChange={(itemValue) => this.setCategory(itemValue)}
              style={styles.picker}
            >
              {categoryList.map((category, index) => (
                <Picker.Item key={index} label={category} value={category} />
              ))}
            </Picker>

            <TextInput
              style={styles.input}
              placeholder="Valeur du flux en euro"
              keyboardType="numeric"
              onChangeText={(val) => this.setValue(val)}
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={async () => {
                await this.updateClientData();
              }}
            >
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

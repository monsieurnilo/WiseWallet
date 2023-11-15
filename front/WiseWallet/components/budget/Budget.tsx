import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { DataTable } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import budgetStyle from "./budgetStyleet";
import categoryList from "./catList";
import budgetService from "./budgetService";

export default class Budget extends React.Component {
  budgetData: { data: {} };
  nameData: string[];
  numberData: string[];
  state = {
    selectedCategory: "",
    value: "",
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: "",
      value: "",
    };

    if (props.budgetData) {
      this.budgetData = {
        data: props.budgetData,
      };
      this.nameData = Object.keys(this.budgetData["data"]);
      this.numberData = Object.values(this.budgetData["data"]);
    } else {
      console.log("No budget found");
      this.nameData = [];
      this.numberData = [];
    }
  }

  setValue = (value) => {
    this.setState({ value });
  };

  setCategory = (selectedCategory) => {
    this.setState({ selectedCategory });
  };

  setBudgetData = (newData) => {
    this.setState({
      budgetData: {
        data: newData,
      },
    });
  };

  updateClientData = () => {
    const { selectedCategory, value } = this.state;
    //will update the budget
    const data = budgetService(this.budgetData, selectedCategory, value);
    this.setBudgetData(data);
  };

  render() {
    const styles = budgetStyle;

    const nameData = this.nameData;
    const numberData = this.numberData;

    if (
      !nameData ||
      !numberData ||
      nameData.length === 0 ||
      numberData.length === 0
    ) {
      return (
        <View style={styles.container}>
          <Text>Loading ....</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
          Budget Table
        </Text>

        <View style={styles.section}>
          <DataTable style={{ marginBottom: 20 }}>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title>Catégorie</DataTable.Title>
              <DataTable.Title>Valeur</DataTable.Title>
            </DataTable.Header>

            {nameData.map((name, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{name}</DataTable.Cell>
                <DataTable.Cell>{numberData[index]}</DataTable.Cell>
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
            onPress={this.updateClientData}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dataTable: {
    marginBottom: 20,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  picker: {
    height: "auto",
    width: "80%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  input: {
    height: "auto",
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  addButton: {
    height: "auto",
    width: "80%",
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;

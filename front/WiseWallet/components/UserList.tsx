import React from "react";
import { View, Text, Image, FlatList, StyleSheet} from "react-native";

const UserList = ({ data }) => {
    
    const _renderItem2 = ({ item }) => (
        <View>
        <Text>- {item}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <Text style={styles.name}>{item.name}</Text>
            <Image source={(item.picture)} style={{width: 100, height: 100, margin:15}}/>  
            <Text>{item.email}</Text>
            <Text>Tâches effectuées :</Text>
            <FlatList data={item.jobs} renderItem={_renderItem2}/>
        </View>
    );

    return (
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
    },
    name: {
        fontSize: 20,
        textDecorationLine: 'underline',
    }
  });



export default UserList;


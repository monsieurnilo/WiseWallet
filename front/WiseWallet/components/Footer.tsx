import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Link } from "react-router-native";

function Footer(){
    return (
        <View style={{ borderStyle: 'solid', borderTopWidth: 2, borderColor: 'blue', paddingTop: 10}}>
            <View style={{ borderStyle: 'solid', borderWidth: 2, borderColor: 'blue', padding: 5, marginRight:10}}>
                <Link to="/about" >
                    <Text >A propos</Text>
                </Link>
            </View>
        </View>
          
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      marginTop: 30,
    },
    name: {
        fontSize: 20,
        textDecorationLine: 'underline',
    }
  });



export default Footer;


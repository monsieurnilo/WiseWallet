import React from "react";
import { FlatList} from "react-native";
import { Card, Text, Paragraph  } from 'react-native-paper';

const UserList = ({ data }) => {
    
    const _renderItem2 = ({ item }) => (
          <Paragraph>-  {item}</Paragraph>
    );

    const renderItem = ({ item }) => (
      <Card style={{ margin: 10 }}>
        <Card.Content>
          <Text variant="titleLarge" >{item.name}</Text>
          <Text variant="bodyMedium">{item.email}</Text>
        </Card.Content>
        <Card.Cover source={(item.picture)} style={{ margin: 10 }}  />
        <Text variant="titleSmall" style={{ marginLeft: 20 }}>Tâches effectuées :</Text>
        <FlatList data={item.jobs} renderItem={_renderItem2} style={{ marginBottom: 10, marginLeft : 30 }}/>
      </Card>
    );

    return (
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      );
}





export default UserList;


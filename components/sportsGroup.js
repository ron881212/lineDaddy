import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
} from 'react-native';
import SportsCards from './sportsCards'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Sports',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Sports',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Sports',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29drv',
      name: 'Sports',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e2g9dgf',
      name: 'Sports',
    },
];

function SportsGroup() {

    const renderItem = ({ item }) => (
        <SportsCards name={item.name} />
    );

    return (
        <View style={{height:140}}>
        <FlatList
            data={DATA}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    sports: {
        // flexDirection:'row',
        flexGrow:1,
    }
});

export default SportsGroup
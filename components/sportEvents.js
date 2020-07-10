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
      name: 'Events',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Events',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Events',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29dfe',
      name: 'Events',
    },
    {
      id: '58694a0f-3da1-471f-bd96-14557eeeeesf',
      name: 'Events',
    },
    {
      id: '58694a0f-3da1-471f-bd96-14557dbe5esf',
      name: 'Events',
    },
    {
      id: '58694a0f-3da1-471f-bd96-15557dbe5esf',
      name: 'Events',
    },
    {
      id: '58694a0f-3da1-471f-bd56-14557dbe5esf',
      name: 'Events',
    },
    {
      id: '58694a0f-3da1-471f-bd36-14557dbe5esf',
      name: 'Events',
    },
    {
      id: '58694a0f-3da1-471f-bd56-14557dbe5esf',
      name: 'Events',
    },
];

function SportEvents() {
    const renderItem = ({ item }) => (
        <SportsCards name={item.name} />
    );
    return (
            <FlatList
                data={DATA}
                horizontal={false}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                columnWrapperStyle={{marginLeft:-16}}
                contentContainerStyle={{paddingBottom:20}}
            />
    );
}

const styles = StyleSheet.create({
    sports: {
        // flexGrow:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignContent:'center',
        marginTop:0,
        // marginBottom:15
    }
});

export default SportEvents
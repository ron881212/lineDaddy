import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Search() {
    return (
        <SearchBar
            placeholder="Games, events, or teams"
            containerStyle={styles.bar}
            inputContainerStyle={styles.search}
            inputStyle={styles.text}
            lightTheme = {true}
            leftIconContainerStyle={{paddingRight:0}}
            searchIcon={<MaterialCommunityIcons 
              name="magnify"
              color='#c6c3c1' 
              size={26}
              style={{marginLeft:32}}
              />}
        />
    );
}

const styles = StyleSheet.create({
    bar: {
        marginBottom:0,
        borderRadius: 50, 
        padding: 0,
        margin:0,
        marginTop:24,

        marginBottom:8,

        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor: '#c6c3c1',
        shadowOffset: { height: 5, width: 0 }
    },
    search: {
      width: 328,
        height:60,
        borderRadius: 50, 
        backgroundColor:'white',
    },
    text: {
        color: 'black', 
        // textAlign:'center',
    }
})

export default Search
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

function Search() {
    return (
        <SearchBar
            placeholder="Games, events, or teams"
            containerStyle={styles.bar}
            inputContainerStyle={styles.search}
            inputStyle={styles.text}
            lightTheme = {true}
        />
    );
}

const styles = StyleSheet.create({
    bar: {
        width: 350,
        borderRadius: 50, 
        padding: 0,
        margin:0,
    },
    search: {
        borderRadius: 50, 
        backgroundColor:'white',
        

    },
    text: {
        color: 'black', 
        // lightTheme: true
    }
})

export default Search
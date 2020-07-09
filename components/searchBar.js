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

function SearchBar() {
    return (
        <TextInput
            style={{
              padding: 16,
              marginTop: 50
            }}
        placeholder="Games, events, or teams"
        // inputAccessoryViewID={inputAccessoryViewID}
        // onChangeText={text => setText(text)}
        // value={text}
      />
    );
}

const styles = StyleSheet.create({
    card: {
      marginTop:23.8,
      height:110,
      backgroundColor:'white',
      borderRadius:10,
      overflow:'hidden',
      borderWidth: 1,
      borderColor:'lightgray',
      marginLeft:16,

    },
    sportImage: {
      width:160,
      height:86,
    },
    text: {
      fontSize:16,
      marginLeft:'4%',
      marginTop:'1%'
    }
});

export default SearchBar
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

function SportsCards(props) {
    return (
        <View style={styles.card}>

        <Image
          style={styles.sportImage}
          source={{
          uri: 'https://activeforlife.com/content/uploads/2018/07/soccer-ball-2121x1414.jpg',
        }}
        />

        <Text style={styles.text}>{props.name}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
      marginTop:23.8,
      height:114,
      backgroundColor:'#ffffff',
      borderRadius:10,
      overflow:'hidden',
      borderWidth: 0.5,
      borderColor:'#c6c3c1',
      marginLeft:16,
    },
    sportImage: {
      width:160,
      height:84,
      marginBottom:0
    },
    text: {
  // fontFamily: "SFProDisplay",
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.36,
    color: "#262626",
    marginTop:4,
    marginLeft:8 
    }
});

export default SportsCards
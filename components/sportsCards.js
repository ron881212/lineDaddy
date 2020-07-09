import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

function SportsCards() {
    return (
        <View style={styles.card}>

        <Image
          style={styles.sportImage}
          source={{
          uri: 'https://activeforlife.com/content/uploads/2018/07/soccer-ball-2121x1414.jpg',
        }}
        />

        <Text style={styles.text}>Soccer</Text>

        </View>
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

export default SportsCards
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import LineDaddy from '../logos/LINEDADDY.png'
import LineDaddyLogo from '../logos/LineDaddyLogo.png'

function Home() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>

        <Image
          style={styles.logo}
          source={LineDaddyLogo}
        />

        <Image
          style={styles.logoText}
          source={LineDaddy}
        />

        {/* <Text>Home screen</Text> */}
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logo: {
      width:64.3,
      height:64.3,
      marginTop:31
    },
    logoText: {
      width: 153,
      marginTop:24.5
    }
});

export default Home
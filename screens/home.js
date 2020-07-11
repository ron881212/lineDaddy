import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';
import LineDaddy from '../logos/LINEDADDY.png'
import LineDaddyLogo from '../logos/LineDaddyLogo.png'
import SportsCards from '../components/sportsCards'
import SportsGroup from '../components/sportsGroup'
import SportEvents from '../components/sportEvents'
import Search from '../components/searchBar'

function Home() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor:'white' }}>
        <Image
          style={styles.logo}
          source={LineDaddyLogo}
        />

        <Image
          style={styles.logoText}
          source={LineDaddy}
        />

        <SportsGroup />

        <Search />

        <SportEvents />

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
    },
    sports: {
        flexDirection:'row',
    }
});

export default Home
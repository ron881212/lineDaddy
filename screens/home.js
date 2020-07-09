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
import SportsCards from '../components/sportsCards'
import SportsGroup from '../components/sportsGroup'
import Search from '../components/searchBar'

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

        <ScrollView 
            horizontal='true' 
            contentContainerStyle={styles.sports}
        >
                <SportsCards />
                <SportsCards />
                <SportsCards />
                <SportsCards />
                <SportsCards />
        </ScrollView>
        <SportsGroup />
            <Search />

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
        // width:'100%', 
        flexDirection:'row',
        overflow:'hidden',
        // flexWrap:'nowrap'
        // flex:1
    }
});

export default Home
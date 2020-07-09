import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import SportsCards from './sportsCards'

function SportsGroup() {
    return (
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
    );
}

const styles = StyleSheet.create({
    sports: {
        // width:'100%', 
        flexDirection:'row',
        overflow:'hidden',
        // flexWrap:'nowrap'
        // flex:1
    }
});

export default SportsGroup
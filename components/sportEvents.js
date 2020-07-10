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

function SportEvents() {
    return (
            <ScrollView 
                contentContainerStyle={styles.sports}
            >
                <SportsCards name='Events'/>
                <SportsCards name='Events'/>
                <SportsCards name='Events'/>
                <SportsCards name='Events'/>
                <SportsCards name='Events'/>
                <SportsCards name='Events'/>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    sports: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignContent:'center',
        marginTop:8,
        marginLeft:-16,
    }
});

export default SportEvents
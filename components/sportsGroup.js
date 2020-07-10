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
        <View style={{height:140}}>
            <ScrollView 
                horizontal='true' 
                contentContainerStyle={styles.sports}
            >
                <SportsCards name='Sports'/>
                <SportsCards name='Sports'/>
                <SportsCards name='Sports'/>
                <SportsCards name='Sports'/>
                <SportsCards name='Sports'/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    sports: {
        flexDirection:'row',
        flexGrow:1,
    }
});

export default SportsGroup
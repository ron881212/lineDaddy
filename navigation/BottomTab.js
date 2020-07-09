import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Home from '../screens/home'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native'

const Tab = createMaterialBottomTabNavigator();

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications screen</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
    </View>
  );
}

function BottomTab() {
  return (
    <NavigationContainer>

    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#5f01d7"
      inactiveColor="black"
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name={focused ? "home-variant" : "home-variant-outline"} 
              color={color} 
              size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
            name={focused ? "heart" : "heart-outline"} 
            color={color} 
            size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
            name={focused ? "account-circle" : "account-circle-outline"}
            color={color} 
            size={25} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>

  );
}

export default BottomTab
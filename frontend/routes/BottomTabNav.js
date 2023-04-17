import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackNav';
import Listes from '../screens/Listes';

import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 30 : 20;
          } else if (route.name === 'Listes') {
            iconName = 'security';
            size = focused ? 30 : 20;
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'rebeccapurple',
        inactiveTintColor: 'grey',
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          title: 'Accueil',
          tabBarBadge: 8,
        }}
      />
      <Tab.Screen
        name="Listes"
        component={Listes}
        options={{ title: 'systeme de securite', headerShown: true, }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
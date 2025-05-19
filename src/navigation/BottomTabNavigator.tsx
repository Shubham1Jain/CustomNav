import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import Contact from '../screens/Contact';

export type BottomTabParamList = {
  HomeStack: undefined;
  Contact: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#FF6565',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{title: 'Contact'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

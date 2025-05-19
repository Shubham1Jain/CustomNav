import React from 'react';
import {useDrawerProgress} from '@react-navigation/drawer';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Menu} from '../assets/menu';
import BottomTabNavigator from './BottomTabNavigator';

const CustomHeader = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Menu color="#e8e8e9" />
      </Pressable>
      <Text style={styles.headerText}>START</Text>
    </View>
  );
};

const MainScreenWrapper = () => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, -7]);
    const translateX = interpolate(progress.value, [0, 1], [0, 50]);
    const translateY = interpolate(progress.value, [0, 1], [0, 20]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 20]);

    return {
      transform: [{rotateZ: `${rotate}deg`}, {translateX}, {translateY}],
      borderRadius,
      overflow: 'hidden',
    };
  });

  return (
    <View style={styles.mainWrapper}>
      <Animated.View style={[styles.animatedWrapper, animatedStyle]}>
        <CustomHeader />
        <BottomTabNavigator />
      </Animated.View>
    </View>
  );
};

export default MainScreenWrapper;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#211C2A',
  },
  animatedWrapper: {
    flex: 1,
    backgroundColor: '#211C2A',
  },
  header: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerText: {
    color: '#9f9f9e',
    fontSize: 20,
    fontWeight: '500',
  },
});

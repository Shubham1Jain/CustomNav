import React from 'react';
import {
  createDrawerNavigator,
  useDrawerProgress,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import MainScreenWrapper from './MainScreenWrapper';
import FAQ from '../screens/FAQ';

const Drawer = createDrawerNavigator();

type MenuItemProps = {
  title: string;
  onPress: () => void;
  highlight?: boolean;
};

const MenuItem = ({title, onPress, highlight = false}: MenuItemProps) => (
  <TouchableOpacity
    style={[styles.menuItem, highlight && styles.highlightedMenuItem]}
    onPress={onPress}>
    <Text
      style={[styles.menuItemText, highlight && styles.highlightedMenuText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [-40, 0]);
    return {
      transform: [{translateY}],
    };
  });
  const navigateTo = (screen: string) => {
    props.navigation.navigate(screen);
    props.navigation.closeDrawer();
  };

  return (
    <Animated.View style={[styles.drawerWrapper, animatedStyle]}>
      <Text style={styles.menuTitle}>Beka</Text>

      <MenuItem
        title="Start"
        onPress={() => navigateTo('Main')}
        highlight={true}
      />
      <MenuItem title="FAQ" onPress={() => navigateTo('FAQ')} />

      <View style={styles.divider} />

      <MenuItem title="Sign Out" onPress={() => {}} />
    </Animated.View>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'back',
        overlayColor: 'transparent',
        drawerStyle: {
          width: '45%',
        },
      }}>
      <Drawer.Screen
        name="Main"
        component={MainScreenWrapper}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="FAQ"
        component={FAQ}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerWrapper: {
    flex: 1,
    backgroundColor: '#211C2A',
    paddingTop: 60,
    paddingLeft: 20,
  },
  menuTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  menuItem: {
    paddingVertical: 14,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  highlightedMenuItem: {
    backgroundColor: 'rgba(255, 100, 100, 0.3)',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 18,
  },
  highlightedMenuText: {
    color: '#FF6565',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginVertical: 20,
  },
});

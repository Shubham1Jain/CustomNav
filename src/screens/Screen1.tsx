import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../navigation/HomeStack';

type ScreenProps = {
  navigation: StackNavigationProp<HomeStackParamList, 'Screen1'>;
};

const Screen1 = ({navigation}: ScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 1</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen2')}>
        <Text style={styles.buttonText}>Go to Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#211C2A',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6565',
    width: '100%',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Screen1;

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../navigation/HomeStack';

type HomeScreenProps = {
  navigation: StackNavigationProp<HomeStackParamList, 'Home'>;
};

const Home = ({navigation}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Home</Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Screen1')}>
            <Text style={styles.cardTitle}>Screen 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Screen2')}>
            <Text style={styles.cardTitle}>Screen 2</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#211C2A',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    color: '#333',
  },
});

export default Home;

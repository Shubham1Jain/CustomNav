import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FAQ = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQ</Text>
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
});

export default FAQ;

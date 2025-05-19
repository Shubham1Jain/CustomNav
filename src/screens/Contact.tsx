import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Contact Us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#211C2A',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'center',
  },
});

export default Contact;

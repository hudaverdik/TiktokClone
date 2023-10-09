import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationBadge = ({ count }) => {
  if (count > 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{count}</Text>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default NotificationBadge;

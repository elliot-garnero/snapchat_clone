import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function UserList() {
  return (
    <View style={styles.container}>
      <p>member list</p>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
  }
});

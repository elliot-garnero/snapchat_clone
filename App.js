import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImagePickerExample from './components/ImagePickerExample'
import UserList from './components/UserList'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://lh3.googleusercontent.com/OA9DcLdOtGCWUESkn7Jbc5lBJuPrleroAwL2QX2R3fIXrR-Mkhn1CWitj_ioDZGJ'}} style={styles.img}/>
      <Text style={styles.text}>Welcome to Snapchat</Text>
      <ImagePickerExample />
      <UserList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFC00',
  },
  text: {
    fontSize: 20
  },
  img: {
    width: 100,
    height: 100,
  }
});

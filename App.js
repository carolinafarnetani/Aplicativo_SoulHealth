import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Content from './src/component/Content';
import Header from './src/component/Header';



export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
     <Header />
     <Content />
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

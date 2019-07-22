import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Home from './components/Home';

export default function App() {
  return (
    < View style={styles.container} >
      <Home />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28,
    margin: 5,
    justifyContent: 'flex-start'
  }
});


AppRegistry.registerComponent('App', () => App)

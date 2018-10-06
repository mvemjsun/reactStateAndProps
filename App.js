import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyComponent from './MyComponent'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React State & Props</Text>
        <MyComponent 
        labelText="Enter some text" 
        buttonText="Add text to state"></MyComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    margin: 20,
    borderWidth: 2,
    borderRadius: 10,
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  }
});

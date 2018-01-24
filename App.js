/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase'; 
import LoginForm from './LoginForm'

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCaCO3Ywl5f_c74YPvaHvxZtQnSR3u5_0M",
      authDomain: "react-native-firebase-13b07.firebaseapp.com",
      databaseURL: "https://react-native-firebase-13b07.firebaseio.com",
      projectId: "react-native-firebase-13b07",
      storageBucket: "react-native-firebase-13b07.appspot.com",
      messagingSenderId: "635779616062"
    });
  }
  render() {
      return (
          <View style={styles.container}>
              <LoginForm />
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

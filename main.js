
import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './Components/SignUpForm';
import SignInForm from './Components/SignInForm';


class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAvX9HmELtKIVkPVcxUeWLZAr78r6CX_2k",
      authDomain: "one-time-password-a843d.firebaseapp.com",
      databaseURL: "https://one-time-password-a843d.firebaseio.com",
      projectId: "one-time-password-a843d",
      storageBucket: "one-time-password-a843d.appspot.com",
      messagingSenderId: "413588647911"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});


Expo.registerRootComponent(App);

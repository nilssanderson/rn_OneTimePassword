
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button, Card } from 'react-native-elements';
import firebase from 'firebase';


const ROOT_URL = 'https://us-central1-one-time-password-a843d.cloudfunctions.net';


class SignInForm extends Component {
  state = { phone: '', code: '' };

  handleSubmit = async () => {
    let object = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "phone": this.state.phone,
        "code": this.state.code
      })
    }

    try {
      let { data } = await fetch(`${ROOT_URL}/verifyOneTimePassword`, object); // verifyOneTimePassword with phone and code
      firebase.auth().signInWithCustomToken(data.token); // sign in with custom token from response
    } catch (err) {
      console.log(err); // would be more useful if set error state
    }
  }

  render() {
    return (
      <Card style={{ width: 320 }}>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>

        <Button
          title="Submit"
          onPress={this.handleSubmit} // dont need bind(this) as its an arrow function
        />
      </Card>
    );
  }
}


export default SignInForm;

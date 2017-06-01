
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button, Card } from 'react-native-elements';


const ROOT_URL = 'https://us-central1-one-time-password-a843d.cloudfunctions.net';


class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = async () => {
    let object = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "phone": this.state.phone
      })
    }

    try {
      await fetch(`${ROOT_URL}/createUser`, object); // create a user based on the phone input
      await fetch(`${ROOT_URL}/requestOneTimePassword`, object); // requestOneTimePassword after the createUser is successful
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
        <Button
          title="Submit"
          onPress={this.handleSubmit} // dont need bind(this) as its an arrow function
        />
      </Card>
    );
  }
}


export default SignUpForm;

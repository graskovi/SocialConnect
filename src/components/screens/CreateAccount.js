import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

export default class CreateAccount extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FormLabel>First name</FormLabel>
        <FormInput />
        <FormValidationMessage>First name is required.</FormValidationMessage>
        <Button
          raised
          title='Create your account!'
        />
      </View>
    );
  }
  
} // end of class CreateAccount

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

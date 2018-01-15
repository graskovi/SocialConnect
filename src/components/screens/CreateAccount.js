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
import DatePicker from 'react-native-datepicker';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toDateString()
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>First name</FormLabel>
        <FormInput />
        <FormValidationMessage>First name is required.</FormValidationMessage>
        <FormLabel>Last name</FormLabel>
        <FormInput />
        <FormLabel>Date of birth</FormLabel>
        <DatePicker
          style={{ width: 200 }}
          //date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="1940-01-01"
          maxDate="2016-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys. 
          }}
          onDateChange={(newDate) => {
            this.setState({ date: newDate });
          }}
        />
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
    padding: 10
  },
});

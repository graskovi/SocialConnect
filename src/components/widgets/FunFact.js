import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class FunFact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      fact: props.fact
    };
  }

  handleOnPress = () => {
    console.log('Fun Fact pressed!');
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleOnPress}
        style={styles.button}
      >
        <Text>
          {this.props.title}{'\n'}{this.props.fact}
        </Text>
      </TouchableOpacity>
    );
  }
} // end of class FunFact

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 20,
    borderRadius: 20
  }
});

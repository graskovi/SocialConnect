import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Platform
} from 'react-native';

export default class CustomTopBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert(this.props.title, 'More tabs needed')}>
          <Text style={styles.text}>SocialConnect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert(this.props.title, 'More tabs needed')}>
          <Text style={styles.text}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert(this.props.title, 'More tabs needed')}>
          <Text style={styles.text}>Snapchat</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2
  },
  row: {
    flexDirection: 'row'
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'green'
  },
  text: {
    alignSelf: 'center',
    color: Platform.OS === 'ios' ? 'black' : 'white'
  }
});

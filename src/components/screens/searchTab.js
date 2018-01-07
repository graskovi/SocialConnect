import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { SearchBar } from 'react-native-elements';

export default class Searchtab extends Component {
  onSearchBarChange() {
    console.log('Search bar changed!');
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          onChangeText={() => this.onSearchBarChange()}
          onClearText={() => this.onSearchBarChange()}
          placeholder='Search chats here...'
        />
        <Text style={styles.welcome}>
          Flatlist to go here
        </Text>
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
});

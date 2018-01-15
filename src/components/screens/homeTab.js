import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import * as appActions from '../../actions/index';
import FunFact from '../widgets/FunFact';

const avatarBlank = require('../../img/Avatar_Blank.png');

export default class Hometab extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rows}>
          <Image
            style={{ width: 50, height: 50 }}
            source={avatarBlank}
          />
          <Text style={styles.welcome}>
              17 | Male | he/his/him
          </Text>
        </View>
        <View style={styles.facts}>
          <FunFact
            title={'Fun Fact'}
            fact={'The boiling point of water is 212F'}
          />
          <FunFact
            title={'Personal Fact'}
            fact={"I don't enjoy looking at the sun"}
          />
          <FunFact
            title={'Mysterious Fact'}
            fact={'I know where it is'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  username: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: 'black'
  },
  facts: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rows: {
    flexDirection: 'row'
  }
});

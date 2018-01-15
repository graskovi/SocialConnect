import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import * as appActions from '../../actions/index';

const logo = require('../../img/SC_Logo.png');

export default class HomeButton extends Component {
  onPress = () => {
    
  }

  render() {
    return (
      <TouchableHighlight>
        <Image
          style={{ width: 45, height: 28 }}
          source={{ logo }}
        />
      </TouchableHighlight>
    );
  }
} // end of class HomeButton

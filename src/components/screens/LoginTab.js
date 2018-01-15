import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  //Button,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import * as appActions from '../../actions/index';
import CreateAccount from './CreateAccount';

const logo = require('../../img/SC_Logo.png');

class Login extends Component {
  constructor(props) {
    super();

    this.state = {
      creatingAccount: false
    };
  }

  /*
    onLoginPress:
      Changes the root value of the app to be 'after-login', changing it to tab view
  */
  onLoginPress() {
    this.props.dispatch(appActions.login());
  }

  onCreateAccountPress() {
    //this.state.creatingAccount = true;
    this.setState({ creatingAccount: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>SocialConnect</Text>
        </View>
        <View style={styles.logo}>
          <Image
            style={{ width: 180, height: 112 }}
            source={logo}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            raised
            //icon={{ name: 'cached' }}
            title='Login'
            onPress={() => this.onLoginPress()}
            containerViewStyle={{ borderRadius: 25 }}
            rounded
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <Text style={styles.textStyle}>New here?</Text>
          <Button
            raised
            //icon={{ name: 'cached' }}
            title='Create account'
            //onPress={() => this.onLoginPress()}
            // TODO CHANGE TO onCreateAccountPress
            onPress={() => this.onLoginPress()}
            containerViewStyle={{ borderRadius: 25 }}
            rounded
          />
        </View>
      </View> // end of container view
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500'
  },
  title: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold'
  },
  logo: {
    flex: 2
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect()(Login);

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
        <View style={styles.title}>
        {/*<View style={styles.container}>*/}
          <Text style={styles.appName}>SocialConnect</Text>
        {/*</View>*/}
          <View style={styles.padding}>
            <Image
              style={{ width: 180, height: 117 }}
              source={logo}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.padding}>
            <Button
              raised
              //icon={{ name: 'cached' }}
              title='Login'
              onPress={() => this.onLoginPress()}
              containerViewStyle={{ borderRadius: 25 }}
              rounded
            />
          </View>
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
    justifyContent: 'space-between',
    backgroundColor: '#FFA500'
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  padding: {
    marginVertical: 20
  },
  buttonContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

export default connect()(Login);

import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  //Button,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import * as appActions from '../../actions/index';

class Login extends Component {
  /*
    onLoginPress:
      Changes the root value of the app to be 'after-login', changing it to tab view
  */
  onLoginPress() {
    this.props.dispatch(appActions.login());
  }

  render() {
    return (
        <View>
            {/*<Button large onPress={() => this.onLoginPress()} title="Login">
                <Text>Login</Text>
            </Button>
            <Button large onPress={() => this.onLoginPress()} title="Create Account">
                <Text>Create Account</Text>
    </Button>*/}
            <Button
              raised
              //icon={{ name: 'cached' }}
              title='Login'
              onPress={() => this.onLoginPress()}
            />
            <Button
              raised
              //icon={{ name: 'cached' }}
              title='Create account'
              onPress={() => this.onLoginPress()}
            />
        </View>
        
    );
  }
}

export default connect()(Login);

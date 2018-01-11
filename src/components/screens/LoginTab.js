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
import CreateAccount from './CreateAccount';

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
            {
              !this.state.creatingAccount &&
              <Button
                raised
                //icon={{ name: 'cached' }}
                title='Create account'
                //onPress={() => this.onLoginPress()}
                onPress={() => this.onCreateAccountPress()}
              />
            }
            { this.state.creatingAccount && <CreateAccount /> }
        </View>
        
    );
  }
}

export default connect()(Login);

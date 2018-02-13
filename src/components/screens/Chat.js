import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { GiftedChat, Actions, SystemMessage, Send, InputToolbar } from 'react-native-gifted-chat';
import { Button } from 'react-native-elements';
import { Modal } from 'react-native-modal';

const phoneLogo = require('../../img/Phone.png');
const fbLogo = require('../../img/Facebook.png');
const snapLogo = require('../../img/Snapchat.png');

const cameraImg = require('../../img/Camera.png');
const photoLibImg = require('../../img/PhotoLibrary1.png');
const logo = require('../../img/SC_Logo.png');

const avatarImg = require('../../img/Avatar_Blank.png');

const imgHeight = 40;
const imgWidth = 70;

let navigator;
// TODO SHOULD USERNAME BE A PROP
let ProfileButton = ({ image }) =>
  <TouchableOpacity
    onPress={this.pushProfile}
  >
    <Image
      source={image}
    />
  </TouchableOpacity>;
Navigation.registerComponent('ProfileButton', () => ProfileButton);

// TODO SHOULD THIS BE A DEFAULT CLASS???
class Chat extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.state = {
      //chatterUsername: '',
      //isModalVisible: false
      messages: [],
      chatUsername: 'John Doe'
    };
  }

  onNavigatorEvent(event) {
    if (event.type === 'DeepLink') {
      const parts = event.link.split('/');
      if (parts[0] === 'tab1') {
        this.props.navigator.push({
          screen: parts[1]
        });
      }
    }
  }

  // Invoke to flip visibility of the modal
  //toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  // Invoke to hide the modal, regardless of current state
  //hideModal() { this.setState({ isModalVisible: false }); }

  //backToList() {
    
  //}

  componentWillMount() {
    navigator = this.props.navigator;
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'New chat! Ready to start?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Example User',
            avatar: { avatarImg }
          }
        }
      ],
      typingText: 'Hello'
    });
    this.props.navigator.setTitle({
      title: this.state.chatUsername
    });
  }

  onSend(message) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, message)
    }));
  }

  pushProfile() {
    this.navigator.push({
      screen: 'SocialConnect.Profile',
      title: this.state.chatUsername
    });
  }

  // TODO IMPLEMENT TO MAKE TOOLBAR PRETTY AND BUTTONS INLINE
  renderInputToolbar(props) {
    return (
      <View style={styles.inputRow}>
        <View style={styles.photos}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={cameraImg}
            />
          </TouchableOpacity>
          <TouchableOpacity>
              <Image
                style={styles.icon}
                source={photoLibImg}
              />
          </TouchableOpacity>
        </View>
        <InputToolbar />
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={photoLibImg}
          />
        </TouchableOpacity>
      </View>
    );
  }

  showLightBox = () => {
    this.props.navigator.showLightBox({
      screen: 'SocialConnect.Widgets.SharingLightBox',
      passProps: {
        title: 'Share Contact Info',
        onClose: this.dismissLightBox,
      },
      style: {
        backgroundBlur: 'dark',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        tapBackgroundToDismiss: true
      }
    });
  };

  dismissLightBox = () => {
    this.props.navigator.dismissLightBox();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chatContainer}>
          <GiftedChat
            messages={this.state.messages}
            onSend={(message) => this.onSend(message)}
            user={{
              _id: 1
            }}
            //renderInputToolbar={this.renderInputToolbar}
          />
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={cameraImg}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={photoLibImg}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.showLightBox}>
            <Image
              style={styles.icon}
              source={logo}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

} // end of class Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    //backgroundColor: '#FFA500'
  },
  chatContainer: {
    flex: 5
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    //alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  icon: {
    flex: 1,
    width: imgWidth,
    height: imgHeight,
    resizeMode: 'contain'
  },
  photos: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  textInput: {
    flex: 5,
    height: imgHeight,
    borderColor: 'gray',
    borderWidth: 1
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});

export default Chat;

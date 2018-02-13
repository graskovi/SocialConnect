import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,
         Dimensions, Button, TouchableOpacity } from 'react-native';

const phoneImg = require('../../img/Phone.png');
const fbImg = require('../../img/Facebook.png');
const snapchatImg = require('../../img/Snapchat.png');

class SharingLightbox extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>{this.props.title}</Text>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={phoneImg}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={fbImg}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={snapchatImg}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 2}}>
          <Button
            title={'Close'}
            onPress={() => this.props.onClose()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  content: {
    marginTop: 8,
  },
  icon: {
    marginTop: 7,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.1,
    resizeMode: 'contain'
  },
  main: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SharingLightbox;

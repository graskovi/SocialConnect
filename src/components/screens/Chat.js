import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Button } from 'react-native-elements';
import { Modal } from 'react-native-modal';

// TODO SHOULD THIS BE A DEFAULT CLASS???
export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatterUsername: '',
      isModalVisible: false
    };
  }

  // Invoke to flip visibility of the modal
  toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  // Invoke to hide the modal, regardless of current state
  hideModal() { this.setState({ isModalVisible: false }); }

  backToList() {
    
  }

  render() {
    return (
      <View>
        <View style={styles.rows}>
          <Button
            onPress={() => this.backToList()}
          />
          <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.hideModal}
          >
            <Text>Placeholder text, must be removed</Text>
          </Modal>
        </View>
      </View>
    );
  }
} // end of class Chat

const styles = StyleSheet.create({
  rows: {
    flexDirection: 'row'
  }
});

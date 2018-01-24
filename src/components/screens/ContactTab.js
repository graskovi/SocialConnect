import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  Image
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import HomeButton from '../widgets/HomeButton';

const logo = require('../../img/SC_Logo.png');
const blankAvatar = require('../../img/Avatar_Blank.png');

export default class ContactTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;

    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  handleRefresh = () => {
    this.setState({
      page: 1,
      seed: this.state.seed + 1,
      refreshing: true
    });
  }

  onPressChat = (username) => {
    console.log(`Clicked on chat with ${username}`);
  }

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  }

  renderHeader = () => {
    return (
      <View style={styles.header}>
        {/*<TouchableHighlight>
          <Image
            style={{ width: 45, height: 28 }}
            source={logo}
          />
        </TouchableHighlight>*/}
        <HomeButton />
        <SearchBar placeholder='Search chats here...' lightTheme round />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
            roundAvatar
            //title={`Chat with ${item.firstName} ${item.lastName}`}
            title={'Sample empty chat'}
            subtitle={'Sample text from most recent messages in chat'}
            avatar={{ blankAvatar }}
            containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.email}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
} // end of class ChatList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

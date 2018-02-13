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
import { Navigation } from 'react-native-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../../reducers/index';
/*import registerScreens from './screens';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);*/
//registerScreens(store, Provider);

const logo = require('../../img/SC_Logo.png');
const blankAvatar = require('../../img/Avatar_Blank.png');

export default class ChatList extends Component {
  constructor(props) {
    super(props);

    //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  /*onNavigatorEvent(event) {
    this.props.navigator.push({
      screen: 'SocialConnect.Chat',
      title: 'Sample Chat'
    });
  }*/

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
        <TouchableHighlight>
          <Image
            style={{ width: 45, height: 28 }}
            source={logo}
          />
        </TouchableHighlight>
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

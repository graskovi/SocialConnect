import React, { Component } from 'react';
import {
 Platform,
 AppRegistry
} from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import thunk from 'redux-thunk';

import registerScreens from './components/screens/screens.js';
import * as reducers from './reducers/index';
import * as appActions from './actions/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
registerScreens(store, Provider);

const checkmarkImg = require('./img/Checkmark.png');
const earthImg = require('./img/Earth.png');
const avatarImg = require('./img/Avatar_Blank.png');

export default class App extends Component {

  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appActions.appInitialized());
  }
 
  onStoreUpdate() {
      let { root } = store.getState().root;
     
      // handle a root change
      // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
      if (this.currentRoot !== root) {
        this.currentRoot = root;
        this.startApp(root);
      }
    }
    
  startApp(root) {
    switch (root) {
        case 'login':
          Navigation.startSingleScreenApp({
                    screen: {
                    screen: 'SocialConnect.LoginTab', // unique ID registered with Navigation.registerScreen
                    title: 'Login', // title of the screen as appears in the nav bar (optional)
                    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
                    },
                });
                return;
              
        case 'after-login':
            Navigation.startTabBasedApp({
                tabs: [
                {
                    label: 'Home',
                    screen: 'SocialConnect.HomeTab',
                    icon: earthImg,
                    selectedIcon: earthImg,
                    title: 'Profile',
                    overrideBackPress: false,
                    navigatorStyle: {}
                },

                {
                    label: 'Search',
                    screen: 'SocialConnect.SearchTab',
                    icon: checkmarkImg,
                    selectedIcon: checkmarkImg,
                    title: 'Chats',
                    navigatorStyle: {}

                    
                },

                {
                    label: 'Contacts',
                    screen: 'SocialConnect.ContactTab',
                    icon: avatarImg,
                    selectedIcon: avatarImg,
                    title: 'Contacts',
                    navigatorStyle: {}
                }
               
                ],
            });
            return;

          default: 
            console.log('Not Root Found');
        }
    }
}

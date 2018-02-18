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

const homeImg = require('./img/one.png');
const plusImg = require('./img/navicon_add.png');
const transImg = require('./img/transform.png');

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
                        screen: 'SocialConnect.LoginTab', // unique ID from registerScreen
                        title: 'Login', // title of the screen as appears in the nav bar
                        navigatorStyle: {}, // override the navigator style for the screen
                        navigatorButtons: {} // override the nav buttons for the screen
                    },
                    // TODO ADD CREATE ACCOUNT HERE
                    accountScreen: {
                        screen: 'SocialConnect.CreateAccount',
                        title: 'Create Account',
                        navigatorStyle: {},
                        navigatorButtons: {}
                    }
                });
                return;
              
        case 'after-login':
            Navigation.startTabBasedApp({
                tabs: [
                {
                    label: 'Home',
                    screen: 'SocialConnect.HomeTab',
                    //icon: earthImg,
                    //selectedIcon: earthImg,
                    icon: homeImg,
                    selectedIcon: homeImg,
                    title: 'Profile',
                    overrideBackPress: false,
                    //navigatorStyle: {}
                },

                {
                    label: 'Search Chats',
                    screen: 'SocialConnect.ChatList',
                    //screen: 'SocialConnect.Chat',
                    //icon: checkmarkImg,
                    //selectedIcon: checkmarkImg,
                    icon: plusImg,
                    selectedIcon: plusImg,
                    title: 'Chats',
                    //navigatorStyle: {}
                },

                {
                    label: 'Contacts',
                    screen: 'SocialConnect.ContactTab',
                    /*icon: avatarImg,
                    selectedIcon: avatarImg,*/
                    icon: transImg,
                    selectedIcon: transImg,
                    title: 'Contacts',
                    //navigatorStyle: {}
                }
               
                ],

                tabsStyle: {
                    tabBarTranslucent: true,
                    drawUnderTabBar: true
                },

                appStyle: {
                    tabBarTranslucent: true
                }
            });
            return;

          default: 
            console.log('No Root Found');
        }
    }
}

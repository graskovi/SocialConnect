import { Navigation } from 'react-native-navigation';
import Login from './LoginTab';
import HomeTab from './HomeTab';
import ChatList from './ChatList';
import ContactTab from './ContactTab';
import CreateAccount from './CreateAccount';


export default (store, Provider) => {
	Navigation.registerComponent('SocialConnect.LoginTab', () => Login, store, Provider);
	Navigation.registerComponent('SocialConnect.HomeTab', () => HomeTab, store, Provider);
	Navigation.registerComponent('SocialConnect.ChatList', () => ChatList, store, Provider);
	Navigation.registerComponent('SocialConnect.ContactTab', () => ContactTab, store, Provider);
	Navigation.registerComponent('SocialConnect.CreateAccount', () => CreateAccount, store, Provider);
};

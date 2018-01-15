import { Navigation } from 'react-native-navigation';
import Login from './LoginTab';
import HomeTab from './HomeTab';
import ChatList from './ChatList';
import ContactTab from './ContactTab';


export default (store, Provider) => {
	Navigation.registerComponent('SocialConnect.LoginTab', () => Login, store, Provider);
	Navigation.registerComponent('SocialConnect.HomeTab', () => HomeTab, store, Provider);
	Navigation.registerComponent('SocialConnect.SearchTab', () => ChatList, store, Provider);
	Navigation.registerComponent('SocialConnect.ContactTab', () => ContactTab, store, Provider);
};

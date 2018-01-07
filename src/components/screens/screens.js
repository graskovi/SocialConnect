import { Navigation } from 'react-native-navigation';
import Login from './LoginTab';
import HomeTab from './HomeTab';
import SearchTab from './SearchTab';


export default (store, Provider) => {
	Navigation.registerComponent('SocialConnect.LoginTab', () => Login, store, Provider);
	Navigation.registerComponent('SocialConnect.HomeTab', () => HomeTab, store, Provider);
	Navigation.registerComponent('SocialConnect.SearchTab', () => SearchTab, store, Provider);
};

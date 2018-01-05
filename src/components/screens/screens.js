import { Navigation } from 'react-native-navigation';
import Login from './login';
import HomeTab from './homeTab';
import SearchTab from './searchTab';


export default (store, Provider) => {
	Navigation.registerComponent('SocialConnect.Login', () => Login, store, Provider);
	Navigation.registerComponent('SocialConnect.HomeTab', () => HomeTab, store, Provider);
	Navigation.registerComponent('SocialConnect.SearchTab', () => SearchTab, store, Provider);
};

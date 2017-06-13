import { createRouter } from '@expo/ex-navigation';

import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import LinksScreen from '../screens/LinksScreen';
import UserScreen from '../screens/UserScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  start: () => StartScreen,
  home: () => HomeScreen,
  form: () => FormScreen,
  links: () => LinksScreen,
  user: () => UserScreen,
  rootNavigation: () => RootNavigation,
}));

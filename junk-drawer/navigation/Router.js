import { createRouter } from '@expo/ex-navigation';

import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';
import FormView from '../screens/FormScreen';
import LinksScreen from '../screens/LinksScreen';
import UserScreen from '../screens/UserScreen';
import InsuranceScreen from '../screens/InsuranceScreen';
import InsuranceForm from '../screens/InsuranceForm';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  start: () => StartScreen,
  home: () => HomeScreen,
  form: () => FormView,
  insuranceForm: () => InsuranceForm,
  links: () => LinksScreen,
  user: () => UserScreen,
  insurance: () => InsuranceScreen,
  rootNavigation: () => RootNavigation,
}));

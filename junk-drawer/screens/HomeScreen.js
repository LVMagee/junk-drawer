import React from 'react';
import {
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import { MonoText } from '../components/StyledText';
import TouchIdTest from '../lock/touchid.js';



export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'JUNK DRAWER',
    },
  };

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
          </View>
          <TouchIdTest/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    top: 300,
  },
  logoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
});

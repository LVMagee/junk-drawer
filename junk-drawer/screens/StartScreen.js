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



export default class StartScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/junk-drawer-logo-3.png')}
              style={styles.startScreenImage}
          />
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
    top: 200,
  },
  logoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  startScreenImage: {
    width: 350,
    height: 248,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});

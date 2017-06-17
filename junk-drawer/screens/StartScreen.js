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
              source={require('../assets/images/junk-drawer.png')}
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
    top: 250,
  },
  startScreenImage: {
    width: 100,
    height: 98,
    resizeMode: 'contain',
    marginTop: 3,
  },
});

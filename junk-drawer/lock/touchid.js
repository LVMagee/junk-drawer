import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { 
  TouchID,
  AlertIOS,
} from 'react-native-touch-id';

export default class TouchIdTest extends Component {
  
 _pressHandler() {
    TouchID.authenticate('this is a secure way to authenticate yourself')
      .then(success => {
        AlertIOS.alert('Authenticated Successfully');
      })
      .catch(error => {
        AlertIOS.alert('Authentication Failed');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.touchIdButton} onPress={this._pressHandler}>
          <Text style={styles.touchIdButtonText}>
            Login with TouchID
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
    },
    touchIdButton: {
      top: 320,
      backgroundColor: '#fff',
      borderWidth: 2,
      borderRadius: 30,
      borderColor: '#0F0F0F',
      padding: 15,
    },
    touchIdButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0F0F0F',
    }
});
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
    TouchID.authenticate('to demo this react-native component')
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
      top: 350,
      backgroundColor: '#fff',
      borderWidth: 3,
      borderRadius: 20,
      borderColor: '#D41919',
      padding: 10,
    },
    touchIdButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#D41919',
    }
});
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimenstions,
  Platform,
  ScrollView
} from 'react-native';
import { BlurView } from 'expo';

import { ModernSansText } from '../components/StyledText';
import App from '../Assets.js';
import Header from '../headers/Header.js';
import InsuranceHeader from '../headers/InsuranceHeader.js';
import NavHeader from '../headers/navheader.js';


export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <View>
          <NavHeader/>
          <Header/>
        </View>
        <ScrollView>
          <App/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
  },
});

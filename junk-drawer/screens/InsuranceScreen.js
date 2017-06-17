import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import App from '../Insurance.js';
import NavHeader from '../headers/navheader.js';
import Header from '../headers/InsuranceHeader.js';


export default class InsuranceScreen extends React.Component {

  render() {
    return (
      <View style={styles.appContainer}>
        <NavHeader/>
        <Header/>
        <ScrollView>
          <App/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
  },
});

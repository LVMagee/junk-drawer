import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';
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
          <TouchableOpacity>
            <Foundation style={styles.addInsurance} name="plus" size={25} color="black"/>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    backgroundColor:'rgba(0,0,0,0)',
  },
  addInsurance: {
    marginLeft:30,
    bottom: 125,
    backgroundColor:'rgba(0,0,0,0)',
  }
});

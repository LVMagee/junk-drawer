import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  Image,
  TouchableOpacity
} from 'react-native';
import { ModernSansText } from '../components/StyledText';
import { Components } from 'expo';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@expo/ex-navigation';
import { Ionicons } from '@expo/vector-icons';

export default class NavHeader extends React.Component {
	render() {
		return (
			<View style={styles.toolbar}>
        <TouchableOpacity>
            <Ionicons style={styles.homescreen} name="md-home" size={25} color="#FF582D"/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons style={styles.user} name="md-happy" size={25} color="#FED140"/>
        </TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
  	backgroundColor: '#fff',
    paddingTop:7,
    paddingBottom:20,
    borderBottomWidth: 0.2,
    borderBottomColor: '#b2b2b2',
  },
  homescreen: {
    marginLeft: 30,
    top: 12,
    flex:1,
  },
  user: {
    textAlign: 'center',
    width: 650,
    top: 12,
  }
})
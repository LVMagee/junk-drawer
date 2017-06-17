import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  Image
} from 'react-native';
import { ModernSansText } from '../components/StyledText';
import { Components } from 'expo';

export default class NavHeader extends React.Component {
	render() {
		return (
			<View style={styles.toolbar}>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  toolbar: {
  	backgroundColor: '#fff',
    paddingTop:40,
    paddingBottom:20,
    borderBottomWidth: 0.2,
    borderBottomColor: '#b2b2b2',
  },
})
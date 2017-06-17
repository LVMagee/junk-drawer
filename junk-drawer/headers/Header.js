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
const { BlurView } = Components;

export default class Header extends React.Component {
	render() {
		return (
			<View>
					<View style={styles.toolbar}>
						<ModernSansText style={styles.title}>ITEMS</ModernSansText>
					</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  toolbar: {
  	backgroundColor:'rgba(0,0,0,0)',
    paddingTop:20,
    paddingBottom:20,
    borderBottomWidth: 0.3,
    borderBottomColor: '#b2b2b2',
  },
  title: {
  	fontSize: 30,
  	marginLeft: 30,
  	color: 'black',
    backgroundColor:'rgba(0,0,0,0)',
  },
})


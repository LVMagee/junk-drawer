import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Component,
  Image
} from 'react-native';
import { ModernSansText } from '../components/StyledText';
import { Components } from 'expo';

export default class InsuranceHeader extends React.Component {
	render() {
		return (
			<View>
					<View style={styles.toolbar}>
						<ModernSansText style={styles.title}>INSURANCE</ModernSansText>
					</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  toolbar: {
  	backgroundColor: '#fff',
    paddingTop:20,
    paddingBottom:20,
    borderBottomWidth: 0.2,
    borderBottomColor: '#b2b2b2',
  },
  title: {
  	fontSize: 30,
  	marginLeft: 30,
  	color: '#000',
  },
})
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { ModernSansText } from './components/StyledText';
import InsuranceHeader from './headers/InsuranceHeader.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      isCollapsed:true
    };
  }

  componentWillMount() {
    this._fetchData();
  }

  _fetchData() {
    fetch('https://powerful-atoll-50523.herokuapp.com/api/assets')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
       dataSource:this.state.dataSource.cloneWithRows(responseJson)
      })
    }).catch((error) => {
      console.error(error);
    });
  }

  onHeaderClick(){
      this.setState({
        isCollapsed:!this.state.isCollapsed
      })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <View style={styles.assetsList}>

            <TouchableOpacity onPress={this.onHeaderClick.bind(this)}>
              <Text style={styles.items}>{rowData.itemName}</Text>
            </TouchableOpacity>

            <Collapsible collapsed={this.state.isCollapsed}>
              <Text>{rowData.category}</Text>
              <Text>{rowData.make}</Text>
              <Text>{rowData.model}</Text>
              <Text>{rowData.serial_num}</Text>
              <Text>{rowData.bought}</Text>
              <Text>{rowData.price}</Text>
              <Text>{rowData.info}</Text>
            </Collapsible>
          </View>}
        />
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    top: 20,
    paddingBottom: 200,
  },
  assetsList: {
    flex: 1,
    marginLeft: 30,
    marginTop: 30,
  },
  items: {
    fontSize: 20,
  }
})

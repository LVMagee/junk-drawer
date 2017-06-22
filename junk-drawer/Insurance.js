import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { ModernSansText } from './components/StyledText';

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
    fetch('https://powerful-atoll-50523.herokuapp.com/api/insurance')
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
        renderRow={(rowData) => <View>

          <TouchableOpacity onPress={this.onHeaderClick.bind(this)}>
            <Text style={styles.spacing}>{rowData.insur_type}</Text>
          </TouchableOpacity>

          <Collapsible collapsed={this.state.isCollapsed}>
            <Text>{rowData.company}</Text>
            <Text>{rowData.phone_num}</Text>
            <Text>{rowData.agent}</Text>
            <Text>{rowData.policy_num}</Text>
            <Text>{rowData.start_date}</Text>
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
    marginLeft: 30,
    paddingBottom: 200,
  },
  spacing: {
    paddingTop: 20,
    fontSize: 20, 
  },
})
/*
  Apps Name: Todo List
  Author: Jony Roy
  Email: jonyroyice@gamil.com
  Github: www.github.com/abcxyz09
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ListView from './src/ListView';
export default class todoApps extends Component {

  appsTitle(){
    return(
      <View style={{justifyContent:'flex-start',paddingTop: 5,paddingBottom: 5,backgroundColor: '#F9FFFF'}}>
         <Text style={{alignSelf: 'center',fontWeight: 'bold',fontSize: 25,}}>Todo List</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.appsTitle()}
        <ListView></ListView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: 1,
    paddingRight: 1,
    backgroundColor: '#F8F8F8',
  }
});
AppRegistry.registerComponent('todoApps', () => todoApps);

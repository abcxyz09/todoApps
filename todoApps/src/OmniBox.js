

import React, { Component } from 'react';
import { TextInput } from 'react-native';
import TodoModel from './TodoModel';
import {moveTodoList,findTodo} from './Utils';


class OmniBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    //this.onKeyPress = this.onKeyPress.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
  }

  componentWillMount() {
    this.setState({
      newValue: '',
    });
  }

  onChange(event){
    var title = event.nativeEvent.text;
    var dataList = this.props.data.filter((item) => item.title.match(new RegExp('.*' + title +'.*', 'gi')));
    this.setState({newValue: title});
    this.props.updateDataList(dataList);
  }

  addTodoList(event){
         let n = event.nativeEvent.text.trim();
         if(n.length){
            let nn = new TodoModel(n);
            let dataList = this.props.data;
            //dataList.push(nn);
            dataList.unshift(nn); //Insert new Item begining at the dataList
            this.props.updateDataList(dataList);
            this.setState({newValue:''});
        }
  }
/*
  onKeyPress(event){
    if (event.nativeEvent.key == 'Enter' && this.state.newValue) {
      var newDataItem = new TodoModel(this.state.newValue);

      var dataList = this.props.data;
      var dataItem = findTodo(newDataItem, dataList);
      if(dataItem) {
        moveTodoList(dataList, (dataList.indexOf(dataItem)), 0);
        this.setState({newValue: ''});
        this.props.updateDataList(dataList);
        return;
      }
      dataList.unshift(newDataItem);
      this.setState({newValue: ''});
      this.props.updateDataList(dataList);
    }
  }
*/
  render() {
      //onKeyPress={this.onKeyPress}
      //onSubmitEditing={this.addTodoList}
      //onChange={this.onChange}
    return (
      <TextInput style={{height: 50, padding: 4, marginBottom: 0, fontSize: 20, borderWidth: 3, borderColor: '#eee', borderRadius: 8, backgroundColor: '#fff'}}
        placeholder='Add TodoList or Search'
        blurOnSubmit={false}
        value={this.state.newValue}
        onChange={this.onChange}
        onSubmitEditing={this.addTodoList}
        >
      </TextInput>
    );
  }
}

module.exports = OmniBox;

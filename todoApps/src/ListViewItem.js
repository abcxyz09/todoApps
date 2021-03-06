
//ListViewItem
import React, {Component} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import CheckBox from './CheckBox';

class ListViewItem extends Component {
  constructor(props) {
    super(props);
    this.onCheckBoxPressed = this.onCheckBoxPressed.bind(this);
    this.state = { data: this.props.data }
  }

  componentWillReceiveProps(props) { //called when props are passed to the Component
    this.setState({ data: this.props.data });
  }

  onCheckBoxPressed() {
    let data = this.state.data;
    data.completed = !data.completed;
    this.setState({ data: data });
    this.props.onCompletedChange(data, this.props.dataIndex);
  }

  render() {
    let data = this.state.data;
    let color = data.completed ? '#C5C8C9' : '#000';
    let textDecorationLine = data.completed ? 'line-through' : 'none';
    return (
      <TouchableHighlight underlayColor={'#eee'} style={{paddingTop: 6, paddingBottom: 6, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}} {...this.props.sortHandlers}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox data={data} color={color} onCheckBoxPressed={this.onCheckBoxPressed}></CheckBox>
          <Text style={{fontSize:18, color: color, textDecorationLine: textDecorationLine}}>{data.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

module.exports = ListViewItem;

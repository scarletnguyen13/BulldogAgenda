import React,  { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class IconButton extends Component {
  render() {
    return (
      <TouchableOpacity style={changeMargin(this.props.margin)}>
        <Icon name={this.props.name} size={this.props.size} color={this.props.color} />
      </TouchableOpacity>
    );
  }
}

function changeMargin(number) {
    return {
      marginLeft: number,
      marginRight: number
    }
}

export default IconButton;
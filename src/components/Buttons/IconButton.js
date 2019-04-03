import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({
  margin, onPress, name, size, color
}) => (
  <TouchableOpacity
    style={changeMargin(margin)}
    onPress={onPress}
  >
    <Icon name={name} size={size} color={color} />
  </TouchableOpacity>
);

function changeMargin(number) {
  return {
    marginLeft: number,
    marginRight: number
  };
}

export default IconButton;

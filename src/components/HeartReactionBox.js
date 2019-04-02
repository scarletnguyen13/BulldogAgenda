import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class HeartReactionBox extends Component {
  render() {
    return(
      <View style={[
        styles.reactionContainer, 
        { marginTop: this.props.linkURL !== '' ? 
          this.props.marginTop.true : this.props.marginTop.false}
        ]}>
        <TouchableOpacity activeOpacity={1} onPress={this.props.hasLiked}>
          <Icon name={this.props.liked ? "ios-heart" : "ios-heart-empty"} size={25} color={this.props.liked ? "red" : "black"} style={styles.iconStyle}/>
        </TouchableOpacity>
        <Text style={styles.grayText}>{this.props.count}</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  reactionContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconStyle: {
    marginRight: 5
  },
  grayText: {
    color: '#666666'
  },
});

export default HeartReactionBox;
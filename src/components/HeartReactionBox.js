import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeartReactionBox = ({
  linkURL, marginTop, hasLiked, liked, count
}) => (
  <View style={[
    styles.reactionContainer, { marginTop: linkURL !== '' ? marginTop.true : marginTop.false }]}
  >
    <TouchableOpacity activeOpacity={1} onPress={hasLiked}>
      <Icon name={liked ? 'ios-heart' : 'ios-heart-empty'} size={25} color={liked ? 'red' : 'black'} style={styles.iconStyle} />
    </TouchableOpacity>
    <Text style={styles.grayText}>{count}</Text>
  </View>
);

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

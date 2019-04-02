import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import moment from 'moment';

class NewsHeader extends Component {
  render() {
    return(
      <View style={styles.headerContainer}>
        <Image style={styles.image} resizeMode='contain' source={this.props.avatar}/>
        <View style={styles.headerTextContainer}>
          <Text style={styles.nameText}>{this.props.username}</Text>
          <Text style={styles.grayText}>{moment(this.props.sentAt).format('MMMM DD, LT')}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', 
    marginBottom: 15
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'black'
  },
  image: {
    width: 60, 
    height: 60, 
    borderRadius: 60/2 
  },
  headerTextContainer: {
    width: '90%',
    height: 60,
    justifyContent: 'center',
    marginLeft: 10
  },
  nameText: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#140bb9',
    marginRight: 20
  },
  grayText: {
    color: '#666666'
  },
});

export default NewsHeader;
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ReadMore from 'react-native-read-more-text';
import { blockOfText } from '../../constants/blockOfText';

class NewsfeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      count: 10
    }
    this.hasLiked = this.hasLiked.bind(this);
  }

  hasLiked = () => { 
    this.setState({
      liked: !this.state.liked,
      count: this.state.liked ? (this.state.count - 1) : (this.state.count + 1)
    }) 
  }

  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: '#0093ef', marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  }
 
  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: '#0093ef', marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  }
 
  _handleTextReady = () => {
    // ...
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.image} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.nameText}>Bulldog Software Co.</Text>
            <Text style={styles.grayText}>2 hrs</Text>
          </View>
        </View>
        <ReadMore
          numberOfLines={10}
          renderTruncatedFooter={this._renderTruncatedFooter}
          renderRevealedFooter={this._renderRevealedFooter}
          onReady={this._handleTextReady}>
          <Text style={styles.contentText} ellipsizeMode="tail">{blockOfText}</Text>
        </ReadMore>

        <View style={styles.reactionContainer}>
          <TouchableOpacity activeOpacity={1} onPress={this.hasLiked}>
            <Icon name={this.state.liked ? "ios-heart" : "ios-heart-empty"} size={25} color={this.state.liked ? "red" : "black"} style={{marginRight: 5}}/>
          </TouchableOpacity>
          <Text style={styles.grayText}>{this.state.count}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 20
  },
  headerContainer: {
    flexDirection: 'row', 
    marginBottom: 15
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'black'
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
    color: '#140bb9'
  },
  grayText: {
    color: '#666666'
  }, 
  contentText: {
    lineHeight: 23, 
    marginBottom: 15
  },
  reactionContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 15
  }
});

export default NewsfeedScreen;
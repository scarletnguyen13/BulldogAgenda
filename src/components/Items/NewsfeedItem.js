import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ReadMore from 'react-native-read-more-text';
import moment from 'moment';
import LinkPreview from 'react-native-link-preview';

class NewsfeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      count: 10
    }
    this.hasLiked = this.hasLiked.bind(this);
    this.setLinkReviewData = this.setLinkReviewData.bind(this);
  }

  hasLiked = () => { 
    this.setState({
      liked: !this.state.liked,
      count: this.state.liked ? (this.state.count - 1) : (this.state.count + 1)
    }) 
  }

  componentWillMount() {
    this.setLinkReviewData(this.props.notification.link);
  }

  setLinkReviewData(link) {
    LinkPreview
    .getPreview(link)
    .then(data => this.setState({
      linkTitle: data.title,
      linkDescription:  data.description
    }));
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
          <Image style={styles.image} resizeMode='contain' source={this.props.notification.user.avatar}/>
          <View style={styles.headerTextContainer}>
            <Text style={styles.nameText}>{this.props.notification.user.name}</Text>
            <Text style={styles.grayText}>{moment(this.props.notification.sentAt).format('MMMM DD, LT')}</Text>
          </View>
        </View>

        <ReadMore
          numberOfLines={10}
          renderTruncatedFooter={this._renderTruncatedFooter}
          renderRevealedFooter={this._renderRevealedFooter}
          onReady={this._handleTextReady}>
          <Text style={styles.contentText} ellipsizeMode="tail">
            {this.props.notification.content}
          </Text>
        </ReadMore>

        {this.props.notification.link !== '' && 
        <View> 
          <View style={{height: 20}}/>
          <TouchableOpacity 
            style={styles.linkContainer}
            onPress={() => Linking.openURL(this.props.notification.link)}>
            <View style={styles.horizontallyCentered}>
              <Text style={styles.linkURL} numberOfLines={1} ellipsizeMode="tail">{this.props.notification.link.replace(/(^\w+:|^)\/\//,'').trim()}</Text>

              {this.state.linkTitle !== undefined && <Text style={styles.linkTitle} numberOfLines={1} ellipsizeMode="tail">{this.state.linkTitle}</Text>}

              {this.state.linkDescription !== undefined && <Text style={styles.linkDescription} numberOfLines={1} ellipsizeMode="tail">{this.state.linkDescription}</Text>}
            </View>
          </TouchableOpacity>
        </View>}

        <View style={[styles.reactionContainer, { marginTop: this.props.notification.link !== '' ? 25 : 15}]}>
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
    marginRight: 40
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
    alignItems: 'center'
  },
  linkContainer: {
    backgroundColor: '#efefef', 
    paddingRight: 20, 
    paddingLeft: 20, 
    paddingTop: 10, 
    paddingBottom: 10, 
    borderBottomWidth: 3, 
    borderBottomColor: '#6b6a6a'
  }, 
  horizontallyCentered: {
    justifyContent: 'center'
  },
  linkURL: {
    textTransform: 'uppercase', 
    fontSize: 12, 
    color: '#6b6a6a'
  },
  linkTitle: {
    fontWeight: 'bold', 
    fontSize: 17, 
    marginTop: 10
  },
  linkDescription: {
    fontSize: 14, 
    marginTop: 10, 
    color: '#6b6a6a'
  }
});

export default NewsfeedScreen;
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ReadMore from 'react-native-read-more-text';
import LinkPreview from 'react-native-link-preview';
import NewsHeader from '../NewsHeader';
import URLPreview from '../URLPreview';
import HeartReactionBox from '../HeartReactionBox';

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
        <NewsHeader 
          avatar={this.props.notification.user.avatar}
          username={this.props.notification.user.name}
          sentAt={this.props.notification.sentAt}/>

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
          <URLPreview 
            linkURL={this.props.notification.link}
            linkTitle={this.state.linkTitle}
            linkDescription={this.state.linkDescription}/>
        </View>}

        <HeartReactionBox 
          linkURL={this.props.notification.link}
          marginTop={{true: 25, false: 15}}
          hasLiked={() => this.hasLiked}
          liked={this.state.liked}
          count={this.state.count}/>

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
  contentText: {
    lineHeight: 23, 
    marginBottom: 15
  },
});

export default NewsfeedScreen;
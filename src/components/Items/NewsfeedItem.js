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
    };
    this.hasLiked = this.hasLiked.bind(this);
    this.setLinkReviewData = this.setLinkReviewData.bind(this);
  }

  componentWillMount() {
    const { notification } = this.props;
    this.setLinkReviewData(notification.link);
  }

  setLinkReviewData(link) {
    LinkPreview
      .getPreview(link)
      .then(data => this.setState({
        linkTitle: data.title,
        linkDescription: data.description
      }));
  }

  hasLiked = () => {
    const { liked, count } = this.state;
    this.setState({
      liked: !liked,
      count: liked ? (count - 1) : (count + 1)
    });
  }

  _renderTruncatedFooter = (handlePress) => {
    const text = (
      <Text style={{ color: '#0093ef', marginTop: 5 }} onPress={handlePress}>
        Read more
      </Text>
    );
    return text;
  }

  _renderRevealedFooter = (handlePress) => {
    const text = (
      <Text style={{ color: '#0093ef', marginTop: 5 }} onPress={handlePress}>
        Show less
      </Text>
    );
    return text;
  }

  _handleTextReady = () => {
    // ...
  }

  render() {
    const { notification } = this.props;
    const {
      linkTitle, linkDescription, liked, count
    } = this.state;
    const { _renderTruncatedFooter, _renderRevealedFooter, _handleTextReady } = this;
    return (
      <View style={styles.outerContainer}>
        <NewsHeader
          avatar={notification.user.avatar}
          username={notification.user.name}
          sentAt={notification.sentAt}
        />

        <ReadMore
          numberOfLines={10}
          renderTruncatedFooter={_renderTruncatedFooter}
          renderRevealedFooter={_renderRevealedFooter}
          onReady={_handleTextReady}
        >
          <Text style={styles.contentText} ellipsizeMode="tail">
            {notification.content}
          </Text>
        </ReadMore>

        {notification.link !== ''
        && (
        <View>
          <View style={{ height: 20 }} />
          <URLPreview
            linkURL={notification.link}
            linkTitle={linkTitle}
            linkDescription={linkDescription}
          />
        </View>
        )}

        <HeartReactionBox
          linkURL={notification.link}
          marginTop={{ true: 25, false: 15 }}
          hasLiked={() => this.hasLiked}
          liked={liked}
          count={count}
        />
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

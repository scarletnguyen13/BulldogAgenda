import React, { Component } from 'react';
import {
  View, StyleSheet, Text, ScrollView
} from 'react-native';
import LinkPreview from 'react-native-link-preview';
import NewsHeader from '../../../components/NewsHeader';
import URLPreview from '../../../components/URLPreview';
import HeartReactionBox from '../../../components/HeartReactionBox';

class NotificationDetailsScreen extends Component {
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
    const { navigation } = this.props;
    const { notificationInfo } = navigation.state.params;
    this.setLinkReviewData(notificationInfo.link);
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

  render() {
    const { navigation } = this.props;
    const {
      linkTitle, linkDescription, liked, count
    } = this.state;
    const { notificationInfo } = navigation.state.params;

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.outerContainer}>
          <View style={styles.notificationContainer}>
            <NewsHeader
              avatar={notificationInfo.user.avatar}
              username={notificationInfo.user.name}
              sentAt={notificationInfo.sentAt}
            />

            <Text style={styles.contentText}>{notificationInfo.content}</Text>

            {notificationInfo.link !== ''
            && (
            <URLPreview
              linkURL={notificationInfo.link}
              linkTitle={linkTitle}
              linkDescription={linkDescription}
            />
            )}

            <HeartReactionBox
              linkURL={notificationInfo.link}
              marginTop={{ true: 30, false: 0 }}
              hasLiked={() => this.hasLiked}
              liked={liked}
              count={count}
            />

          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#e5e5e5'
  },
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 100
  },
  notificationContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20
  },
  contentText: {
    lineHeight: 23,
    marginBottom: 20
  }
});

export default NotificationDetailsScreen;

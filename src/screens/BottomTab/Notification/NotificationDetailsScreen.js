import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
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
    }
    this.hasLiked = this.hasLiked.bind(this);
    this.setLinkReviewData = this.setLinkReviewData.bind(this);
  }

  componentWillMount() {
    const { notificationInfo } = this.props.navigation.state.params;
    this.setLinkReviewData(notificationInfo.link);
  }

  hasLiked = () => { 
    this.setState({
      liked: !this.state.liked,
      count: this.state.liked ? (this.state.count - 1) : (this.state.count + 1)
    }) 
  }

  setLinkReviewData(link) {
    LinkPreview
    .getPreview(link)
    .then(data => this.setState({
        linkTitle: data.title,
        linkDescription:  data.description
      }));
  }

  render() {
    const { notificationInfo } = this.props.navigation.state.params;

    return(
      <ScrollView style={styles.scrollView}>
        <View style={styles.outerContainer}>
          <View style={styles.notificationContainer}>
            
            <NewsHeader 
              avatar={notificationInfo.user.avatar}
              username={notificationInfo.user.name}
              sentAt={notificationInfo.sentAt}/>

            <Text style={styles.contentText}>{notificationInfo.content}</Text>

            {notificationInfo.link !== '' && 
            <URLPreview 
              linkURL={notificationInfo.link}
              linkTitle={this.state.linkTitle}
              linkDescription={this.state.linkDescription}/>}

            <HeartReactionBox 
              linkURL={notificationInfo.link}
              marginTop={{true: 30, false: 0}}
              hasLiked={() => this.hasLiked}
              liked={this.state.liked}
              count={this.state.count}/>

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
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Linking, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinkPreview from 'react-native-link-preview';
import moment from 'moment';

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
            
            <View style={styles.headerContainer}>
              <Image style={{width: 60, height: 60, borderRadius: 60/2 }} resizeMode='center' source={notificationInfo.user.avatar}/>
              <View style={styles.headerTextContainer}>
                <Text style={styles.nameText}>{notificationInfo.user.name}</Text>
                <Text style={styles.grayText}>{moment(notificationInfo.sentAt).format('MMMM DD, LT')}</Text>
              </View>
            </View>
            <Text style={styles.contentText}>{notificationInfo.content}</Text>

            {notificationInfo.link !== '' && <TouchableOpacity 
              style={{width: '100%', backgroundColor: '#efefef', paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 3, borderBottomColor: '#6b6a6a'}}
              onPress={() => Linking.openURL(notificationInfo.link)}>
              <View style={{justifyContent: 'center'}}>
                <Text style={{textTransform: 'uppercase', fontSize: 12, color: '#6b6a6a'}} numberOfLines={1} ellipsizeMode="tail">{notificationInfo.link.replace(/(^\w+:|^)\/\//,'').trim()}</Text>

                {this.state.linkTitle !== undefined && <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}} numberOfLines={1} ellipsizeMode="tail">{this.state.linkTitle}</Text>}

                {this.state.linkDescription !== undefined && <Text style={{fontSize: 14, marginTop: 10, color: '#6b6a6a'}} numberOfLines={1} ellipsizeMode="tail">{this.state.linkDescription}</Text>}
              </View>
            </TouchableOpacity>}

            <View style={[styles.reactionContainer, { marginTop: notificationInfo.link !== '' ? 30 : 0}]}>
              <TouchableOpacity activeOpacity={1} onPress={this.hasLiked}>
                <Icon name={this.state.liked ? "ios-heart" : "ios-heart-empty"} size={25} color={this.state.liked ? "red" : "black"} style={styles.iconStyle}/>
              </TouchableOpacity>
              <Text style={styles.grayText}>{this.state.count}</Text>
            </View>

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
    color: '#140bb9',
    marginRight: 20
  },
  grayText: {
    color: '#666666'
  },
  contentText: {
    lineHeight: 23,
    marginBottom: 20
  },
  reactionContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconStyle: {
    marginRight: 5
  }
});

export default NotificationDetailsScreen;
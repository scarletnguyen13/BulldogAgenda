import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

class NotificationDetailsScreen extends Component {
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

  render() {
    const { notificationInfo } = this.props.navigation.state.params;

    return(
      <ScrollView style={styles.scrollView}>
        <View style={styles.outerContainer}>
          <View style={styles.notificationContainer}>
            
            <View style={styles.headerContainer}>
              <View style={styles.image} />
              <View style={styles.headerTextContainer}>
                <Text style={styles.nameText}>{notificationInfo.user.name}</Text>
                <Text style={styles.grayText}>{moment(notificationInfo.sentAt).fromNow()}</Text>
              </View>
            </View>
            <Text style={styles.contentText}>{notificationInfo.content}</Text>
            <View style={styles.reactionContainer}>
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
    marginBottom: 15
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
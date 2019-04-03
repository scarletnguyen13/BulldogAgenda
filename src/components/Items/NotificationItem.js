import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import moment from 'moment';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.state = { read: false };
    this.isRead = this.isRead.bind(this);
  }

  isRead = () => {
    const { read } = this.state;
    if (!read) this.setState({ read: true });
  }

  render() {
    const { navigation, notification } = this.props;
    const { read } = this.state;
    return (
      <TouchableOpacity
        onPress={() => {
          this.isRead();
          navigation.navigate('NotificationDetails', {
            notificationInfo: notification
          });
        }}
        activeOpacity={0.7}
      >
        <View style={[styles.outerContainer, { backgroundColor: read ? 'white' : '#e2f1ff' }]}>

          <Image
            style={styles.image}
            resizeMode="contain"
            source={notification.user.avatar}
          />
          <View style={styles.contentContainer}>
            <View style={styles.notiMessageContainer}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                <Text style={{ fontWeight: 'bold' }}>
                  {notification.user.name}
                </Text>
                {`${notification.action}: "${notification.content}"`}
              </Text>
            </View>
            <Text style={[styles.timeText, { color: read ? 'black' : '#0c66f7' }]}>{moment(notification.sentAt).fromNow()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    marginLeft: 10,
    marginRight: 15
  },
  bagde: {
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: 'pink',
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  contentContainer: {
    width: '67%',
    height: '100%',
    justifyContent: 'center'
  },
  notiMessageContainer: {
    width: '100%',
    height: 55,
    paddingRight: 10,
    justifyContent: 'center'
  },
  timeText: {
    fontSize: 12
  }
});

export default withNavigation(NotificationItem);

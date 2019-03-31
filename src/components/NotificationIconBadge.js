import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import IconBadge from 'react-native-icon-badge';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

class NotificationIconBadge extends Component {

  render() {
    return (
        <IconBadge
          MainElement = { <Icon name="ios-notifications" size={35} color={this.props.color} /> }
          BadgeElement = { <Text style={styles.badgeElement}>{this.props.notifications.latestNotificationCount}</Text> }
          IconBadgeStyle = {styles.iconBadge}
          Hidden={this.props.notifications.latestNotificationCount === 0}
        />
    );
  }
}

const styles = StyleSheet.create({
  badgeElement: {
    color:'#FFFFFF', 
    fontSize: 11
  },
  iconBadge: {
    width:20,
    height:20,
    borderRadius: 20,
    marginRight: -8,
    marginTop: -3,
    backgroundColor: 'red'
  }
});

const mapStateToProps = (state) => {
  const { notifications } = state
  return { notifications }
};

export default connect(mapStateToProps)(NotificationIconBadge);
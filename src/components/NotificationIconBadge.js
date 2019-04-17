import React from 'react';
import { StyleSheet, Text } from 'react-native';
import IconBadge from 'react-native-icon-badge';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationIconBadge = ({ color, notifications }) => (
  <IconBadge
    MainElement={<Icon name="ios-notifications" size={27} color={color} />}
    BadgeElement={<Text style={styles.badgeElement}>{notifications.latestNotificationCount}</Text>}
    IconBadgeStyle={styles.iconBadge}
    Hidden={notifications.latestNotificationCount === 0}
  />
);

const styles = StyleSheet.create({
  badgeElement: {
    color: '#FFFFFF',
    fontSize: 10
  },
  iconBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: -8,
    marginTop: -7,
    backgroundColor: 'red'
  }
});

const mapStateToProps = (state) => {
  const { notifications } = state;
  return { notifications };
};

export default connect(mapStateToProps)(NotificationIconBadge);

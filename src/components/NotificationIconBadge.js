import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconBadge from 'react-native-icon-badge';
import Icon from 'react-native-vector-icons/Ionicons';

class NotificationIconBadge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badgeCount: 7
    }
    this.resetBadgeCount = this.resetBadgeCount.bind(this);
  }

  resetBadgeCount = () => { this.setState({ badgeCount: 0 }) }

  render() {
    return(
      <View>
        <IconBadge
          MainElement = { <Icon name="ios-notifications" size={35} color={this.props.tintColor} /> }
          BadgeElement = { <Text style={styles.BadgeElement}>{this.state.badgeCount}</Text> }
          IconBadgeStyle = {styles.iconBadge}
          Hidden={this.state.badgeCount === 0}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BadgeElement: {
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

export default NotificationIconBadge;
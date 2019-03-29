import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.state = { read : false }
    this.isRead =  this.isRead.bind(this);
  }

  isRead = () => { this.setState({ read: true }) }

  render() {
    return (
      <TouchableOpacity onPress={() => {
          this.isRead();
          this.props.navigation.navigate('NotificationDetails');
        }} activeOpacity={0.7}>
        <View style={[styles.outerContainer, {backgroundColor: this.state.read ? 'white' : '#e2f1ff' }]}>
          <View style={styles.imageAndBadgeContainer}>
            <View style={styles.image} />
            <View style={styles.bagde}/>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.notiMessageContainer}>
              <Text numberOfLines={3} ellipsizeMode="tail"><Text style={{fontWeight: 'bold'}}>Bulldog Software Co. </Text>posted a new status on the wall</Text>
            </View>
            <Text style={[styles.timeText, { color: this.state.read ? 'black' : '#0c66f7' }]}>41 minutes ago</Text>
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

  imageAndBadgeContainer: {
    width: 80,
    height: 80,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'black'
  },
  bagde: {
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: 'pink',
    position: "absolute",
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
    height: 70,
    paddingRight: 10,
    justifyContent: 'center',
    marginBottom: 0
  },
  timeText: {
    fontSize: 12
  }
});

export default withNavigation(NotificationItem);
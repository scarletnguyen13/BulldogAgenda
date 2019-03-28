import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NotificationItem from '../../components/Items/NotificationItem';

class NotificationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Notifications</Text>
        </View>
        <ScrollView style={{width: '100%'}}>
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: "center"
  },
  labelContainer: {
    width: '100%',
    padding: 15,
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1
  },
  label: {
    fontWeight: 'bold', 
    fontSize: 15
  }
});

export default NotificationScreen;
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import NewsfeedItem from '../../components/Items/NewsfeedItem';

class NewsfeedScreen extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#e5e5e5'}}>
        <View style={styles.container}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Recent</Text>
          </View>
          <NewsfeedItem />
          <NewsfeedItem />
          <NewsfeedItem />
          <NewsfeedItem />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: "center", 
    justifyContent: "center"
  }, 
  labelContainer: {
    width: '100%',
    padding: 15,
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1,
    backgroundColor: '#e5e5e5'
  },
  label: {
    fontWeight: 'bold', 
    fontSize: 15
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'black'
  }
});

export default NewsfeedScreen;
import React from 'react';
import {
  View, ScrollView, StyleSheet, Text, FlatList
} from 'react-native';
import { connect } from 'react-redux';
import NewsfeedItem from '../../components/Items/NewsfeedItem';

const NewsfeedScreen = ({ notifications }) => (
  <ScrollView style={{ backgroundColor: '#e5e5e5' }}>
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Recent</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={Object.values(notifications.notificationsList)}
          renderItem={({ item }) => (
            <NewsfeedItem notification={item} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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
  }
});

const mapStateToProps = (state) => {
  const { notifications } = state;
  return { notifications };
};

export default connect(mapStateToProps)(NewsfeedScreen);

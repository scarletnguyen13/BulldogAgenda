import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import NotificationItem from '../../../components/Items/NotificationItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hasRead } from '../../../actions/NotificationActions';

class NotificationScreen extends Component {
  componentWillMount() {
    this.props.hasRead();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Notifications</Text>
        </View>
        <ScrollView style={{width: '100%'}}>
          <FlatList
            data={Object.values(this.props.notifications.notificationsList)}
            renderItem={({ item }) => {
              return (
                <NotificationItem notification={item}/>
              )
            }}
            keyExtractor={(item) => {item}}
          />
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

const mapStateToProps = (state) => {
  const { notifications } = state
  return { notifications }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    hasRead
   }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreen);
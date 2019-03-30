import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import IconBadge from 'react-native-icon-badge';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SettingsScreen from './src/screens/Settings/SettingsScreen';
import CourseDetailsScreen from './src/screens/Settings/CourseDetailsScreen';

import AgendaScreen from './src/screens/BottomTab/AgendaScreen';
import TimetableDailyScreen from "./src/screens/BottomTab/Timetable/TimetableDailyScreen";
import NotificationScreen from "./src/screens/BottomTab/Notification/NotificationScreen";
import CalendarScreen from "./src/screens/BottomTab/Timetable/CalendarScreen";
import AddButton from './src/components/Buttons/AddButton';
import IconButton from './src/components/Buttons/IconButton';
import NewsfeedScreen from './src/screens/BottomTab/NewsfeedScreen';
import AddTodoScreen from './src/screens/BottomTab/AddTodoScreen';
import NotificationDetailsScreen from './src/screens/BottomTab/Notification/NotificationDetailsScreen';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { addTodo, removeTodo } from '../../actions/TodoActions';

export const timetableTopTab = createMaterialTopTabNavigator(
  {
    Today: {
      screen: TimetableDailyScreen
    },
    Calendar: {
      screen: CalendarScreen
    }
  },
  {
    tabBarOptions: {
      pressOpacity: 1,
      upperCaseLabel: false,
      style: {
        backgroundColor: 'black',
        height: '7%'
      },
      indicatorStyle: {
        backgroundColor: 'white'
      }
    },
    initialRouteName: 'Calendar',
    transitionConfig : () => ({
      transitionSpec: {
        duration: 0
      },
    }),
    animationEnabled: false,
  }
);

export const TabNav = createBottomTabNavigator(
  {
    Agenda: {
      screen: AgendaScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-checkbox" size={35} color={tintColor} />
        )
      }
    },
    Timetable: {
      screen: timetableTopTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-journal" size={35} color={tintColor} />
        )
      }
    },
    AddButton: {
      screen: () => null,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: (
        <AddButton onPress={() => navigation.navigate('TodoDetails', {
          todoInfo: {
            id: null,
            description: '',
            course: -1,
            type: -1,
            dueDate: checkDefaultDaysLater(),
            dueTime: undefined,
            priority: -1,
            reminder: -1,
            additionalNotes: '',
            check: true
          }
        })}/>),
        tabBarOnPress: () => {}
      })
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <IconBadge
            MainElement = { <Icon name="ios-notifications" size={35} color={tintColor} /> }
            BadgeElement = { <Text style={styles.badgeElement}>{badgeCount}</Text> }
            IconBadgeStyle = {styles.iconBadge}
            Hidden={badgeCount === 0}
          />
        ),
        tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
          badgeCount = 0;
          navigation.navigate('Notification');
        },
      }
    )},
    Newsfeed: {
      screen: NewsfeedScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-paper" size={35} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#140bb9',
      inactiveTintColor: 'grey',
      activeBackgroundColor: '#d9d9d9'
    },
    initialRouteName: 'Timetable'
  }
  )

class TabNavigator extends Component {
  render() {
    return(
      <TabNav navigation={{
        dispatch: this.props.dispatch,
        state: this.props.nav
     }}/>
    );
  }
}

const mapStateToProps = (state) => {
  const { notifications } = state
  return { notifications }
};

export default connect(mapStateToProps)(TabNavigator);
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
  SafeAreaView
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { Platform } from 'react-native';
import NotificationIconBadge from './src/components/NotificationIconBadge';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SettingsScreen from './src/screens/Settings/SettingsScreen';
import CourseDetailsScreen from './src/screens/Settings/CourseDetailsScreen';

import AgendaScreen from './src/screens/BottomTab/AgendaScreen';
import TimetableDailyScreen from './src/screens/BottomTab/Timetable/TimetableDailyScreen';
import NotificationScreen from './src/screens/BottomTab/Notification/NotificationScreen';
import CalendarScreen from './src/screens/BottomTab/Timetable/CalendarScreen';
import AddButton from './src/components/Buttons/AddButton';
import IconButton from './src/components/Buttons/IconButton';
import NewsfeedScreen from './src/screens/BottomTab/NewsfeedScreen';
import AddTodoScreen from './src/screens/BottomTab/AddTodoScreen';
import NotificationDetailsScreen from './src/screens/BottomTab/Notification/NotificationDetailsScreen';

if (Platform.OS === 'android') {
  SafeAreaView.setStatusBarHeight(0);
}

const timetableTopTab = createMaterialTopTabNavigator(
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
        height: 40
      },
      indicatorStyle: {
        backgroundColor: 'white'
      }
    },
    initialRouteName: 'Today',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      },
    }),
    animationEnabled: false,
  }
);


export const TabNavigator = createBottomTabNavigator(
  {
    Agenda: {
      screen: AgendaScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-checkbox" size={27} color={tintColor} />
        )
      }
    },
    Timetable: {
      screen: timetableTopTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-journal" size={27} color={tintColor} />
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
          })}
          />
        ),
        tabBarOnPress: () => {}
      })
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <NotificationIconBadge color={tintColor} />
        )
      }
      )
    },
    Newsfeed: {
      screen: NewsfeedScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-paper" size={27} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#140bb9',
      inactiveTintColor: 'grey',
      style: {
        height: 45
      },
      activeBackgroundColor: '#d9d9d9'
    },
    initialRouteName: 'Timetable'
  }
);

const AppNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Settings: SettingsScreen,
    CourseDetails: CourseDetailsScreen,
    TodoDetails: AddTodoScreen,
    NotificationDetails: NotificationDetailsScreen,
    Main: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => ({
        headerLeft: null,
        title: '',
        headerStyle: {
          backgroundColor: '#140bb9',
          height: 30
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'normal',
        },
        headerRight: (
          <IconButton
            name="ios-settings"
            margin={20}
            size={20}
            color="white"
            onPress={() => navigation.navigate('Settings')}
          />
        ),
        // eslint-disable-next-line no-dupe-keys
        headerLeft: (
          <IconButton
            name="ios-menu"
            margin={15}
            size={25}
            color="white"
          />
        ),
      })
    }
  },
  {
    initialRouteName: 'Welcome',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      },
    })
  }
);

function checkDefaultDaysLater() {
  const today = new Date();
  if (moment(today).format('dddd') === 'Friday') {
    return moment(moment(new Date()).add(4, 'days').toDate()).format('YYYY-MM-DD');
  }
  return moment(moment(new Date()).add(2, 'days').toDate()).format('YYYY-MM-DD');
}

export default createAppContainer(AppNavigator);

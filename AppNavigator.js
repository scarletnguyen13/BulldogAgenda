import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import CourseDetailsScreen from './src/screens/CourseDetailsScreen';

import AgendaScreen from './src/screens/AgendaScreen';
import TimetableScreen from "./src/screens/TimetableScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import AddButton from './src/components/Buttons/AddButton';

const TabNavigator = createBottomTabNavigator({
  Agenda: {
    screen: AgendaScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-checkbox" size={35} color={tintColor} />
      )
    }
  },
  Timetable: {
    screen: TimetableScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-journal" size={35} color={tintColor} />
      )
    }
  },
  AddButton: {
		screen: () => null,
		navigationOptions: () => ({
			tabBarIcon: (<AddButton/>),
			tabBarOnPress: () => {}
		})
	},
  Notification: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-notifications" size={35} color={tintColor} />
      )
    }
  },
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-calendar" size={35} color={tintColor} />
      )
    }
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {

    },
  }),
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#140bb9',
    inactiveTintColor: 'grey',
    activeBackgroundColor: '#d9d9d9'
  },
}
);

const AppNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Settings: SettingsScreen,
    CourseDetails: CourseDetailsScreen,
    Main: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => ({
        headerLeft: null,
        title: "",
        headerStyle: {
          backgroundColor: '#140bb9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'normal',
        },
      })
    }
  },
  {
    initialRouteName: "Main",
    transitionConfig : () => ({
      transitionSpec: {
        duration: 0
      },
    })
  }
);


export default createAppContainer(AppNavigator);
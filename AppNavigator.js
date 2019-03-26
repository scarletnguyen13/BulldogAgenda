import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SettingsScreen from './src/screens/Settings/SettingsScreen';
import CourseDetailsScreen from './src/screens/Settings/CourseDetailsScreen';

import AgendaScreen from './src/screens/BottomTab/AgendaScreen';
import TimetableDailyScreen from "./src/screens/BottomTab/Timetable/TimetableDailyScreen";
import NotificationScreen from "./src/screens/BottomTab/NotificationScreen";
import CalendarScreen from "./src/screens/BottomTab/Timetable/CalendarScreen";
import AddButton from './src/components/Buttons/AddButton';
import IconButton from './src/components/Buttons/IconButton';
import NewsfeedScreen from './src/screens/BottomTab/NewsfeedScreen';
import AddTodoScreen from './src/screens/BottomTab/AddTodoScreen';

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
        height: '7%'
      },
      indicatorStyle: {
        backgroundColor: 'white'
      }
    },
    initialRouteName: 'Today',
    transitionConfig : () => ({
      transitionSpec: {
        duration: 0
      },
    }),
    animationEnabled: false,
  }
);



const TabNavigator = createBottomTabNavigator(
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
			tabBarIcon: (<AddButton onPress={() => navigation.navigate('TodoDetails')}/>),
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
);

const AppNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Settings: SettingsScreen,
    CourseDetails: CourseDetailsScreen,
    TodoDetails: AddTodoScreen,
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
        headerRight: (
          <IconButton 
            name="ios-settings"
            margin={20}
            size={27} 
            color='white'
            onPress={() => navigation.navigate('Settings')}/>
        ),
        headerLeft: (
          <IconButton 
            name="ios-menu"
            margin={15}
            size={40} 
            color='white' />
        ),
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
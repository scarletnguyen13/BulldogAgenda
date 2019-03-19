import { createStackNavigator, createAppContainer } from "react-navigation";
import WelcomeScreen from './src/screens/WelcomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import CourseDetailsScreen from './src/screens/CourseDetailsScreen';

const AppNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Settings: SettingsScreen,
    CourseDetails1_1: CourseDetailsScreen,
    CourseDetails1_2: CourseDetailsScreen,
    CourseDetails1_3: CourseDetailsScreen,
    CourseDetails1_4: CourseDetailsScreen,
    CourseDetails2_1: CourseDetailsScreen,
    CourseDetails2_2: CourseDetailsScreen,
    CourseDetails2_3: CourseDetailsScreen,
    CourseDetails2_4: CourseDetailsScreen
  },
  {
    initialRouteName: "Welcome",
    transitionConfig : () => ({
      transitionSpec: {
        duration: 0
      },
    })
  }
);


export default createAppContainer(AppNavigator);
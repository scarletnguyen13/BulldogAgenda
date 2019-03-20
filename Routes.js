import { createStackNavigator, createAppContainer } from "react-navigation";
import WelcomeScreen from './src/screens/WelcomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import CourseDetailsScreen from './src/screens/CourseDetailsScreen';

const AppNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Settings: SettingsScreen,
    CourseDetails: CourseDetailsScreen
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
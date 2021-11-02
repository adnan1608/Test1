import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ContactScreen from "./src/screens/ContactScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Contact: ContactScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Personal",
    },
  }
);


export default createAppContainer(navigator);

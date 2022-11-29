import { Login } from "./views/login";
import { Feed } from "./views/feed";
import { Friends } from "./views/friends";
import { Profile } from "./views/profile";
import { DailyPrompt } from "./views/daily_prompt";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyTabBar } from "./components/tabBar";
import useAuth, { AuthProvider } from "./hooks/useAuth";
import { useState } from "react";
const Tab = createBottomTabNavigator();

const NavContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Friends" component={Friends} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <AuthProvider>
      {loggedIn ? <NavContainer /> : <Login setLoggedIn={setLoggedIn} />}
    </AuthProvider>
  );
};

export default App;

import { Login } from "./views/login";
import { Register } from "./views/register";
import { Feed } from "./views/feed";
import { Friends } from "./views/friends";
import { Profile } from "./views/profile";
import { DailyPrompt } from "./views/daily_prompt";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyTabBar } from "./components/tabBar";
import useAuth, { AuthProvider } from "./hooks/useAuth";
import { useState } from "react";
import { Q1 } from "./views/Q1";
import { Q2 } from "./views/Q2";
import { Q3 } from "./views/Q3";
import { Q4 } from "./views/Q4";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NavContainer = () => {
  return (
    <>
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
    </>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [dailyPromptComplete, setDailyPromptComplete] = useState(false);

  const HOCLogin = () => <Login setLoggedIn={setLoggedIn} />;
  const HOCDailyPrompt = () => (
    <DailyPrompt setDailyPromptComplete={setDailyPromptComplete} />
  );
  const HOCQ4 = () => <Q4 setDailyPromptComplete={setDailyPromptComplete} />;
  return (
    <AuthProvider>
      <NavigationContainer>
        {dailyPromptComplete ? (
          <NavContainer />
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={HOCLogin} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="DailyPrompt" component={HOCDailyPrompt} />
            <Stack.Screen name="Q1" component={Q1} />
            <Stack.Screen name="Q2" component={Q2} />
            <Stack.Screen name="Q3" component={Q3} />
            <Stack.Screen name="Q4" component={HOCQ4} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

import { Login } from "./views/login";
import { Register } from "./views/register";
import { Feed } from "./views/feed";
import { Dashboard } from "./views/dashboard";
import { Friends } from "./views/friends";
import { Profile } from "./views/profile";
import { DailyPrompt } from "./views/daily_prompt";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Settings } from "./views/settings";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyTabBar } from "./components/tabBar";
import useAuth, { AuthProvider } from "./hooks/useAuth";
import { useState } from "react";
import { Q1 } from "./views/Q1";
import { Q2 } from "./views/Q2";
import { Q3 } from "./views/Q3";
import { Q4 } from "./views/Q4";
import { DiaryEntry } from "./views/diary-entry";
import { YourThoughtDiary } from "./views/your-thought-diary";
import { TodaysReport } from "./views/todays-report";
import { AccessHelp } from "./views/access-help";
import { ViewData } from "./views/view-data";
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
        <Tab.Screen name="Dashboard" component={DashboardNav} />
        <Tab.Screen name="Feed" component={Feed} />

        <Tab.Screen name="Friends" component={Friends} />
        <Tab.Screen name="Profile" component={ProfileNav} />
      </Tab.Navigator>
    </>
  );
};

const DashboardNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Dashboard} />
      <Stack.Screen name="ThoughtDiary" component={YourThoughtDiary} />
      <Stack.Screen name="TodaysReport" component={TodaysReport} />
      <Stack.Screen name="AccessHelp" component={AccessHelp} />
    </Stack.Navigator>
  );
};

const ProfileNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ViewData" component={ViewData} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [dailyPromptComplete, setDailyPromptComplete] = useState(false);

  const HOCLogin = () => <Login setLoggedIn={setLoggedIn} />;
  const HOCDailyPrompt = () => (
    <DailyPrompt setDailyPromptComplete={setDailyPromptComplete} />
  );
  const HOCDiaryEntry = () => (
    <DiaryEntry setDailyPromptComplete={setDailyPromptComplete} />
  );
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
            <Stack.Screen name="Q4" component={Q4} />
            <Stack.Screen name="DiaryEntry" component={HOCDiaryEntry} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

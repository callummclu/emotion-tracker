import { Login } from "./views/login";
import { Feed } from "./views/feed";
import { Friends } from "./views/friends";
import { Profile } from "./views/profile";
import { DailyPrompt } from "./views/daily_prompt";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DailyPrompt" component={DailyPrompt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

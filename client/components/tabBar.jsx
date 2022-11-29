import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
export function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, display: 'flex', alignItems:"center",justifyContent:"center", borderColor:"black", borderTopWidth:2, borderRightWidth:2, height:60}}
            >
                {label=="Dashboard" && <Icon name='home' size={30} color={isFocused ? "#FF8E53" : "black"} style={{height:30}}/>}
                {label=="Feed" && <Icon name='smile' size={30} color={isFocused ? "#FF8E53" : "black"} style={{height:30}}/>}
                {label=="Friends" && <Icon name='users' size={30} color={isFocused ? "#FF8E53" : "black"} style={{height:30}}/>}
                {label=="Profile" && <Icon name='user' size={30} color={isFocused ? "#FF8E53" : "black"} style={{height:30}}/>}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Home";
import ProfileScreen from "./Profile";

const Stack = createStackNavigator();

export default function AppHomeNavigator() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
  );
}
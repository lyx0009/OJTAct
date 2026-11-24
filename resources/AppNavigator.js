import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/AppHome/Home';
import LandingNavigator from './pages/Landing/LandingNavigator';
import ProfileScreen from './pages/AppHome/Profile';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LandingNavigator}
        options={{ headerShown: false }}
      />
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}
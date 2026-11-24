import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppHomeNavigator from './pages/AppHome/AppHomeNavigator';
import LandingNavigator from './pages/Landing/LandingNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingNavigator} />
        <Stack.Screen name="AppHome" component={AppHomeNavigator} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}
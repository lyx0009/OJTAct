import { Button, StyleSheet, Text, View } from 'react-native';
import LandingNavigator from './../Landing/LandingNavigator';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
        <Button
          title="Back to Login"
          onPress={() => {
            // Handle login logic here
            navigation.navigate('Login');
          }}
          ></Button>

      <Text>Profile</Text>
        <Button
          title="View Profile"
          onPress={() => {
            // Handle login logic here
            navigation.navigate('Profile');
          }}
          ></Button>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0d6d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

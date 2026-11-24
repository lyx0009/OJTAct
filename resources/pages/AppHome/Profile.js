import { Button, StyleSheet, Text, View } from 'react-native';
import LandingNavigator from './../Landing/LandingNavigator';

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
        <Button
          title="Back to Home Page"
          onPress={() => {
            // Handle login logic here
            navigation.navigate('Home');
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

import { Button, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
        <Button
          title="Login"
          onPress={() => {
            // Han login logic here
            navigation.navigate('AppHome');
          }}
          ></Button>

      <Text>Register</Text>
        <Button
          title="Register"
          onPress={() => {
            // Handle registration logic here
            navigation.navigate('Register');
          }}
          ></Button>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4dfdd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

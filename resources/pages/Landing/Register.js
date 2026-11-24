import { Button, StyleSheet, Text, View } from 'react-native';

export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Register Page</Text>
        <Button
          title="Back to Login"
          onPress={() => {
            // Handle registration logic here
            navigation.navigate('Login');
          }}
          ></Button>

      <Text>Submit Registration</Text>
        <Button
          title="Submit"
          onPress={() => {
            // Handle registration logic here
            navigation.navigate('Home');
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

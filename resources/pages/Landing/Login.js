import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginAPI } from './../../api/Login/login';

const colors = {
  background: '#e5ece8',
  cream: '#f7f6f0',
  darkGreen: '#193936',
  mutedGreen: '#526b66',
  border: '#cbd5d0',
  placeholder: '#9aa9a5',
  coral: '#f39b67',
  sage: '#9fc4b4',
  white: '#ffffff',
};

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutateAsync: loginFunction } = useMutation({
    mutationKey: ["login-api"],
    mutationFn: (data) => loginAPI(data),

    onSuccess: (response) => {
      console.log('Login successful:', response);
    },
    onError: (error) => {
      alert(error.response?.data?.message || 'An error occurred');
    },
  })

  const handleLogin = () => {
    if (!email || !password) {
      alert('Email and password are required.');
      return;
    }

    loginFunction({ email, password });
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.device}>
        <View style={styles.header}>
          <View style={styles.logoMark} accessibilityLabel="Haven logo">
            <View style={[styles.logoPetal, styles.logoPetalCoral]} />
            <View style={[styles.logoPetal, styles.logoPetalSage]} />
          </View>
          <Text style={styles.eyebrow}>WELCOME TO</Text>
          <Text style={styles.brand}>Haven</Text>
          <Text style={styles.tagline}>Your space. Your people. Your story.</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            placeholderTextColor={colors.placeholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            accessibilityLabel="Email address"
            returnKeyType="next"
          />

          <Text style={[styles.label, styles.passwordLabel]}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor={colors.placeholder}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="password"
            accessibilityLabel="Password"
            returnKeyType="done"
          />

          <Pressable
            accessibilityRole="button"
            onPress={handleLogin}
            style={({ pressed }) => [
              styles.loginButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.loginButtonText}>LOGIN</Text>
            <Text style={styles.arrow} accessibilityElementsHidden>
              →
            </Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('Register')}
            style={({ pressed }) => [
              styles.registerButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.registerButtonText}>REGISTER</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkGreen,
  },
  device: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: colors.darkGreen,
  },
  header: {
    flex: 0.39,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22,
    backgroundColor: colors.darkGreen,
  },
  logoMark: {
    width: 30,
    height: 22,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoPetal: {
    position: 'absolute',
    width: 13,
    height: 19,
    borderRadius: 10,
    transform: [{ rotate: '-38deg' }],
  },
  logoPetalCoral: {
    backgroundColor: colors.coral,
    marginLeft: -7,
    marginTop: 3,
  },
  logoPetalSage: {
    backgroundColor: colors.sage,
    marginLeft: 5,
    marginTop: -3,
  },
  eyebrow: {
    marginBottom: 6,
    color: colors.coral,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  brand: {
    marginBottom: 4,
    color: colors.white,
    fontSize: 40,
    fontWeight: '500',
    letterSpacing: -1.5,
  },
  tagline: {
    color: '#dce7e2',
    fontSize: 12,
    letterSpacing: 0.1,
  },
  form: {
    flex: 0.61,
    marginTop: -2,
    marginHorizontal: 6,
    marginBottom: 6,
    paddingHorizontal: 17,
    paddingTop: 18,
    borderRadius: 23,
    backgroundColor: colors.cream,
  },
  label: {
    marginBottom: 5,
    color: colors.mutedGreen,
    fontSize: 11,
    fontWeight: '500',
  },
  passwordLabel: {
    marginTop: 12,
  },
  input: {
    height: 38,
    paddingHorizontal: 11,
    borderWidth: 1,
    borderColor: '#d4ddd8',
    borderRadius: 10,
    backgroundColor: colors.white,
    color: colors.darkGreen,
    fontSize: 12,
  },
  loginButton: {
    height: 38,
    marginTop: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.darkGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  arrow: {
    marginLeft: 8,
    color: colors.white,
    fontSize: 14,
    lineHeight: 16,
  },
  registerButton: {
    height: 38,
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cream,
  },
  registerButtonText: {
    color: colors.darkGreen,
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 1,
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const colors = {
  cream: '#f7f6f0',
  darkGreen: '#193936',
  mutedGreen: '#526b66',
  border: '#cbd5d0',
  placeholder: '#9aa9a5',
  coral: '#f39b67',
  sage: '#9fc4b4',
  white: '#ffffff',
};

export default function RegisterScreen({ navigation }) {
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
          <Text style={styles.eyebrow}>JOIN HAVEN</Text>
          <Text style={styles.title}>Create account</Text>
          <Text style={styles.tagline}>Start making this space your own.</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Full name</Text>
          <TextInput
            style={styles.input}
            placeholder="Alex Morgan"
            placeholderTextColor={colors.placeholder}
            autoCapitalize="words"
            autoComplete="name"
            accessibilityLabel="Full name"
            returnKeyType="next"
          />

          <Text style={[styles.label, styles.fieldGap]}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            placeholderTextColor={colors.placeholder}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            accessibilityLabel="Email address"
            returnKeyType="next"
          />

          <Text style={[styles.label, styles.fieldGap]}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Create a password"
            placeholderTextColor={colors.placeholder}
            secureTextEntry
            autoComplete="new-password"
            accessibilityLabel="Password"
            returnKeyType="next"
          />

          <Text style={[styles.label, styles.fieldGap]}>Confirm password</Text>
          <TextInput
            style={styles.input}
            placeholder="Repeat your password"
            placeholderTextColor={colors.placeholder}
            secureTextEntry
            autoComplete="new-password"
            accessibilityLabel="Confirm password"
            returnKeyType="done"
          />

          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('AppHome')}
            style={({ pressed }) => [
              styles.submitButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.submitButtonText}>SUBMIT</Text>
            <Text style={styles.arrow} accessibilityElementsHidden>
              →
            </Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('Login')}
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.backButtonText}>BACK TO LOGIN</Text>
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
    flex: 0.31,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    backgroundColor: colors.darkGreen,
  },
  logoMark: {
    width: 30,
    height: 22,
    marginBottom: 8,
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
  title: {
    marginBottom: 4,
    color: colors.white,
    fontSize: 26,
    fontWeight: '600',
    letterSpacing: -0.8,
  },
  tagline: {
    color: '#dce7e2',
    fontSize: 12,
    letterSpacing: 0.1,
  },
  form: {
    flex: 0.69,
    marginTop: -2,
    marginHorizontal: 6,
    marginBottom: 6,
    paddingHorizontal: 17,
    paddingTop: 16,
    borderRadius: 23,
    backgroundColor: colors.cream,
  },
  label: {
    marginBottom: 5,
    color: colors.mutedGreen,
    fontSize: 11,
    fontWeight: '500',
  },
  fieldGap: {
    marginTop: 9,
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
  submitButton: {
    height: 38,
    marginTop: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.darkGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
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
  backButton: {
    height: 38,
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cream,
  },
  backButtonText: {
    color: colors.darkGreen,
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 1,
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

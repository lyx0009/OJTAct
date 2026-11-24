import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.topSafeArea}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <View style={styles.logoCoral}></View>
            <View style={styles.logoSage}></View>
          </View>
          <Text style={styles.headerTitle}>HAVEN</Text>
          <View style={styles.headerSpace}></View>
        </View>
        <View style={styles.headerLine}></View>
      </SafeAreaView>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>AM</Text>
        </View>
        <Text style={styles.eyebrow}>YOUR PROFILE</Text>
        <Text style={styles.name}>Alex Morgan</Text>
        <Text style={styles.memberSince}>Member since June 2025</Text>

        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Text style={styles.label}>EMAIL</Text>
            <Text style={styles.value}>alex.morgan@example.com</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>LOCATION</Text>
            <Text style={styles.value}>San Francisco, CA</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>STATUS</Text>
            <View style={styles.statusRow}>
              <View style={styles.statusDot}></View>
              <Text style={styles.value}>Active member</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <SafeAreaView edges={['bottom']} style={styles.bottomSafeArea}>
        <View style={styles.bottomBar}>
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('Home')}
            style={({ pressed }) => [styles.backButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.backButtonText}>←  BACK TO HOME</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f6f0',
  },
  topSafeArea: {
    backgroundColor: '#f7f6f0',
  },
  header: {
    height: 56,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCoral: {
    position: 'absolute',
    width: 10,
    height: 15,
    borderRadius: 9,
    backgroundColor: '#f39b67',
    marginLeft: -5,
    marginTop: 2,
    transform: [{ rotate: '-38deg' }],
  },
  logoSage: {
    position: 'absolute',
    width: 10,
    height: 15,
    borderRadius: 9,
    backgroundColor: '#9fc4b4',
    marginLeft: 4,
    marginTop: -2,
    transform: [{ rotate: '-38deg' }],
  },
  headerTitle: {
    color: '#193936',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },
  headerSpace: {
    width: 22,
  },
  headerLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#dce2dc',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 24,
  },
  avatar: {
    width: 62,
    height: 62,
    marginBottom: 16,
    borderRadius: 31,
    backgroundColor: '#d88b53',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  eyebrow: {
    marginBottom: 7,
    color: '#d77953',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.6,
  },
  name: {
    marginBottom: 5,
    color: '#193936',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
  memberSince: {
    color: '#899994',
    fontSize: 11,
  },
  details: {
    width: '88%',
    marginTop: 24,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#dce2dc',
    borderRadius: 14,
    backgroundColor: '#ffffff',
  },
  detailRow: {
    minHeight: 62,
    justifyContent: 'center',
  },
  label: {
    marginBottom: 5,
    color: '#899994',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
  },
  value: {
    color: '#193936',
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#e1e6e1',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 6,
    height: 6,
    marginRight: 8,
    borderRadius: 3,
    backgroundColor: '#70a58c',
  },
  bottomSafeArea: {
    backgroundColor: '#f7f6f0',
  },
  bottomBar: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 10,
  },
  backButton: {
    height: 42,
    borderRadius: 10,
    backgroundColor: '#193936',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

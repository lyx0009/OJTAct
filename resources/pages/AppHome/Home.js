import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const stories = [
  { name: 'Your story', initials: '+', color: '#f7f6f0' },
  { name: 'Jamie', initials: 'JL', color: '#72998d' },
  { name: 'Noah', initials: 'NS', color: '#d48a4d' },
  { name: 'Mika', initials: 'MK', color: '#c67768' },
  { name: 'Sam', initials: 'SO', color: '#829eaa' },
];

export default function HomeScreen({navigation}) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.topSafeArea}>
        <View style={styles.topBar}>
          <View style={styles.logo}>
            <View style={styles.logoCoral}></View>
            <View style={styles.logoSage}></View>
          </View>
          <Text style={styles.topTitle}>HOME</Text>
          <View style={styles.userAvatar}>
            <Text style={styles.userInitials}>AM</Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.stories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {stories.map((story) => (
            <View style={styles.story} key={story.name}>
              <View
                style={[
                  styles.storyCircle,
                  { backgroundColor: story.color },
                  story.name !== 'Your story' && styles.storyRing,
                  story.name === 'Your story' && styles.storyAddCircle,
                ]}
              >
                <Text
                  style={[
                    styles.storyInitials,
                    story.name === 'Your story' && styles.addStory,
                  ]}
                >
                  {story.initials}
                </Text>
              </View>
              <Text style={styles.storyName} numberOfLines={1}>
                {story.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        style={styles.feed}
        contentContainerStyle={styles.feedContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={[styles.avatar, { backgroundColor: '#72998d' }]}>
              <Text style={styles.avatarInitials}>JL</Text>
            </View>
            <View style={styles.authorInfo}>
              <Text style={styles.authorName}>Jamie Lee</Text>
              <Text style={styles.postTime}>12 min · San Francisco</Text>
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="More options for Jamie's post"
              onPress={() => Alert.alert('Post options', 'More options will be available soon.')}
              style={styles.moreButton}
            >
              <Text style={styles.moreText}>•••</Text>
            </Pressable>
          </View>
          <Text style={styles.postText}>
            Found the coziest corner to slow down in. Sometimes a quiet afternoon is all you need.
          </Text>

          <View style={styles.photo}>
            <View style={styles.window}>
              <View style={styles.windowPane}></View>
              <View style={styles.windowPane}></View>
              <View style={styles.windowPane}></View>
              <View style={styles.windowPane}></View>
            </View>
            <View style={styles.plantStem}></View>
            <View style={[styles.leaf, styles.leafOne]}></View>
            <View style={[styles.leaf, styles.leafTwo]}></View>
            <View style={[styles.leaf, styles.leafThree]}></View>
            <View style={[styles.leaf, styles.leafFour]}></View>
            <View style={styles.sofaBack}></View>
            <View style={styles.sofaSeat}></View>
            <View style={styles.sofaArm}></View>
            <View style={styles.sofaCushion}></View>
            <View style={styles.tableTop}></View>
            <View style={styles.tableLeg}></View>
            <View style={styles.book}></View>
          </View>

          <View style={styles.postStats}>
            <Text style={styles.statsText}>{liked ? '129' : '128'} appreciations</Text>
            <Text style={styles.statsText}>14 comments</Text>
          </View>
          <View style={styles.postActions}>
            <Pressable
              accessibilityRole="button"
              onPress={() => setLiked(!liked)}
              style={styles.actionButton}
            >
              <Text style={[styles.actionText, liked && styles.likedText]}>
                {liked ? '♥' : '♡'}  Appreciate
              </Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              onPress={() => Alert.alert('Comments', 'Comments will appear here.')}
              style={styles.actionButton}
            >
              <Text style={styles.actionText}>▢  Comment</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={[styles.avatar, { backgroundColor: '#d48a4d' }]}>
              <Text style={styles.avatarInitials}>NS</Text>
            </View>
            <View style={styles.authorInfo}>
              <Text style={styles.authorName}>Noah Santos</Text>
              <Text style={styles.postTime}>48 min · Following</Text>
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="More options for Noah's post"
              onPress={() => Alert.alert('Post options', 'More options will be available soon.')}
              style={styles.moreButton}
            >
              <Text style={styles.moreText}>•••</Text>
            </Pressable>
          </View>
          <View style={styles.note}>
            <Text style={styles.noteLabel}>DAILY NOTE</Text>
            <Text style={styles.noteQuote}>
              “Make room for the things that make you feel alive.”
            </Text>
          </View>
          <View style={styles.postStats}>
            <Text style={styles.statsText}>76 appreciations</Text>
            <Text style={styles.statsText}>8 comments</Text>
          </View>
          <View style={styles.postActions}>
            <Pressable
              accessibilityRole="button"
              onPress={() => Alert.alert('Appreciate', 'You appreciated Noah’s note.')}
              style={styles.actionButton}
            >
              <Text style={styles.actionText}>♡  Appreciate</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              onPress={() => Alert.alert('Comments', 'Comments will appear here.')}
              style={styles.actionButton}
            >
              <Text style={styles.actionText}>▢  Comment</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.endMessage}>
          <View style={styles.logo}>
            <View style={styles.logoCoral}></View>
            <View style={styles.logoSage}></View>
          </View>
          <Text style={styles.endTitle}>You’re all caught up</Text>
          <Text style={styles.endSubtitle}>Come back later for something new.</Text>
        </View>
      </ScrollView>

      <SafeAreaView edges={['bottom']} style={styles.bottomSafeArea}>
        <View style={styles.bottomBar}>
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('Landing', { screen: 'Login' })}
            style={({ pressed }) => [styles.backButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.backButtonText}>‹  BACK TO LOGIN</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('Profile')}
            style={({ pressed }) => [styles.profileButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.profileButtonText}>VIEW PROFILE  ›</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9eeea',
  },
  topSafeArea: {
    backgroundColor: '#f7f6f0',
  },
  topBar: {
    height: 58,
    paddingHorizontal: 20,
    backgroundColor: '#f7f6f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e5df',
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
  topTitle: {
    color: '#193936',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },
  userAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#d48a4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInitials: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '700',
  },
  stories: {
    height: 82,
    paddingTop: 10,
    backgroundColor: '#f7f6f0',
    borderBottomWidth: 1,
    borderBottomColor: '#dce2dc',
  },
  story: {
    width: 60,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  storyCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyRing: {
    borderWidth: 2,
    borderColor: '#f39b67',
  },
  storyAddCircle: {
    borderWidth: 1,
    borderColor: '#cbd5d0',
  },
  storyInitials: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '700',
  },
  addStory: {
    color: '#73847e',
    fontSize: 19,
    fontWeight: '400',
  },
  storyName: {
    width: '100%',
    marginTop: 4,
    color: '#526b66',
    fontSize: 11,
    textAlign: 'center',
  },
  feed: {
    flex: 1,
  },
  feedContent: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 14,
  },
  post: {
    marginBottom: 10,
    overflow: 'hidden',
    borderRadius: 14,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dce2dc',
  },
  postHeader: {
    minHeight: 48,
    paddingHorizontal: 11,
    paddingTop: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '700',
  },
  authorInfo: {
    flex: 1,
    marginLeft: 8,
  },
  authorName: {
    color: '#193936',
    fontSize: 12,
    fontWeight: '700',
  },
  postTime: {
    marginTop: 2,
    color: '#899994',
    fontSize: 11,
  },
  moreButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreText: {
    color: '#73847e',
    fontSize: 12,
    letterSpacing: 1,
  },
  postText: {
    paddingHorizontal: 11,
    paddingTop: 5,
    paddingBottom: 9,
    color: '#526b66',
    fontSize: 12,
    lineHeight: 18,
  },
  photo: {
    height: 245,
    marginHorizontal: 1,
    overflow: 'hidden',
    backgroundColor: '#b28e5e',
  },
  window: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '48%',
    height: '58%',
    padding: 5,
    backgroundColor: '#e5d7b4',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  windowPane: {
    width: '48%',
    height: '48%',
    marginBottom: '2%',
    backgroundColor: '#c7b98d',
  },
  plantStem: {
    position: 'absolute',
    right: 18,
    top: 20,
    width: 3,
    height: 126,
    backgroundColor: '#50633c',
    transform: [{ rotate: '9deg' }],
  },
  leaf: {
    position: 'absolute',
    width: 28,
    height: 13,
    borderRadius: 14,
    backgroundColor: '#536b3e',
  },
  leafOne: {
    right: 21,
    top: 38,
    transform: [{ rotate: '-35deg' }],
  },
  leafTwo: {
    right: 2,
    top: 58,
    transform: [{ rotate: '25deg' }],
  },
  leafThree: {
    right: 26,
    top: 80,
    transform: [{ rotate: '-25deg' }],
  },
  leafFour: {
    right: 0,
    top: 102,
    transform: [{ rotate: '35deg' }],
  },
  sofaBack: {
    position: 'absolute',
    left: '5%',
    bottom: 34,
    width: '60%',
    height: 95,
    borderRadius: 22,
    backgroundColor: '#98714c',
  },
  sofaSeat: {
    position: 'absolute',
    left: '8%',
    bottom: 15,
    width: '60%',
    height: 55,
    borderRadius: 18,
    backgroundColor: '#bd9a70',
  },
  sofaArm: {
    position: 'absolute',
    left: '4%',
    bottom: 12,
    width: 36,
    height: 78,
    borderRadius: 18,
    backgroundColor: '#a9845c',
  },
  sofaCushion: {
    position: 'absolute',
    left: '25%',
    bottom: 45,
    width: 53,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#c8aa82',
    transform: [{ rotate: '-8deg' }],
  },
  tableTop: {
    position: 'absolute',
    right: '3%',
    bottom: 42,
    width: '31%',
    height: 16,
    borderRadius: 8,
    backgroundColor: '#704b2c',
  },
  tableLeg: {
    position: 'absolute',
    right: '16%',
    bottom: 0,
    width: 10,
    height: 44,
    backgroundColor: '#704b2c',
  },
  book: {
    position: 'absolute',
    right: '12%',
    bottom: 59,
    width: 33,
    height: 6,
    backgroundColor: '#efe3c9',
    transform: [{ rotate: '-5deg' }],
  },
  postStats: {
    height: 26,
    paddingHorizontal: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e9e4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statsText: {
    color: '#899994',
    fontSize: 11,
  },
  postActions: {
    height: 36,
    flexDirection: 'row',
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: '#526b66',
    fontSize: 11,
  },
  likedText: {
    color: '#bd6b5d',
  },
  note: {
    minHeight: 102,
    marginHorizontal: 10,
    marginTop: 4,
    marginBottom: 10,
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#244c46',
    justifyContent: 'center',
  },
  noteLabel: {
    marginBottom: 10,
    color: '#f39b67',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  noteQuote: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
  },
  endMessage: {
    height: 118,
    alignItems: 'center',
    justifyContent: 'center',
  },
  endTitle: {
    marginTop: 4,
    color: '#193936',
    fontSize: 12,
    fontWeight: '600',
  },
  endSubtitle: {
    marginTop: 4,
    color: '#899994',
    fontSize: 11,
  },
  bottomSafeArea: {
    backgroundColor: '#f7f6f0',
  },
  bottomBar: {
    minHeight: 56,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f7f6f0',
    borderTopWidth: 1,
    borderTopColor: '#dce2dc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flex: 1,
    height: 38,
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#cbd5d0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#526b66',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.6,
  },
  profileButton: {
    flex: 1,
    height: 38,
    marginLeft: 0,
    borderRadius: 10,
    backgroundColor: '#193936',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileButtonText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

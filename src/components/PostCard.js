import React, {useMemo} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function PostCard({user, photoURL, description, createdAt, id}) {
  const date = useMemo(
    () => (createdAt ? new Date(createdAt._seconds * 1000) : new Date()),
    [createdAt],
  );
  const navigation = useNavigation();
  const onOpenProfile = () => {
    navigation.navigate('Profile', {
      userId: user.id,
      displayName: user.displayName,
    });
  };

  return (
    <View style={styles.block}>
      <View style={[styles.head, styles.paddingBlock]}>
        <Pressable style={styles.profile} onPress={onOpenProfile}>
          <Image
            source={{uri: user.photoURL}}
            resizeMode="cover"
            style={styles.avatar}
          />
          <Text style={styles.displayName}>{user.displayName}</Text>
        </Pressable>
      </View>
      <Image
        source={{uri: photoURL}}
        style={styles.image}
        resizeMethod="resize"
        resizeMode="cover"
      />
      <View style={styles.paddingBlock}>
        <Text style={styles.description}>{description}</Text>
        <Text date={date} style={styles.date}>
          {date.toLocaleString()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  paddingBlock: {
    paddingHorizontal: 16,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  displayName: {
    lineHeight: 16,
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  image: {
    backgroundColor: '#bdbdbd',
    width: '100%',
    aspectRatio: 1,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  date: {
    color: '#757575',
    fontSize: 12,
    lineHeight: 18,
  },
});

export default PostCard;

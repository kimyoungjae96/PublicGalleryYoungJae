import React from 'react';
import {StyleSheet, useWindowDimensions, Image, Pressable} from 'react-native';

function PostGridItem({post}) {
  const dimensions = useWindowDimensions();
  const size = dimensions.width / 3;

  const onPress = () => {};

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {opacity: pressed ? 0.6 : 1, width: size, height: size},
        styles.block,
      ]}>
      <Image
        style={styles.image}
        source={{uri: post.photoURL}}
        resizeMethod="resize"
        resizeMode="cover"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {},
  image: {
    backgroundColor: '#bdbdbd',
    width: '100%',
    height: '100%',
  },
});

export default PostGridItem;

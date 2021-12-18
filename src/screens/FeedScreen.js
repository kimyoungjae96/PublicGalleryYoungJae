import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {getPosts} from '../lib/posts';
import PostCard from '../components/PostCard';

function FeedScreen() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const renderItem = ({item}) => (
  <PostCard
    createdAt={item.createAt}
    description={item.description}
    id={item.id}
    user={item.user}
    photoURL={item.photoURL}
  />
);

export default FeedScreen;

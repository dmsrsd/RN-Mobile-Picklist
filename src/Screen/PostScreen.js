import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const PostScreen = ({ route }) => {
  const postId = route.params.id;
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(postId))
  );

  if (!post) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Post not found</Text>
    </View>;
  }

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Post {postId}</Text>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>{post.body}</Text>
    </View>
  );
};

export default PostScreen;
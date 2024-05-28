import React, { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../Redux/actions";

const HomeScreen = ({ route }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  const { data_salesman } = route.params || {};
  // Destructuring the data_salesman object to get salesman_code and salesman_name
  const { salesman_code, salesman_name, mobile } = data_salesman || {};

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Home Screen
      </Text>
      {data_salesman ? (
        <>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
            Salesman Code: {salesman_code}
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
            Salesman Name: {salesman_name}
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
            Salesman Phone: {mobile}
          </Text>
        </>
      ) : (
        <Text>No salesman data available</Text>
      )}
      {/* <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18, marginBottom: 8 }}>{item.title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      /> */}
    </View>
  );
};

export default HomeScreen;

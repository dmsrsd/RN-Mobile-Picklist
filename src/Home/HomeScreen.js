import React, { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ToastAndroid,
  BackHandler,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../Redux/actions";

const HomeScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  // Data Salesman From Login
  const { data_salesman } = route.params || {};

  // Destructuring the data_salesman object to get salesman_code and salesman_name
  const { salesman_code, salesman_name, mobile } = data_salesman || {};

  useEffect(() => {
    dispatch(fetchPosts());
    showToastWithGravity();

    const backAction = () => {
      return true; // Disable back button if already Login
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [dispatch]);

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      `Selamat Datang, ${salesman_name}!`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

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

import * as React from "react";
import store from "./src/Redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Home/HomeScreen";
import PostsScreen from "./src/Screen/PostScreen";
import LoginScreen from "./src/Login";
import ExampleTable from "./src/Table";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Posts" component={PostsScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ExampleTable" component={ExampleTable} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

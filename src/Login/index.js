import React, { useState, useEffect } from "react";
import { Button, TextInput, View, a } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getDataSalesman } from "../Redux/actions";

const LoginScreen = ({ navigation }) => {
  const [mobilePhone, setMobilePhone] = useState("");
  const dispatch = useDispatch();

  const dataSalesman = useSelector((state) => state.resSalesman.resSalesman);

  useEffect(() => {
    if (dataSalesman && dataSalesman.data_salesman) {
      navigation.navigate("Home", {
        data_salesman: dataSalesman.data_salesman,
      });
    }

    if (dataSalesman.status == 400) {
      alert("Nomor Tidak Ada");
    }
  }, [dataSalesman]);

  const handleLogin = () => {
    dispatch(getDataSalesman(mobilePhone));
    console.log("res_salesman", dataSalesman);
  };

  return (
    <View>
      <TextInput placeholder="Phone" onChangeText={setMobilePhone} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

// import React, { useState } from "react";
// import { Button, TextInput, View } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import { loginPosts } from "../Redux/actions";
// import { getDataSalesman } from "../Redux/actions";

// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState("");
//   // const [password, setPassword] = useState("");
//   const dispatch = useDispatch();

//   const user = useSelector((state) => state.login.user);
//   const dataSalesman = useSelector((state) => state.resSalesman.resSalesman);

//   const handleLogin = () => {
//     // dispatch(loginPosts({ username, password }));
//     dispatch(getDataSalesman(username));
//     console.log("res_salesman", dataSalesman);
//   };

//   return (
//     <View>
//       <TextInput placeholder="Username" onChangeText={setUsername} />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry={true}
//         onChangeText={setPassword}
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// export default LoginScreen;

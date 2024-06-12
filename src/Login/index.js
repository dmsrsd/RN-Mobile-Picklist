import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getDataSalesman } from "../Redux/actions";
import { SelectList } from "react-native-dropdown-select-list";
import { Button } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [mobilePhone, setMobilePhone] = useState("");

  const dispatch = useDispatch();

  const [selectedUser, setSelectedUser] = useState("");

  const dataSalesman = useSelector((state) => state.resSalesman.resSalesman);

  useEffect(() => {
    if (dataSalesman && dataSalesman.data_salesman) {
      navigation.navigate("HomeScreen", {
        data_salesman: dataSalesman.data_salesman,
      });
      // navigation.navigate("ExampleTable", {
      //   data_salesman: dataSalesman.data_salesman,
      // });
    }

    if (dataSalesman.status == 400) {
      alert("Nomor Tidak Ada");
    }

    console.log("dataSalesman", dataSalesman);
  }, [dataSalesman]);

  const handleLogin = () => {
    // dispatch(getDataSalesman(mobilePhone));
    dispatch(getDataSalesman(selectedUser));
  };

  const dtUserWarehouse = [
    { key: "0019", value: "Mugeni" },
    { key: "0098", value: "Hamami" },
    { key: "0101", value: "Azwar" },
    { key: "1665", value: "Imam Saputra" },
    { key: "1619", value: "Zaenudiin" },
    { key: "1587", value: "Ade Arisandi" },
    { key: "1623", value: "M Rizky Anwar Al Hasani" },
  ];

  const dtSalesman = [
    { key: "08118875031", value: "Yusriyal" },
    { key: "08118875057", value: "Amelia" },
    { key: "08118875034", value: "Starvian Sandi Pratama" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Mobile Picklist</Text>

        {/* <TextInput
          style={styles.input}
          placeholder="Phone"
          onChangeText={setMobilePhone}
        /> */}

        <SelectList
          setSelected={setSelectedUser}
          data={dtSalesman}
          onSelect={() => console.log("selected_dropdown =>", selectedUser)}
          search={true}
          boxStyles={{
            backgroundColor: "#FFFFFF",
            textAlign: "center",
            width: "100%",
            height: 50,
            borderRadius: 10,
          }}
          dropdownTextStyles={{
            color: "#FFFFFF",
            fontWeight: "bold",
            justifyContent: "center",
            fontSize: 16,
          }}
          inputStyles={{
            color: "#0066cc",
            fontWeight: "bold",
            justifyContent: "center",
            fontSize: 16,
          }}
        />
        <Text>{"\n"}</Text>

        {/* <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity> */}

        <Button style={styles.button} mode="contained" onPress={handleLogin}>
          Login
        </Button>

        <Text>{"\n"}</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#7C4DFF",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    // backgroundColor: "#eee",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderBottomColor: "#999",
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: "90%",
  },
  button: {
    padding: 5,
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
};

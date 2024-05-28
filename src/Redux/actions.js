import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

export const loginPosts = createAsyncThunk("login", async (body) => {
  try {
    const response = await axios.post(
      "http://192.168.150.163/platforma/report/login",
      body,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error.response ? error.response.data : new Error("Network Error");
  }
});

export const getDataSalesman = createAsyncThunk( "getSalesman", async (phoneNum) => {
    // let API = "http://192.168.150.163/platforma/data/get-data-salesman/" + phoneNum;
    // console.log("API", API);
    try {
      const response = await axios.get("http://192.168.150.163/platforma/data/get-data-salesman/" + phoneNum);
      console.log("res_get_salesman", response.data);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error.response ? error.response.data : new Error("Network Error");
    }
  }
);

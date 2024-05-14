import axios from "axios";
import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import Config from "react-native-config";

const Products = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Veri getirilirken hata oluştu:", error);
      }
    };
  
    const renderProduct = ({ item }) => (
      <View style={{ marginVertical: 10 }}>
        <Text>{item.title}</Text>
        <Text>{item.price} TL</Text>
      </View>
    );
  
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={data}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };
  
  export default Products;
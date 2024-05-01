import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Place } from "@/components/types";
import { PlaceItem } from "@/components/PlaceItem";

const Page = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getPlaces = async () => {
      const res = await fetch("http://localhost:8081/api/places");
      const data = await res.json();
      setData(data);
    };
    getPlaces();
  }, []);

  const itemFromList = ({ item }: { item: Place }) => {
    return <PlaceItem item={item} />;
  };

  return (
    <View accessible={true}>
      <FlatList
        data={data}
        renderItem={itemFromList}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default Page;

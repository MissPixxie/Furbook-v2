import { FlatList, StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Dog } from "@/components/types";
import { DogItem } from "@/components/dogItem";

const Page = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getDogs = async () => {
      const res = await fetch("../api/dogs");
      console.log(res);
      const data = await res.json();

      console.log(data);
    };
    getDogs();
  }, [data]);

  const itemFromList = ({ item }: { item: Dog }) => {
    return <DogItem item={item} />;
  };

  return (
    <View accessible={true}>
      <FlatList
        data={data}
        renderItem={itemFromList}
        keyExtractor={(item) => item.name}
      />
      <Text>Search dog screen</Text>
    </View>
  );
};

export default Page;

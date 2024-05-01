import { FlatList, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Event } from "@/components/types";
import { DogItem } from "@/components/dogItem";
import { EventItem } from "@/components/EventItem";

const Page = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getEvents = async () => {
      const res = await fetch("http://localhost:8081/api/events");
      const data = await res.json();
      setData(data);
    };
    getEvents();
  }, []);

  const itemFromList = ({ item }: { item: Event }) => {
    return <EventItem item={item} />;
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

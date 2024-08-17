import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Stack } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Place } from "@/components/types";
import { PlaceItem } from "@/components/PlaceItem";
import { ThemeContext } from "@/constants/ThemeContext";

const Page = () => {
  const [data, setData] = useState();
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });

  return (
    <View accessible={true} style={styles.container}>
      <FlatList
        data={data}
        renderItem={itemFromList}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default Page;

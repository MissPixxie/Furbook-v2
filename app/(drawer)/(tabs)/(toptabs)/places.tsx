import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Stack } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Place } from "@/constants/types";
import { PlaceItem } from "@/components/PlaceItem";
import { ThemeContext } from "@/constants/ThemeContext";
import { useFetchPlaces } from "@/apiFetch/useFetchPlaces";

const PlacesScreen = () => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const { placesData, error } = useFetchPlaces();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });

  const itemFromList = ({ item }: { item: Place }) => {
    return <PlaceItem item={item} />;
  };

  return (
    <View accessible={true} style={styles.container}>
      <FlatList
        data={placesData}
        renderItem={itemFromList}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default PlacesScreen;

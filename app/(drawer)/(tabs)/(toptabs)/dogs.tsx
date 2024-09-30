import { FlatList, StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import {
  router,
  Stack,
  useGlobalSearchParams,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Dog } from "@/constants/types";
import { DogItem } from "@/components/dogItem";
import { ThemeContext } from "@/constants/ThemeContext";

const Page = () => {
  const [data, setData] = useState();
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  const p = useLocalSearchParams();
  const g = useGlobalSearchParams();

  console.log(p);
  console.log(g);

  useEffect(() => {
    const getDogs = async () => {
      const res = await fetch("http://localhost:8081/api/dogs");
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    getDogs();
  }, []);

  const itemFromList = ({ item }: { item: Dog }) => {
    return <DogItem item={item} />;
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
      <Text>Search dog screen</Text>
    </View>
  );
};

export default Page;

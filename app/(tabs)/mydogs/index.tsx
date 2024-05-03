import { AddDog } from "@/components/AddDog";
import { CustomButton } from "@/components/customButton";
import { DogItem } from "@/components/dogItem";
import { Dog } from "@/components/types";
import { ThemeContext } from "@/constants/ThemeContext";
import { Stack, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MyDogsScreen() {
  const [data, setData] = useState();
  const router = useRouter();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [updateFromDetailScreen, setUpdateFromDetailScreen] = useState(false);

  const { colors } = theme;

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const updateWhenDogRemoved = (actionType: string, newState: boolean) => {
    if (actionType === "updated") {
      setUpdateFromDetailScreen(newState);
      getData();
    } else {
      console.log("something went wrong");
    }
  };

  async function getData() {}

  useEffect(() => {
    const getDogs = async () => {
      const res = await fetch("http://localhost:8081/api/dogs");
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    getDogs();
  }, []);

  // const routeToDog = () => {
  //   router.push(`/(tabs)/mydogs/${item.id}`);
  // };

  const itemFromList = ({ item }: { item: Dog }) => {
    return (
      <TouchableOpacity
        onPress={() => router.push(`/(tabs)/mydogs/${item._id}`)}
      >
        <DogItem item={item} />
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.card,
    },
  });

  return (
    <View accessible={true}>
      <KeyboardAvoidingView behavior="padding">
        {modalVisible && (
          <AddDog
            closeModal={toggleModal}
            //addDog={addDog}
            updateFunction={getData}
          />
        )}
      </KeyboardAvoidingView>
      <FlatList
        data={data}
        renderItem={itemFromList}
        keyExtractor={(item) => item.name}
        style={styles.container}
      />
      <CustomButton
        title="New dog"
        bgColor="#bced95"
        onPress={() => setModalVisible(true)}
      />
    </View>
  );

  // return (
  //   <View accessible={true} style={styles.container}>
  //     <View style={styles.main}>
  //       <Text style={styles.title}>My Dogs</Text>
  //       <Button onPress={() => router.push("/mydogs/1")} title="Dog Details" />
  //       <Button onPress={() => router.back()} title="Go back" />
  //     </View>
  //   </View>
  // );
}

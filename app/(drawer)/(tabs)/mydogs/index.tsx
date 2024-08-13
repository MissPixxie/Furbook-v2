import { AddDog } from "./_addDog";
import { CustomButton } from "@/components/customButton";
import { DogItem } from "@/components/dogItem";
import { Dog } from "@/components/types";
import { ThemeContext } from "@/constants/ThemeContext";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyDogsScreen() {
  const [data, setData] = useState<Dog[]>();
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

  async function getData() {
    try {
      const response = await fetch("http://localhost:8081/api/dogs/");
      console.log(response);
      const data = await response.json();
      setData(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

  const storeDogData = async (value: Dog) => {
    try {
      const dataToStore = JSON.stringify(value);
      await AsyncStorage.setItem("dog", dataToStore);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getDogs = async () => {
      const res = await fetch("http://localhost:8081/api/dogs/");
      const data = await res.json();
      setData(data);
    };
    getDogs();
  }, []);

  // const routeToDog = () => {
  //   router.push("/(tabs)/mydogs/1");
  // };

  const itemFromList = ({ item }: { item: Dog }) => {
    return (
      <TouchableOpacity
        onPress={async () => {
          await storeDogData(item);
          router.push(`/mydogs/${item._id}`);
        }}
      >
        <DogItem item={item} />
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
    flatList: {
      backgroundColor: colors.background,
    },
  });

  return (
    <View accessible={true} style={styles.container}>
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
        keyExtractor={(item) => item._id}
        style={styles.flatList}
      />
      <CustomButton
        title="New dog"
        bgColor="#bced95"
        onPress={() => setModalVisible(true)}
        marginBottom={70}
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

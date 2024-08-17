import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocalSearchParams, router, Stack, useRouter } from "expo-router";
import { ThemeContext } from "@/constants/ThemeContext";
import { Header } from "@/app/(drawer)/_header";
import { Image } from "expo-image";
import { DogImage } from "@/components/DogImage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dog } from "@/components/types";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { CustomButton } from "@/components/customButton";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { LinearButton } from "@/components/linearButton";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import { AddDogModal } from "./_addDogModal";
import { UpdateDogModal } from "./_updateDogModal";

const PAGE_WIDTH = window.innerWidth;

export default function DogIdPage() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const [doggyData, setDoggyData] = useState<Dog | undefined>();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const width = Dimensions.get("window").width;

  const [image, setImage] = useState<string | null>(null);
  const [selectedImageUpload, setSelectedImageUpload] = useState();
  const [cameraPermission, setCameraPermission] =
    ImagePicker.useCameraPermissions();

  const getDogData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("dog");
      setDoggyData(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = getDogData();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("PickImage function" + result);
      if (result.assets[0].uri != null) {
        setImage(`${result.assets[0].uri}`);
      }
    }
  };

  const saveDog = () => {
    // Do update on dog
  };

  const styles = StyleSheet.create({
    inputs: {
      padding: 10,
    },
    Input: {
      flexDirection: "row",
      width: 300,
      height: 50,
      margin: 10,
      padding: 10,
      backgroundColor: colors.inputs,
      alignItems: "center",
      borderColor: colors.text,
      borderBottomWidth: 1,
    },
    inputText: {
      marginLeft: 13,
      fontSize: 18,
      color: colors.text,
    },
    ImageContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      height: 300,
    },
  });

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: doggyData?.name,
          headerShown: true,
          headerTintColor: colors.text,
        }}
      />
      <KeyboardAvoidingView behavior="padding">
        {modalVisible && (
          <UpdateDogModal
            closeModal={toggleModal}
            //addDog={addDog}
            //updateFunction={getData}
          />
        )}
      </KeyboardAvoidingView>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 50 }}
          endFillColor={colors.background}
          style={{ flex: 1 }}
        >
          <View style={styles.ImageContainer}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <Image
                source={require("@/assets/images/OGBUB40.jpg")}
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </View>
          <View style={{ flex: 1 }}>
            <Carousel
              loop
              width={width}
              height={width / 2}
              autoPlay={false}
              data={[...new Array(6).keys()]}
              scrollAnimationDuration={1000}
              onSnapToItem={(index) => console.log("current index:", index)}
              renderItem={({ index }) => (
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ textAlign: "center", fontSize: 30 }}>
                    {index}
                  </Text>
                </View>
              )}
            />
          </View>
          <Feather
            name="settings"
            size={28}
            color="black"
            style={{ textAlign: "right", margin: 20 }}
            onPress={() => setModalVisible(true)}
          />
          <View
            style={{
              backgroundColor: colors.background,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <Text>{doggyData?.name}</Text>
            <Text>{doggyData?.age}</Text>
            <Text>{doggyData?.breed}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

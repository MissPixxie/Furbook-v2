import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
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
import { MaterialIcons } from "@expo/vector-icons";
import { LinearButton } from "@/components/linearButton";

export default function DogIdPage() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const [doggyData, setDoggyData] = useState<Dog | undefined>();

  const [image, setImage] = useState<string | null>(null);
  const [selectedImageUpload, setSelectedImageUpload] = useState();
  const [cameraPermission, setCameraPermission] =
    ImagePicker.useCameraPermissions();

  // INPUTS
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");

  const [openNeutered, setOpenNeutered] = useState(false);
  const [neutered, setNeutered] = useState(null);
  const [neuteredItems, setNeuteredItems] = useState([
    { label: "Yes", value: true },
    { label: "No", value: false },
  ]);

  const [openGender, setOpenGender] = useState(false);
  const [gender, setGender] = useState(null);
  const [genderItems, setGenderItems] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);

  const onNeuteredOpen = useCallback(() => {
    setOpenGender(false);
  }, []);

  const onGenderOpen = useCallback(() => {
    setOpenNeutered(false);
  }, []);

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

  const checkInput = () => {
    if (!name) {
      Alert.alert("Name is required");
      return;
    }
    if (!age) {
      Alert.alert("Age is required");
      return;
    }
    if (!gender) {
      Alert.alert("Sex is required");
      return;
    }
    if (!breed) {
      Alert.alert("Breed is required");
      return;
    }
    if (!neutered) {
      Alert.alert("Neutered is required");
      return;
    } else {
      saveDog();
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
          headerTitle: "",
          headerShown: true,
          headerTintColor: colors.text,
        }}
      />
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
          <View
            style={{
              backgroundColor: colors.background,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <View style={styles.inputs}>
              <View style={styles.Input}>
                <TextInput
                  onChangeText={setName}
                  value={name}
                  placeholder="Name"
                  style={styles.inputText}
                  placeholderTextColor={colors.text}
                />
              </View>
              <View style={styles.Input}>
                <TextInput
                  onChangeText={setAge}
                  value={age}
                  inputMode="numeric"
                  style={styles.inputText}
                  placeholder="Age"
                  placeholderTextColor={colors.text}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: 300,
                  height: 50,
                  padding: 10,
                  marginTop: 10,
                  alignItems: "center",
                  zIndex: 1,
                }}
              >
                <>
                  <DropDownPicker
                    open={openGender}
                    value={gender}
                    items={genderItems}
                    setOpen={setOpenGender}
                    onOpen={onGenderOpen}
                    setValue={setGender}
                    setItems={setGenderItems}
                    placeholder="Sex"
                    style={{
                      backgroundColor: colors.inputs,
                      width: 300,
                      borderTopWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderRadius: 0,
                      borderColor: colors.text,
                      borderBottomWidth: 1,
                    }}
                    dropDownDirection={"BOTTOM"}
                    dropDownContainerStyle={{
                      backgroundColor: colors.inputs,
                      width: 300,
                      display: "flex",
                      paddingVertical: 7,
                      zIndex: 1,
                    }}
                    textStyle={{
                      color: colors.text,
                      fontSize: 18,
                      margin: 10,
                    }}
                  />
                </>
              </View>
              <View style={styles.Input}>
                <TextInput
                  onChangeText={(value) => setBreed(value)}
                  value={breed}
                  placeholder="Breed"
                  style={styles.inputText}
                  placeholderTextColor={colors.text}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: 300,
                  height: 50,
                  padding: 10,
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <>
                  <DropDownPicker
                    open={openNeutered}
                    value={neutered}
                    items={neuteredItems}
                    setOpen={setOpenNeutered}
                    setValue={setNeutered}
                    setItems={setNeuteredItems}
                    onOpen={onNeuteredOpen}
                    placeholder="Neutered"
                    style={{
                      backgroundColor: colors.inputs,
                      width: 300,
                      borderTopWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderRadius: 0,
                      borderColor: colors.text,
                      borderBottomWidth: 1,
                    }}
                    dropDownContainerStyle={{
                      backgroundColor: colors.inputs,
                      width: 300,
                      display: "flex",
                      paddingVertical: 7,
                      borderWidth: 1,
                      borderColor: colors.text,
                    }}
                    dropDownDirection={"BOTTOM"}
                    textStyle={{
                      color: colors.text,
                      fontSize: 18,
                      margin: 10,
                    }}
                  />
                </>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <LinearButton
                title="Save"
                bgColor="#f7f7f7"
                borderColor="#71ce24"
                color={colors.text}
                width="60%"
                gradientColors={colors.gradientButton}
                borderWidth={2}
                onPress={checkInput}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

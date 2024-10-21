import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  View,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Button,
  PermissionsAndroid,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Overlay } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";

// COMPONENTS
import { CustomButton } from "@/components/customButton";
import * as ImagePicker from "expo-image-picker";
// import { Picker } from "@react-native-picker/picker";

// ICONS
import { Foundation, Entypo, MaterialIcons } from "@expo/vector-icons";

// CONTEXT
import { ThemeContext } from "@/constants/ThemeContext";
import { LinearButton } from "@/components/linearButton";

interface Props {
  closeModal: () => void;
  //addDog: (dogs: Dogs) => void;
  updateFunction?: () => void;
}

export const AddDogModal = ({ closeModal, updateFunction }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const [image, setImage] = useState<string | null>(null);
  const [selectedImageUpload, setSelectedImageUpload] = useState();
  const [cameraPermission, setCameraPermission] =
    ImagePicker.useCameraPermissions();

  // INPUTS
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");

  const [neutered, setNeutered] = useState(false);

  const [male, setMale] = useState(Boolean);
  const [female, setFemale] = useState(Boolean);
  const [gender, setGender] = useState(null);

  const onNeuteredOpen = useCallback(() => {}, []);

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

  console.log(neutered);
  async function newDog() {
    // Logic for adding dog
  }

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
      newDog();
    }
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
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 9,
    },
    inputText: {
      marginLeft: 13,
      fontSize: 18,
      color: colors.text,
    },
    exitButton: {
      alignSelf: "flex-end",
      color: "#5d5d5d",
      marginHorizontal: 10,
      marginTop: 10,
    },
    ImageContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
    },
    ImageIconContainer: {
      position: "absolute",
      zIndex: 1,
      top: 110,
      right: 95,
      backgroundColor: "#597D3E",
      padding: 5,
      borderRadius: 4,
    },
    ImageIcon: {
      // position: "absolute",
      // zIndex: 2,
      // top: 110,
      // right: 95,
    },
  });

  return (
    <TouchableWithoutFeedback onPress={closeModal}>
      <KeyboardAwareScrollView>
        <KeyboardAvoidingView behavior="padding">
          <Overlay
            isVisible={true}
            fullScreen={false}
            backdropStyle={{ backgroundColor: "black", opacity: 0.7 }}
            onBackdropPress={closeModal}
            overlayStyle={{
              borderRadius: 10,
              backgroundColor: colors.background,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Entypo
                name="cross"
                size={36}
                color="black"
                style={styles.exitButton}
                onPress={closeModal}
              />
              <View style={styles.inputs}>
                <View style={styles.ImageContainer}>
                  {image ? (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 200, height: 200, zIndex: -1 }}
                    />
                  ) : (
                    <Image
                      source={require("@/assets/images/OGBUB40.jpg")}
                      style={{ width: 140, height: 140, zIndex: -1 }}
                    />
                  )}
                  <View style={styles.ImageIconContainer}>
                    <MaterialIcons
                      name="add-a-photo"
                      size={32}
                      color="black"
                      onPress={pickImage}
                      style={styles.ImageIcon}
                    />
                  </View>
                </View>
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
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                  }}
                >
                  <BouncyCheckbox
                    onPress={(isChecked: boolean) => {
                      setFemale(true);
                      setMale(false);
                    }}
                    isChecked={female}
                    fillColor="#7ba856"
                    unFillColor="white"
                    text="Female"
                    style={{ width: "50%" }}
                    iconStyle={{ borderRadius: 4 }}
                    innerIconStyle={{ borderColor: "transparent" }}
                    textStyle={{
                      textDecorationLine: "none",
                    }}
                  />
                  <BouncyCheckbox
                    onPress={(isChecked: boolean) => {
                      setFemale(false);
                      setMale(true);
                    }}
                    isChecked={male}
                    fillColor="#7ba856"
                    unFillColor="white"
                    text="Male"
                    style={{ width: "50%" }}
                    iconStyle={{ borderRadius: 4 }}
                    innerIconStyle={{ borderColor: "transparent" }}
                    textStyle={{
                      textDecorationLine: "none",
                    }}
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
                  <BouncyCheckbox
                    onPress={(isChecked: boolean) => {
                      setNeutered(true);
                    }}
                    isChecked={neutered}
                    fillColor="#7ba856"
                    unFillColor="white"
                    text="Neutered"
                    style={{ width: "50%" }}
                    iconStyle={{ borderRadius: 4 }}
                    innerIconStyle={{ borderColor: "transparent" }}
                    textStyle={{
                      textDecorationLine: "none",
                    }}
                  />
                </View>
              </View>

              <View style={{ zIndex: -1, width: "100%" }}>
                <LinearButton
                  title="Add new dog"
                  onPress={checkInput}
                  gradientColors={["#bced95", "#d2f2b8", "#bced95"]}
                  color={colors.background}
                />
                <LinearButton
                  title="Close"
                  onPress={closeModal}
                  gradientColors={["#0c1603", "#182c07", "#0c1603"]}
                  color={colors.text}
                />
              </View>
            </View>
          </Overlay>
        </KeyboardAvoidingView>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

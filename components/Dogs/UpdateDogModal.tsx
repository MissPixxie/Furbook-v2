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

// COMPONENTS
import { CustomButton } from "../Buttons/customButton";
import * as ImagePicker from "expo-image-picker";
// import { Picker } from "@react-native-picker/picker";

// ICONS
import { Foundation, Entypo, MaterialIcons } from "@expo/vector-icons";

// CONTEXT
import { ThemeContext } from "@/constants/ThemeContext";

interface Props {
	closeModal: () => void;
	//addDog: (dogs: Dogs) => void;
	updateFunction?: () => void;
}

export const UpdateDogModal = ({ closeModal, updateFunction }: Props) => {
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

	// const pickerRef = useRef<any>();

	// function open() {
	//   if (pickerRef != undefined) {
	//     pickerRef.current.focus();
	//   }
	// }

	// function close() {
	//   if (pickerRef != undefined) {
	//     pickerRef.current.blur();
	//   }
	// }

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
						backdropStyle={{
							backgroundColor: "black",
							opacity: 0.7,
						}}
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
										onChangeText={(value) =>
											setBreed(value)
										}
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
												zIndex: -1,
											}}
											dropDownContainerStyle={{
												backgroundColor: colors.inputs,
												width: 300,
												display: "flex",
												paddingVertical: 7,
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
							<View style={{ zIndex: -1, width: "100%" }}>
								<CustomButton
									title="Save"
									bgColor="#f7f7f7"
									borderColor="#71ce24"
									borderWidth={2}
									onPress={checkInput}
									width="60%"
								/>
								<CustomButton
									title="Close"
									bgColor="#bced95"
									onPress={closeModal}
									width="60%"
								/>
							</View>
						</View>
					</Overlay>
				</KeyboardAvoidingView>
			</KeyboardAwareScrollView>
		</TouchableWithoutFeedback>
	);
};

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
import DateTimePicker, {
	AndroidNativeProps,
	DateTimePickerAndroid,
	DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

// COMPONENTS
import * as ImagePicker from "expo-image-picker";
// import { Picker } from "@react-native-picker/picker";

// ICONS
import {
	Foundation,
	Entypo,
	MaterialIcons,
	AntDesign,
	Ionicons,
	FontAwesome6,
} from "@expo/vector-icons";

// CONTEXT
import { ThemeContext } from "@/constants/ThemeContext";
import { LinearButton } from "./Buttons/LinearButton";
import RNDateTimePicker from "@react-native-community/datetimepicker";

interface Props {
	closeModal: () => void;
	updateFunction?: () => void;
}

export const CreatePlaceModal = ({ closeModal, updateFunction }: Props) => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const { colors } = theme;
	const [image, setImage] = useState<string | null>(null);
	const [selectedImageUpload, setSelectedImageUpload] = useState();
	const [cameraPermission, setCameraPermission] =
		ImagePicker.useCameraPermissions();

	// INPUTS
	const [name, setName] = useState("");
	const [infoText, setInfoText] = useState("");
	const [location, setLocation] = useState("");

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
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

	async function newEvent() {
		// Logic for adding dog
	}

	const checkInput = () => {
		if (!name) {
			Alert.alert("Name is required");
			return;
		}
		if (!infoText) {
			Alert.alert("Information is required");
			return;
		}
		if (!location) {
			Alert.alert("Location is required");
			return;
		} else {
			newEvent();
		}
	};

	const styles = StyleSheet.create({
		inputs: {
			padding: 10,
		},
		Input: {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			width: 300,
			height: 50,
			borderBottomColor: "grey",
			borderBottomWidth: 1,
			color: colors.text,
		},
		inputText: {
			fontFamily: "Manrope-Bold",
			fontSize: 18,
			color: "black",
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
						backdropStyle={{
							backgroundColor: "black",
							opacity: 0.7,
						}}
						onBackdropPress={closeModal}
						overlayStyle={{
							borderRadius: 10,
							backgroundColor: "white",
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
									<AntDesign
										name="tag"
										size={20}
										color="black"
									/>
									<TextInput
										onChangeText={setName}
										value={name}
										placeholder="Name"
										style={styles.inputText}
										placeholderTextColor="#636363"
									/>
								</View>
								<View style={styles.Input}>
									<Ionicons
										name="information-circle-outline"
										size={24}
										color="black"
									/>
									<TextInput
										onChangeText={setInfoText}
										value={infoText}
										inputMode="numeric"
										style={styles.inputText}
										placeholder="Information"
										placeholderTextColor="#636363"
									/>
								</View>
								<View style={styles.Input}>
									<FontAwesome6
										name="map-location-dot"
										size={20}
										color="black"
									/>
									<TextInput
										onChangeText={(value) =>
											setLocation(value)
										}
										value={location}
										placeholder="Location"
										style={styles.inputText}
										placeholderTextColor="#636363"
									/>
								</View>
								<View
									style={{
										display: "flex",
										flexDirection: "column",
										rowGap: 15,
										marginTop: 15,
									}}
								></View>
							</View>

							<View style={{ zIndex: -1, width: "100%" }}>
								<LinearButton
									title="Add new place"
									onPress={checkInput}
									gradientColors={[
										"#bced95",
										"#d2f2b8",
										"#bced95",
									]}
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

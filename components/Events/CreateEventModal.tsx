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
import { CustomButton } from "../Buttons/customButton";
import * as ImagePicker from "expo-image-picker";
// import { Picker } from "@react-native-picker/picker";

// ICONS
import { Foundation, Entypo, MaterialIcons } from "@expo/vector-icons";

// CONTEXT
import { ThemeContext } from "@/constants/ThemeContext";
import { LinearButton } from "../Buttons/LinearButton";
import RNDateTimePicker from "@react-native-community/datetimepicker";

interface Props {
	closeModal: () => void;
	updateFunction?: () => void;
}

export const CreateEventModal = ({ closeModal, updateFunction }: Props) => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const { colors } = theme;
	const [image, setImage] = useState<string | null>(null);
	const [selectedImageUpload, setSelectedImageUpload] = useState();
	const [cameraPermission, setCameraPermission] =
		ImagePicker.useCameraPermissions();
	const [date, setDate] = useState(new Date(1598051730000));
	const [mode, setMode] = useState<"date" | "time" | "datetime">("date");
	const [show, setShow] = useState(false);

	const onChange = (
		event: DateTimePickerEvent,
		selectedDate?: Date | undefined
	) => {
		const currentDate = selectedDate;
		setShow(false);
		if (currentDate !== undefined) {
			setDate(currentDate);
		}
	};

	const showMode = (currentMode: "date" | "time" | "datetime") => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatePicker = () => {
		showMode("date");
	};

	const showTimePicker = () => {
		showMode("time");
	};

	// INPUTS
	const [title, setTitle] = useState("");
	const [infoText, setInfoText] = useState("");
	const [location, setLocation] = useState("");
	const [day, setDay] = useState("");

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
		if (!title) {
			Alert.alert("Title is required");
			return;
		}
		if (!infoText) {
			Alert.alert("Information is required");
			return;
		}
		if (!location) {
			Alert.alert("Location is required");
			return;
		}
		if (!day) {
			Alert.alert("Day is required");
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
								<View style={styles.ImageContainer}>
									{image ? (
										<Image
											source={{ uri: image }}
											style={{
												width: 200,
												height: 200,
												zIndex: -1,
											}}
										/>
									) : (
										<Image
											source={require("@/assets/images/OGBUB40.jpg")}
											style={{
												width: 140,
												height: 140,
												zIndex: -1,
											}}
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
										onChangeText={setTitle}
										value={title}
										placeholder="Title"
										style={styles.inputText}
										placeholderTextColor={colors.text}
									/>
								</View>
								<View style={styles.Input}>
									<TextInput
										onChangeText={setInfoText}
										value={infoText}
										inputMode="numeric"
										style={styles.inputText}
										placeholder="Information"
										placeholderTextColor={colors.text}
									/>
								</View>
								<View style={styles.Input}>
									<TextInput
										onChangeText={(value) =>
											setLocation(value)
										}
										value={location}
										placeholder="Location"
										style={styles.inputText}
										placeholderTextColor={colors.text}
									/>
								</View>
								<View style={styles.Input}>
									<TextInput
										onChangeText={(value) => setDay(value)}
										value={day}
										placeholder="Day"
										style={styles.inputText}
										placeholderTextColor={colors.text}
									/>
								</View>
								<Button
									onPress={showDatePicker}
									title="Show date picker"
								/>
								<Button
									onPress={showTimePicker}
									title="Show time picker"
								/>
								<Text>{date.toLocaleString()}</Text>
								{show && (
									<DateTimePicker
										testID="dateTimePicker"
										value={date}
										mode={mode}
										is24Hour={true}
										onChange={onChange}
									/>
								)}
							</View>

							<View style={{ zIndex: -1, width: "100%" }}>
								<LinearButton
									title="Add new dog"
									onPress={checkInput}
									gradientColors={[
										"#bced95",
										"#d2f2b8",
										"#bced95",
									]}
									color={colors.background}
								/>
								<LinearButton
									title="Close"
									onPress={closeModal}
									gradientColors={[
										"#0c1603",
										"#182c07",
										"#0c1603",
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

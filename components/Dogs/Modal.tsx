import React, { ReactNode, useContext } from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  Text,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Overlay } from "@rneui/themed";
import { ImageItem } from "@/constants/types";

// ICONS
import { Entypo } from "@expo/vector-icons";

// CONTEXT
import { ThemeContext } from "@/constants/ThemeContext";
import ImageElement from "../ImageGallery/ImageElement";

interface Props {
  closeImageModal: () => void;
  image: ImageItem | null;
}

export const Modal = ({ closeImageModal, image }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;

  const styles = StyleSheet.create({
    exitButton: {
      marginRight: 20,
    },
    imageStyle: {
      alignSelf: "flex-end",
    },
  });

  return (
    <TouchableWithoutFeedback onPress={closeImageModal}>
      <KeyboardAwareScrollView>
        <KeyboardAvoidingView behavior="padding">
          <Overlay
            isVisible={true}
            fullScreen={false}
            backdropStyle={{ backgroundColor: "black", opacity: 0.7 }}
            onBackdropPress={closeImageModal}
            overlayStyle={{
              flex: 1,
              backgroundColor: "transparent",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 18, color: "white" }}
                  onPress={closeImageModal}
                >
                  Close
                </Text>
                <Entypo
                  name="cross"
                  size={28}
                  color="white"
                  style={styles.exitButton}
                  onPress={closeImageModal}
                />
              </View>
              <Image source={image?.url} style={styles.imageStyle} />
            </View>
          </Overlay>
        </KeyboardAvoidingView>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

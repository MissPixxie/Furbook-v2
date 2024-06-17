import { AntDesign, Feather } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "@/constants/ThemeContext";

export const TabHeader = () => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
      paddingBottom: 10,
    },
    iconStyle: {
      color: "black",
      textAlign: "right",
      marginRight: 15,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.iconStyle}>
        <AntDesign name="arrowleft" size={30} color={"black"} onPress={() => {}} />
      </Text>
    </SafeAreaView>
  );
};

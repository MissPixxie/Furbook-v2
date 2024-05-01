import { Feather } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Header = () => {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
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
        <Feather name="menu" size={30} color={"black"} onPress={toggleDrawer} />
      </Text>
    </SafeAreaView>
  );
};

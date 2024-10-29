import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabBar,
} from "@react-navigation/material-top-tabs";
import React, { useContext, useEffect, useState } from "react";
import { Slot, withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { SearchBar } from "@rneui/themed";
import { ThemeContext } from "@/constants/ThemeContext";
import { color } from "@rneui/themed/dist/config";
import Search from "@/components/Search";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const TopTabsLayout = () => {
  const [search, setSearch] = useState<string>("");
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.background }}>
        <Search searchValue="" />
      </SafeAreaView>
      <MaterialTopTabs
        screenOptions={{
          tabBarStyle: { backgroundColor: colors.inputs },
          tabBarLabelStyle: { color: colors.text },
          tabBarIndicatorStyle: { borderBottomColor: "green" },
          tabBarActiveTintColor: "green",
        }}
      >
        {/* <MaterialTopTabs.Screen name="dogs" /> */}
        <MaterialTopTabs.Screen name="events" />
        <MaterialTopTabs.Screen name="places" />
      </MaterialTopTabs>
    </>
  );
};

export default TopTabsLayout;

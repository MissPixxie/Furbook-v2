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

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const Layout = () => {
  const [search, setSearch] = useState<string>("");

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <>
      <SafeAreaView>
        <SearchBar
          accessible={true}
          accessibilityLabel="Searchbar"
          containerStyle={{
            backgroundColor: "white",
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
          }}
          inputContainerStyle={{
            backgroundColor: "#fff",
          }}
          searchIcon={{
            size: 26,
            color: "black",
          }}
          inputStyle={{
            fontSize: 16,
            color: "black",
          }}
          placeholderTextColor={"black"}
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        />
      </SafeAreaView>
      <MaterialTopTabs>
        <MaterialTopTabs.Screen name="dogs" />
        <MaterialTopTabs.Screen name="events" />
        <MaterialTopTabs.Screen name="places" />
      </MaterialTopTabs>
    </>
  );
};

export default Layout;
